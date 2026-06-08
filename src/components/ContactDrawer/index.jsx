import React, { useState, useEffect } from 'react';

const PaperPlane = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={{ marginLeft: '10px', verticalAlign: 'middle' }}
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const CloseIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function ContactDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', message: '' });
      setStatus('idle');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    try {
      const response = await fetch('https://formsubmit.co/ajax/rathikrish539@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Message from Portfolio Contact Drawer',
          _captcha: 'false',
        }),
      });

      const result = await response.json();
      if (result.success === 'true' || response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <>
      {/* Overlay Background */}
      <div 
        className={`mk-contact-drawer-overlay ${isOpen ? 'mk-overlay-visible' : ''}`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className={`mk-contact-drawer-panel ${isOpen ? 'mk-drawer-open' : ''}`}>
        <button className="mk-contact-drawer-close" onClick={onClose}>
          <CloseIcon />
        </button>

        <div className="mk-contact-drawer-card">
          {status === 'success' ? (
            <div className="mk-contact-success-state">
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. If this is your first submission, please check your inbox (rathikrish539@gmail.com) for a confirmation email from FormSubmit to activate the form.</p>
              <button className="mk-button" onClick={onClose}>Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mk-contact-form">
              <div className="mk-form-group">
                <label htmlFor="form-name">YOUR NAME</label>
                <input
                  id="form-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Narendra Modi"
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="mk-form-group">
                <label htmlFor="form-email">YOUR EMAIL</label>
                <input
                  id="form-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="xyz@gmail.com"
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="mk-form-group">
                <label htmlFor="form-message">MESSAGE</label>
                <textarea
                  id="form-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  rows="6"
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              <button 
                type="submit" 
                className="mk-form-submit-btn"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
                {status !== 'submitting' && <PaperPlane />}
              </button>

              {status === 'error' && (
                <p className="mk-form-error-msg">Something went wrong. Please try again or email directly.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </>
  );
}
