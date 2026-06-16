import React from 'react';

const Guarantee = () => {
  return (
    <section className="s6-section">
      <div className="s6-inner">
        <div className="s6-numeral-col">
          <div className="s6-big-num">90</div>
          <div className="s6-num-label">Day Guarantee</div>
          <a href="#audit" className="s1-cta s6-cta desktop-cta">Book Free Audit</a>
        </div>
        <div className="s6-content">
          <h2 className="s6-header">WE DO NOT WIN<br/>UNLESS YOU DO</h2>
          <div className="s6-body">
            <p className="s6-p">Every engagement runs under a 90-day performance guarantee. We agree on the metrics before we touch anything. If we do not move them within 90 days, we keep working until we do. For free. <span className="no">No fine print. No renegotiation.</span></p>
            <p className="s6-p-close">We offer this because we already know what we are going to find in your account. The guarantee is not a sales tactic. It is the logical consequence of knowing the system well enough to fix it.</p>
          </div>
        </div>
        <div className="s6-mobile-cta-wrap">
          <a href="#audit" className="s1-cta s6-cta mobile-cta">Book Free Audit</a>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
