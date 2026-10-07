import React from 'react'
import './footer.css'
import footerLogo from '../Assets/Uvis-logo.png';

export default function Footer() {
  return (
    <footer>
      <a className="footer-logo" href="#nav">
        <img src={footerLogo} alt="Logo" />
      </a>
      <p>&copy; 2026 All rights reserved.</p>
    </footer>
  );
}
