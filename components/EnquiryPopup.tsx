'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function EnquiryPopup() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  
  // Auto-open on home page only
  useEffect(() => {
    if (pathname === '/') {
      setIsVisible(true)
    }
  }, [pathname])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productRequirement: '',
    quantity: '',
    message: ''
  })

  // Listen for open popup events
  useEffect(() => {
    const handleOpenPopup = () => {
      setIsVisible(true)
    }

    window.addEventListener('open-enquiry-popup', handleOpenPopup)
    return () => window.removeEventListener('open-enquiry-popup', handleOpenPopup)
  }, [])

  // Lock body scroll when popup is visible
  useEffect(() => {
    if (isVisible) {
      // Save current scroll position
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      return () => {
        // Restore scroll position when popup closes
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          productRequirement: '',
          quantity: '',
          message: ''
        })
        // Close popup after 2 seconds
        setTimeout(() => {
          handleClose()
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isVisible) {
    return null
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="enquiry-popup-backdrop"
        onClick={handleClose}
        aria-hidden="true"
      />
      
      {/* Popup Card */}
      <div className="enquiry-popup-card enquiry-popup-card-with-form" role="dialog" aria-labelledby="enquiry-popup-title" aria-modal="true">
        <button 
          className="enquiry-popup-close"
          onClick={handleClose}
          aria-label="Close enquiry popup"
          disabled={isSubmitting}
        >
          ×
        </button>
        
        <div className="enquiry-popup-content">
          <h2 id="enquiry-popup-title" className="enquiry-popup-title">
            Need Help with Your Order?
          </h2>
          <p className="enquiry-popup-text">
            Get expert assistance with product specifications, bulk orders, and export inquiries.
          </p>
          
          {submitStatus === 'success' ? (
            <div className="enquiry-popup-success">
              <p>✓ Thank you for your enquiry! We will get back to you soon.</p>
            </div>
          ) : (
            <form className="enquiry-popup-form" onSubmit={handleSubmit}>
              <div className="enquiry-form-group">
                <label htmlFor="enquiry-name">Name *</label>
                <input
                  type="text"
                  id="enquiry-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="enquiry-form-input"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="enquiry-form-group">
                <label htmlFor="enquiry-email">Email *</label>
                <input
                  type="email"
                  id="enquiry-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="enquiry-form-input"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="enquiry-form-group">
                <label htmlFor="enquiry-phone">Phone *</label>
                <input
                  type="tel"
                  id="enquiry-phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="enquiry-form-input"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="enquiry-form-group">
                <label htmlFor="enquiry-product">Product Requirement</label>
                <select
                  id="enquiry-product"
                  name="productRequirement"
                  value={formData.productRequirement}
                  onChange={handleChange}
                  className="enquiry-form-input"
                  disabled={isSubmitting}
                >
                  <option value="">Select a product</option>
                  <option value="washed-low-ec">Washed Low EC Coco Peat</option>
                  <option value="unwashed-high-ec">Unwashed High EC Coco Peat</option>
                  <option value="buffered">Buffered Coco Peat</option>
                  <option value="washed-chips">Washed Coco Chips</option>
                  <option value="unwashed-chips">Unwashed Coco Chips</option>
                  <option value="grow-bags">Grow Bags</option>
                  <option value="custom-mix">Custom Blend Mixes</option>
                </select>
              </div>
              
              <div className="enquiry-form-group">
                <label htmlFor="enquiry-quantity">Quantity / Monthly Volume</label>
                <input
                  type="text"
                  id="enquiry-quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g., 1000 blocks/month"
                  className="enquiry-form-input"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="enquiry-form-group">
                <label htmlFor="enquiry-message">Message</label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="enquiry-form-input"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              {submitStatus === 'error' && (
                <div className="enquiry-popup-error">
                  <p>Something went wrong. Please try again or contact us directly.</p>
                </div>
              )}
              
              <div className="enquiry-popup-form-actions">
                <button 
                  type="submit" 
                  className="enquiry-popup-button primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                </button>
                <Link 
                  href="/contact" 
                  className="enquiry-popup-button secondary"
                  onClick={handleClose}
                >
                  Full Contact Form
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  )
}


