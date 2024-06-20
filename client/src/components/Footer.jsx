// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white p-6'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {/* About Section */}
        <div>
          <h4 className='font-bold mb-2'>About Us</h4>
          <p className='text-gray-400'>
            VishwendraDreamHomes is your trusted real estate partner, offering a wide range of properties to meet your needs.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className='font-bold mb-2'>Quick Links</h4>
          <ul className='text-gray-400'>
            <li className='mb-1'><Link to='/'>Home</Link></li>
            <li className='mb-1'><Link to='/about'>About</Link></li>
            <li className='mb-1'><Link to='/terms'>Terms of Use</Link></li> 
          </ul>
        </div>
        {/* Contact Information */}
        <div>
          <h4 className='font-bold mb-2'>Contact Us</h4>
          <p className='text-gray-400'>
            Email: bunny2004@gmail.com<br />
            Phone: +123 456 7890<br />
            Address: 123 Real Estate Ave, Suite 100, Hyderabad, Indis
          </p>
        </div>
        {/* Social Media Links */}
        <div>
          <h4 className='font-bold mb-2'>Follow Us</h4>
          <div className='flex space-x-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFacebook} className='h-6 w-6 text-blue-600' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faTwitter} className='h-6 w-6 text-blue-400' />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} className='h-6 w-6 text-pink-500' />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6 text-blue-700' />
            </a>
          </div>
        </div>
      </div>
      <div className='text-center text-gray-500 mt-6'>
        © {new Date().getFullYear()} VishwendraDreamHomes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
