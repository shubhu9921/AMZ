import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`hdr ${scrolled ? 'scrolled' : ''}`} id="site-header">
      <div className="hdr-inner">
          <a href="#" className="hdr-brand">
            <img src="/logo.png" alt="AMZ Expand" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
          </a>
        <nav className="hdr-nav">
          <a href="#" className="hdr-link">How It Works</a>
          <a href="#" className="hdr-cta">Book Your Free Audit</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
