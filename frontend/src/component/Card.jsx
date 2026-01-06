import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({ name, image, id, price }) {
  const { currency } = useContext(shopDataContext)
  const navigate = useNavigate()

  return (
    <div 
      className='gucci-card'
      onClick={() => navigate(`/productdetail/${id}`)}
    >
      
      {/* GUCCI Product Image */}
      <div className='gucci-image-container'>
        <img 
          src={image} 
          alt={name}
          className='gucci-product-image'
          loading="lazy"
        />
        
        {/* GUCCI Hover Overlay */}
        <div className='gucci-overlay'></div>
        
        {/* GUCCI Quick View */}
        <div className='gucci-quick-view'>
          <span className='gucci-quick-view-text'>VIEW</span>
        </div>
      </div>

      {/* GUCCI Product Info */}
      <div className='gucci-product-info'>
        
        {/* GUCCI Product Name */}
        <h3 className='gucci-product-name'>
          {name}
        </h3>
        
        {/* GUCCI Divider */}
        <div className='gucci-product-divider'></div>
        
        {/* GUCCI Price */}
        <div className='gucci-price-container'>
          <span className='gucci-price'>
            {currency}{price}
          </span>
        </div>
      </div>

      <style jsx>{`
        /* GUCCI Card Typography */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap');
        
        /* GUCCI Card Container */
        .gucci-card {
          width: 100%;
          max-width: 320px;
          margin: 0 auto;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Playfair Display', serif;
        }

        .gucci-card:hover {
          border-color: #000000;
        }

        /* GUCCI Image Container */
        .gucci-image-container {
          position: relative;
          overflow: hidden;
          background-color: #f8f8f8;
          aspect-ratio: 3/4;
        }

        .gucci-product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gucci-card:hover .gucci-product-image {
          transform: scale(1.02);
        }

        /* GUCCI Hover Overlay */
        .gucci-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.05);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gucci-card:hover .gucci-overlay {
          opacity: 1;
        }

        /* GUCCI Quick View Button */
        .gucci-quick-view {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .gucci-card:hover .gucci-quick-view {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .gucci-quick-view-text {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 500;
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          color: #ffffff;
          text-transform: uppercase;
          background-color: #000000;
          padding: 8px 24px;
          border: none;
          cursor: pointer;
        }

        /* GUCCI Product Info */
        .gucci-product-info {
          padding: 24px 20px;
          text-align: center;
        }

        .gucci-product-name {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: 1rem;
          letter-spacing: 0.1em;
          color: #000000;
          text-transform: uppercase;
          margin-bottom: 16px;
          line-height: 1.3;
          min-height: 2.6em;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: color 0.3s ease;
        }

        .gucci-card:hover .gucci-product-name {
          color: #666666;
        }

        /* GUCCI Divider */
        .gucci-product-divider {
          width: 30px;
          height: 1px;
          background-color: #e0e0e0;
          margin: 0 auto 16px auto;
          transition: background-color 0.3s ease;
        }

        .gucci-card:hover .gucci-product-divider {
          background-color: #000000;
        }

        /* GUCCI Price Container */
        .gucci-price-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .gucci-price {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 300;
          font-size: 1.125rem;
          letter-spacing: 0.05em;
          color: #000000;
          text-transform: uppercase;
        }

        /* GUCCI Responsive Design */
        @media (max-width: 768px) {
          .gucci-card {
            max-width: 280px;
          }
          
          .gucci-product-info {
            padding: 20px 16px;
          }
          
          .gucci-product-name {
            font-size: 0.875rem;
          }
          
          .gucci-price {
            font-size: 1rem;
          }
          
          .gucci-quick-view-text {
            font-size: 0.6875rem;
            padding: 6px 20px;
          }
        }

        /* GUCCI Focus States */
        .gucci-card:focus {
          outline: 2px solid #000000;
          outline-offset: 2px;
        }

        /* Remove any unwanted effects */
        .gucci-card * {
          box-sizing: border-box;
        }

        /* Ensure proper image loading */
        .gucci-product-image[loading="lazy"] {
          background-color: #f8f8f8;
        }
      `}</style>
    </div>
  )
}

export default Card
