import React from 'react';

const Metrics = () => {
  return (
    <section className="s8-section">
      <div className="s8-inner">
         <h2 className="s8-header">MEASURABLE RESULTS. OR WE<br/><span className="accent">KEEP WORKING FREE.</span></h2>
         <p className="s8-sub">Most sellers who book the audit come in carrying one of three concerns.<br/>Here is what happens to each of them.</p>
         
         <div className="s8-metrics">
            <div className="s8-metric">
               <div className="s8-metric-icon"><svg viewBox="0 0 24 24" width="24" fill="none" stroke="var(--primary)" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> 90</div>
               <div className="s8-metric-label">Day performance<br/>window</div>
            </div>
            <div className="s8-metric">
               <div className="s8-metric-icon"><svg viewBox="0 0 24 24" width="24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> 3</div>
               <div className="s8-metric-label">New accounts taken<br/>per month</div>
            </div>
            <div className="s8-metric">
               <div className="s8-metric-icon"><svg viewBox="0 0 24 24" width="24" fill="none" stroke="var(--primary)" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> 0</div>
               <div className="s8-metric-label">Cost if we don't<br/>hit the targets</div>
            </div>
         </div>

         <div className="s8-copy-block">
            <span className="s8-eyebrow">THE GUARANTEE</span>
            <p className="s8-p">We fix the system or we keep working until we do. No conditions. No exceptions. If your metrics have not moved in 90 days, we continue at no cost until they do.</p>
         </div>
         
         <div className="s8-copy-block">
            <span className="s8-eyebrow">THE COMMITMENT</span>
            <p className="s8-p">We take three new accounts per month. Not as a tactic — because that is the number we can take on without quality slipping for anyone already inside.</p>
         </div>

         <a href="#audit" className="s1-cta s8-cta">
           Book Your Free Amazon Audit 
           <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
         </a>
      </div>
    </section>
  );
};

export default Metrics;
