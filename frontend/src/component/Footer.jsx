import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
  return (
    <footer className='gucci-footer'>
      <div className='max-w-6xl mx-auto px-6 py-20'>

        {/* GUCCI Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-16 mb-16'>

          {/* GUCCI Brand Section */}
          <div className='md:col-span-2'>
            <div className='mb-8'>
              <h3 className='gucci-brand-title'>
                FROZELIA
              </h3>
            </div>
            <p className='gucci-brand-description'>
              Italian heritage meets contemporary elegance in every carefully crafted piece.
              Discover timeless luxury since 2024.
            </p>
            <div className='gucci-social-links'>
              <a href="#" className='gucci-social-link'>INSTAGRAM</a>
              <a href="#" className='gucci-social-link'>FACEBOOK</a>
              <a href="#" className='gucci-social-link'>TWITTER</a>
            </div>
          </div>

          {/* GUCCI Company Links */}
          <div>
            <h4 className='gucci-footer-title'>
              COMPANY
            </h4>
            <div className='gucci-footer-divider'></div>
            <ul className='gucci-footer-links'>
              <li>
                <a href="/" className='gucci-footer-link'>HOME</a>
              </li>
              <li>
                <a href="/about" className='gucci-footer-link'>ABOUT</a>
              </li>
              <li>
                <a href="/collection" className='gucci-footer-link'>COLLECTIONS</a>
              </li>
              <li>
                <a href="/contact" className='gucci-footer-link'>CONTACT</a>
              </li>
              <li>
                <a href="/stores" className='gucci-footer-link'>STORES</a>
              </li>
            </ul>
          </div>

          {/* GUCCI Customer Care */}
          <div>
            <h4 className='gucci-footer-title'>
              CUSTOMER CARE
            </h4>
            <div className='gucci-footer-divider'></div>
            <ul className='gucci-footer-links'>
              <li>
                <a href="/contact" className='gucci-footer-link'>CONTACT US</a>
              </li>
              <li>
                <a href="/shipping" className='gucci-footer-link'>SHIPPING</a>
              </li>
              <li>
                <a href="/returns" className='gucci-footer-link'>RETURNS</a>
              </li>
              <li>
                <a href="/size-guide" className='gucci-footer-link'>SIZE GUIDE</a>
              </li>
              <li>
                <a href="/care" className='gucci-footer-link'>CARE GUIDE</a>
              </li>
            </ul>
          </div>
        </div>

        {/* GUCCI Newsletter Section */}
        <div className='gucci-newsletter-section'>
          <div className='text-center mb-8'>
            <h4 className='gucci-newsletter-title'>
              NEWSLETTER
            </h4>
            <div className='gucci-newsletter-divider'></div>
            <p className='gucci-newsletter-text'>
              Be the first to discover new collections
            </p>
          </div>
        </div>

        {/* GUCCI Footer Bottom */}
        <div className='gucci-footer-bottom'>
          <div className='gucci-footer-bottom-content'>
            <div className='gucci-copyright'>
              <p className='gucci-copyright-text'>
                © 2025 ZOYA ELEGANCE
              </p>
            </div>
            <div className='gucci-legal-links'>
              <a href="/privacy" className='gucci-legal-link'>PRIVACY POLICY</a>
              <span className='gucci-separator'>|</span>
              <a href="/terms" className='gucci-legal-link'>TERMS OF SERVICE</a>
              <span className='gucci-separator'>|</span>
              <a href="/cookies" className='gucci-legal-link'>COOKIES</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* GUCCI Footer Typography */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap');
        
        .gucci-footer {
          background-color: #ffffff;
          border-top: 1px solid #e0e0e0;
          font-family: 'Playfair Display', serif;
        }

        /* GUCCI Brand Section */
        .gucci-brand-title {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          letter-spacing: 0.3em;
          color: #000000;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .gucci-brand-description {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 300;
          font-size: 0.875rem;
          line-height: 1.6;
          color: #666666;
          max-width: 300px;
          margin-bottom: 2rem;
        }

        .gucci-social-links {
          display: flex;
          gap: 24px;
          margin-top: 2rem;
        }

        .gucci-social-link {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 400;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: #000000;
          text-transform: uppercase;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
          cursor: pointer;
        }

        .gucci-social-link:hover {
          border-bottom-color: #000000;
        }

        /* GUCCI Footer Sections */
        .gucci-footer-title {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          letter-spacing: 0.25em;
          color: #000000;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .gucci-footer-divider {
          width: 40px;
          height: 1px;
          background-color: #000000;
          margin-bottom: 1.5rem;
        }

        .gucci-footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .gucci-footer-links li {
          margin-bottom: 12px;
        }

        .gucci-footer-link {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 300;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: #666666;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .gucci-footer-link:hover {
          color: #000000;
        }

        /* GUCCI Newsletter Section */
        .gucci-newsletter-section {
          border-top: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          padding: 3rem 0;
          margin-bottom: 3rem;
        }

        .gucci-newsletter-title {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: 1.5rem;
          letter-spacing: 0.15em;
          color: #000000;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .gucci-newsletter-divider {
          width: 60px;
          height: 1px;
          background-color: #000000;
          margin: 0 auto 1.5rem auto;
        }

        .gucci-newsletter-text {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 300;
          font-size: 0.875rem;
          letter-spacing: 0.2em;
          color: #666666;
          text-transform: uppercase;
        }

        /* GUCCI Footer Bottom */
        .gucci-footer-bottom {
          border-top: 1px solid #e0e0e0;
          padding-top: 2rem;
        }

        .gucci-footer-bottom-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .gucci-footer-bottom-content {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .gucci-copyright {
          display: flex;
          align-items: center;
        }

        .gucci-copyright-text {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 300;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: #666666;
          text-transform: uppercase;
        }

        .gucci-legal-links {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .gucci-legal-link {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 300;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: #666666;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .gucci-legal-link:hover {
          color: #000000;
        }

        .gucci-separator {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 300;
          font-size: 0.75rem;
          color: #e0e0e0;
        }

        /* GUCCI Responsive Design */
        @media (max-width: 768px) {
          .gucci-footer {
            padding: 0;
          }
          
          .gucci-brand-title {
            font-size: 1.25rem;
          }
          
          .gucci-newsletter-title {
            font-size: 1.25rem;
          }
          
          .gucci-social-links {
            flex-direction: column;
            gap: 12px;
          }
          
          .gucci-legal-links {
            flex-direction: column;
            gap: 8px;
          }
          
          .gucci-separator {
            display: none;
          }
        }

        /* Remove default styling */
        * {
          box-sizing: border-box;
        }
      `}</style>
    </footer>
  )
}

export default Footer
