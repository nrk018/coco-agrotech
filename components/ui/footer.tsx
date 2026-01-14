"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Twitter, 
  Instagram, 
  Dribbble, 
  MessageCircle, 
  Facebook, 
  Linkedin, 
  Youtube,
  ArrowUp
} from "lucide-react";

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productRequirement: '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          productRequirement: '',
          quantity: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="footer-main-wrapper">
      <div className="footer-container">
        <div className="footer-two-column">
          {/* Left Half - Footer Content */}
          <div className="footer-left-half">
            {/* Company Description Section */}
            <div className="footer-about-section">
              <div className="footer-logo">C</div>
              <div className="footer-about-text">
                <p>
                  Welcome to CocoAgroTech, where quality meets sustainability to bring premium coco peat solutions to life. 
                  We are passionate about transforming natural coconut husks into exceptional growing media. We specialize in 
                  crafting high-quality coco peat products, sustainable agricultural solutions, and reliable export services 
                  that meet the needs of growers worldwide.
                </p>
              </div>
            </div>

            {/* Navigation Links Section */}
            <div className="footer-nav-section">
              <div className="footer-nav-column">
                <h3 className="footer-nav-heading">About</h3>
                <Link href="/about" className="footer-nav-link">About Us</Link>
                <Link href="/gallery" className="footer-nav-link">Gallery</Link>
              </div>
              <div className="footer-nav-column">
                <h3 className="footer-nav-heading">Products</h3>
                <Link href="/products/coco-peat" className="footer-nav-link">Coco Peat</Link>
                <Link href="/products/growing-media" className="footer-nav-link">Growing Media</Link>
                <Link href="/products/agri-peat" className="footer-nav-link">Agri Peat</Link>
              </div>
              <div className="footer-nav-column">
                <h3 className="footer-nav-heading">Quality</h3>
                <Link href="/products/processing" className="footer-nav-link">Processing</Link>
                <Link href="/products/quality" className="footer-nav-link">Quality Control</Link>
              </div>
              <div className="footer-nav-column">
                <h3 className="footer-nav-heading">Services</h3>
                <Link href="/contact" className="footer-nav-link">Contact</Link>
                <Link href="/" className="footer-nav-link">Request Quote</Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="footer-social-section">
              <div className="footer-social-icons">
                <a href="mailto:info@cocoagrotech.com" className="footer-social-icon" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Dribbble">
                  <Dribbble className="h-5 w-5" />
                </a>
                <a href="https://wa.me/919791964479" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="WhatsApp">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
              <div className="footer-utility-buttons">
                <button type="button" onClick={handleScrollTop} className="footer-utility-btn" aria-label="Scroll to top">
                  <ArrowUp className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-copyright">
              <p>
                © Coco Agrotech. All rights reserved
                <span className="footer-separator"> | </span>
                <span className="footer-built-by">
                  Web application managed by <span className="footer-buildit-font">buildit</span>
                </span>
              </p>
            </div>
          </div>

          {/* Right Half - Contact Form */}
          <div className="footer-right-half">
            <div className="footer-form-wrapper">
              <h2 className="footer-form-title">Send Us a Message</h2>
              <form className="footer-form" onSubmit={handleSubmit}>
                <div className="footer-form-group">
                  <label htmlFor="footer-name">Name *</label>
                  <input
                    type="text"
                    id="footer-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="footer-form-input"
                  />
                </div>
                <div className="footer-form-group">
                  <label htmlFor="footer-email">Email *</label>
                  <input
                    type="email"
                    id="footer-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="footer-form-input"
                  />
                </div>
                <div className="footer-form-group">
                  <label htmlFor="footer-phone">Phone *</label>
                  <input
                    type="tel"
                    id="footer-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="footer-form-input"
                  />
                </div>
                <div className="footer-form-group">
                  <label htmlFor="footer-productRequirement">Product Requirement</label>
                  <select
                    id="footer-productRequirement"
                    name="productRequirement"
                    value={formData.productRequirement}
                    onChange={handleChange}
                    className="footer-form-input"
                  >
                    <option value="">Select a product</option>
                    <option value="coco-peat">Coco Peat</option>
                    <option value="growing-media">Growing Media</option>
                    <option value="agri-peat">Agri Peat</option>
                  </select>
                </div>
                <div className="footer-form-group">
                  <label htmlFor="footer-quantity">Quantity / Monthly Volume</label>
                  <input
                    type="text"
                    id="footer-quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g., 1000 blocks/month"
                    className="footer-form-input"
                  />
                </div>
                <div className="footer-form-group">
                  <label htmlFor="footer-message">Message</label>
                  <textarea
                    id="footer-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="footer-form-input"
                  ></textarea>
                </div>
                {submitStatus === 'success' && (
                  <div className="footer-form-success">
                    ✓ Thank you for your inquiry! We will get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="footer-form-error">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}
                <button 
                  type="submit" 
                  className="footer-form-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
