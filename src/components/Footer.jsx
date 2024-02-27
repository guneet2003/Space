import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer font-poppins">
      <div className="footer-container text-white mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <p style={{ marginBottom: '10px' }}>
          © 2023 <strong>Guneet Singh</strong>. All rights reserved.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* Render social links in a horizontal line */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexDirection: 'row' }}>
            {socialLinks.map((link) => (
              <Link key={link.name} to={link.link} target='_blank'>
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain'
                  style={{ minWidth: '24px', minHeight: '24px' }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
