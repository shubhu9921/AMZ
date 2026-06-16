import React from 'react';

const ProofStat = () => {
  return (
    <section className="s2">
      <div className="s2-inner">
        <div className="s2-logos-top">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" style={{ height: '36px', width: 'auto' }} />
          </div>
          <p className="s2-lead">Across <span className="ph">200+</span> accounts audited, sellers recovered an average of</p>
        </div>
        <h2 className="s2-number">$50,000+</h2>
        <p className="s2-trail">in the <span className="ph">first 90 days.</span></p>
        <div className="s2-tag-wrap"><div className="s2-tag">That is what the audit finds. Before you spend a dollar.</div></div>

        <div className="s2-logo-grid">
          <img src="/01_FORM.png" alt="Form" />
          <img src="/02_FLUSNOOZ.png" alt="Flusnooz" />
          <img src="/03_MAESTRO.png" alt="Maestro" />
          <img src="/04_SOLEGRIPZ.png" alt="Solegripz" />
          <img src="/05_THIMTEC.png" alt="Thimtec" />
          <img src="/06_BEAR_BRUSH.png" alt="Bear Brush" />
          <img src="/07_Luhxe.png" alt="Luhxe" />
          <img src="/08_Cardiology_Coffee.png" alt="Cardiology Coffee" />
          <img src="/09_New_Rustic_Co.png" alt="My Rustic Roots" />
          <img src="/10_Strawberry_Co.png" alt="Strawberry & Co" />
          <img src="/11_BRUSHEE.png" alt="Brushee" />
          <img src="/12_eclipseptics.png" alt="Eclipse Optics" />
        </div>
        <div className="s2-logo-dots">
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default ProofStat;
