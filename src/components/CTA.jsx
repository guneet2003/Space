import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../constants';
import { Center } from '@react-three/drei';

const CTA = ({ isProjectsPage }) => {
  return (
    <section className='cta' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="cta-content" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <p className='cta-text' style={{ color: 'white', marginRight: '10px', marginBottom: '10px' }}>
          Have a project in mind? <br className='sm:block hidden'/> 
          Let's work together. 
        </p>
        <Link to="/contact" className={isProjectsPage ? "btn3" : "btn2"} style={{ marginBottom: '10px' }}>
          Contact
        </Link>
      </div>
     
    </section>
  );
};

export default CTA;
