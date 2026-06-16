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

        <div className="s2-logo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '40px', alignItems: 'center', justifyItems: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <img src="/01_FORM.png" alt="Form" style={{ width: '100%', maxWidth: '140px', opacity: 0.7 }} />
          <img src="/02_FLUSNOOZ.png" alt="Flusnooz" style={{ width: '100%', maxWidth: '140px', opacity: 0.7 }} />
          <img src="/03_MAESTRO.png" alt="Maestro" style={{ width: '100%', maxWidth: '140px', opacity: 0.7 }} />
          <img src="/04_SOLEGRIPZ.png" alt="Solegripz" style={{ width: '100%', maxWidth: '140px', opacity: 0.7 }} />
          <img src="/05_THIMTEC.png" alt="Thimtec" style={{ width: '100%', maxWidth: '140px', opacity: 0.7 }} />
          <img src="/06_BEAR_BRUSH.png" alt="Bear Brush" style={{ width: '100%', maxWidth: '140px', opacity: 0.7 }} />
          <img src="/07_Luhxe.png" alt="Luhxe" style={{ width: '100%', maxWidth: '140px', opacity: 0.7 }} />
          <img src="/08_Cardiology_Coffee.png" alt="Cardiology Coffee" style={{ width: '100%', maxWidth: '140px', opacity: 0.7 }} />
          <img src="/09_New_Rustic_Co.png" alt="My Rustic Roots" style={{ width: '100%', maxWidth: '140px', opacity: 0.7 }} />
          <img src="/10_Strawberry_Co.png" alt="Strawberry & Co" style={{ width: '100%', maxWidth: '140px', opacity: 0.7 }} />
          <img src="/11_BRUSHEE.png" alt="Brushee" style={{ width: '100%', maxWidth: '140px', opacity: 0.7 }} />
          <img src="/12_eclipseptics.png" alt="Eclipse Optics" style={{ width: '100%', maxWidth: '140px', opacity: 0.7 }} />
        </div>
      </div>
    </section>
  );
};

export default ProofStat;
