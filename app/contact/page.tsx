'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productRequirement: '',
    quantity: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Header />
      <main className="page-main">
        <div className="page-hero">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle">We&apos;re here to assist with product specifications, bulk orders, and export inquiries</p>
        </div>

        <section className="page-section">
          <div className="page-container">
            <div className="contact-wrapper">
              <div className="contact-info">
                <h2 className="contact-section-title">Contact Information</h2>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div>
                      <h3 className="contact-label">Phone</h3>
                      <a href="tel:+919791964479" className="contact-value">+91 9791964479</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">✉️</div>
                    <div>
                      <h3 className="contact-label">Email</h3>
                      <a href="mailto:info@cocoagrotech.com" className="contact-value">info@cocoagrotech.com</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div>
                      <h3 className="contact-label">Factory Address</h3>
                      <p className="contact-value">
                        CocoAgroTech Substrates Pvt. Ltd.<br />
                        Anaimalai, Coimbatore - 642107<br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-wrapper">
                <h2 className="contact-section-title">Send Us a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productRequirement">Product Requirement</label>
                    <select
                      id="productRequirement"
                      name="productRequirement"
                      value={formData.productRequirement}
                      onChange={handleChange}
                      className="form-input"
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
                  <div className="form-group">
                    <label htmlFor="quantity">Quantity / Monthly Volume</label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 1000 blocks/month"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input"
                    ></textarea>
                  </div>
                  {submitStatus === 'success' && (
                    <div style={{ 
                      background: 'rgba(46, 160, 67, 0.15)', 
                      border: '1px solid rgba(46, 160, 67, 0.3)', 
                      borderRadius: '8px', 
                      padding: '12px', 
                      marginBottom: '16px',
                      color: 'var(--white)'
                    }}>
                      ✓ Thank you for your inquiry! We will get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div style={{ 
                      background: 'rgba(220, 53, 69, 0.15)', 
                      border: '1px solid rgba(220, 53, 69, 0.3)', 
                      borderRadius: '8px', 
                      padding: '12px', 
                      marginBottom: '16px',
                      color: 'var(--white)'
                    }}>
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}
                  <button 
                    type="submit" 
                    className="form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

