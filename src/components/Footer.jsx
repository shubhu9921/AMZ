import React from 'react';

const Footer = () => {
  return (
    <footer className="ftr">
      <div className="ftr-inner">
        <div className="ftr-top">
          <div className="ftr-brand">
            <div className="ftr-logo-wrap" style={{ marginBottom: '16px' }}>
              <img src="/logo.png" alt="AMZ Expand" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <div className="ftr-closing">Built by Amazon sellers. Run for Amazon sellers.</div>
          </div>
          <div className="ftr-links">
            <a href="/privacy" className="ftr-link">Privacy Policy</a>
            <a href="/terms" className="ftr-link">Terms of Service</a>
          </div>
        </div>
        <div className="ftr-copyright">
          © 2025 AMZExpand. All rights reserved.
        </div>
        <div className="ftr-compliance">
          Results shown reflect individual client accounts. Outcomes vary based on account history, product category, and market conditions.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
