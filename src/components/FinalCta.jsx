import React, { useState } from 'react';

const FinalCta = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="s9-section">
      <div className="s9-inner">
        <h2 className="s9-header">SEE WHAT IS ACTUALLY<br/><span className="accent">COSTING YOU</span></h2>
        <div className="s9-body">
          <p className="s9-p">The audit covers wasted ad spend, listings that are not converting, ranking gaps, and catalog issues. For each one you get a dollar-value estimate of what it is costing you every month. Most accounts have at least two or three running at the same time.</p>
          <p className="s9-p">48 hours. No cost. No commitment. A complete picture of your account before you decide anything.</p>
        </div>
        
        <div className="s9-cta-zone">
          <a href="#" className="s9-btn">Book Your Free Audit 
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{marginLeft: '8px'}}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <div className="s9-reassurance">Two minutes to book. No card. No obligation.</div>
        </div>

        <div className="s9-expand-wrap">
          <button 
            className={`s9-expand-trigger ${isExpanded ? 'is-open' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Want to see exactly what the audit covers before you book?
            <svg className="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div className={`s9-panel ${isExpanded ? 'is-open' : ''}`}>
            <div className="s9-panel-inner">
              <div className="s9-items">
                <div className="s9-item">
                  <div className="s9-item-text"><span className="item-lbl">Your ad spend</span> — where it is going, what it is returning, and where it is being wasted.</div>
                </div>
                <div className="s9-item">
                  <div className="s9-item-text"><span className="item-lbl">Your listings</span> — whether they are converting the traffic your ads are buying and what is causing them to lose sales.</div>
                </div>
                <div className="s9-item">
                  <div className="s9-item-text"><span className="item-lbl">Your ranking</span> — where your products sit organically and what is stopping them from moving.</div>
                </div>
                <div className="s9-item">
                  <div className="s9-item-text"><span className="item-lbl">Your catalog</span> — whether the account structure is supporting your growth or working against it.</div>
                </div>
              </div>
              <div className="s9-panel-footer">
                Each area comes with a plain-English summary and a dollar-value estimate. 48 hours. No cost. No obligation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
