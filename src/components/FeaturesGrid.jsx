import React from 'react';

const FeaturesGrid = () => {
  return (
    <section className="s3">
      <div className="s3-inner">
        <h2 className="s3-header">IF YOU SKIPPED THE VIDEO, HERE<br/> IS <span className="accent">WHAT IT SAYS.</span></h2>
        <div className="s3-grid">
          {/* Card 1 */}
          <div className="s3-feature-card">
             <div className="s3-card-img">
                <svg width="100%" height="200" viewBox="0 0 200 200">
                   <circle cx="100" cy="80" r="40" fill="var(--primary)" opacity="0.3"/>
                   <circle cx="60" cy="130" r="40" fill="var(--primary)" opacity="0.6"/>
                   <circle cx="140" cy="130" r="40" fill="var(--primary)" opacity="0.9"/>
                   <text x="100" y="80" textAnchor="middle" fontFamily="Bebas Neue" fill="var(--primary)">PPC</text>
                   <text x="60" y="130" textAnchor="middle" fontFamily="Bebas Neue" fill="var(--primary)">LISTING</text>
                   <text x="140" y="130" textAnchor="middle" fontFamily="Bebas Neue" fill="var(--primary)">CATALOG</text>
                   <text x="100" y="160" textAnchor="middle" fontFamily="Bebas Neue" fill="var(--primary)">UNIFIED DATA</text>
                </svg>
             </div>
             <div className="s3-card-content">
               <h3 className="s3-card-title">Not the product. The system.</h3>
               <p className="s3-card-p">Most sellers spending too much on ads are not losing because of a bad product. They are losing because their advertising, listings, and catalog have stopped working as one system.</p>
             </div>
          </div>
          {/* Card 2 */}
          <div className="s3-feature-card">
             <div className="s3-card-img">
                <svg width="100%" height="200" viewBox="0 0 200 200">
                   <path d="M100 100 L100 20 A80 80 0 0 1 180 100 Z" fill="var(--primary)" opacity="0.5"/>
                   <path d="M100 100 L180 100 A80 80 0 0 1 20 100 Z" fill="var(--primary)" opacity="0.8"/>
                   <path d="M100 100 L20 100 A80 80 0 0 1 100 20 Z" fill="var(--primary)" opacity="1"/>
                   <circle cx="100" cy="100" r="30" fill="#fff" stroke="var(--primary)" strokeWidth="4"/>
                   <text x="100" y="105" textAnchor="middle" fontSize="12" fontFamily="Bebas Neue" fill="var(--primary)">ONE<br/>SYSTEM</text>
                </svg>
             </div>
             <div className="s3-card-content">
               <h3 className="s3-card-title">Structural problem. Structural fix.</h3>
               <p className="s3-card-p">It is a structural problem across the whole account and it has a structural fix. Not adjusting one thing in isolation. Rebuilding the connection between all three so they work together.</p>
             </div>
          </div>
          {/* Card 3 */}
          <div className="s3-feature-card">
             <div className="s3-card-img">
                <svg width="100%" height="200" viewBox="0 0 200 200">
                   <polygon points="100,20 40,180 160,180" fill="var(--primary)" opacity="0.7"/>
                   <line x1="100" y1="20" x2="40" y2="180" stroke="#fff" strokeWidth="4"/>
                   <line x1="100" y1="20" x2="80" y2="180" stroke="#fff" strokeWidth="4"/>
                   <line x1="100" y1="20" x2="120" y2="180" stroke="#fff" strokeWidth="4"/>
                   <line x1="100" y1="20" x2="160" y2="180" stroke="#fff" strokeWidth="4"/>
                </svg>
             </div>
             <div className="s3-card-content">
               <h3 className="s3-card-title">See the cost before you commit.</h3>
               <p className="s3-card-p">Before you commit to anything, we show you exactly what is broken. The audit takes 48 hours, costs nothing, and gives you a dollar-value estimate of what each problem is costing you every month.</p>
             </div>
          </div>
        </div>
        <div className="s3-footer">
           <a href="#audit" className="s1-cta">
              Book Your Free Amazon Audit 
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
           </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
