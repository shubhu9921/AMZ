import React from 'react';

const HeroSection = () => {
  return (
    <section className="s1">
      <div className="s1-inner">
        <h1 className="s1-headline">
          Most Accounts We Audit Are Losing
          <span className="money">$8,000 to $50,000</span> Every Month To Three Fixable Problems.
        </h1>

        <p className="s1-sub">
          Not the product. The advertising, listings, and catalog have stopped working together. Watch the video to see what those problems are, then let us show you which ones are in yours.
        </p>

        <div className="s1-vsl">
          <div className="s1-vsl-arrow">
            <div className="s1-vsl-arrow-text">See It In Action</div>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M18 4 C 18 10, 14 16, 6 18 M 10 18 L 6 18 L 6 14" stroke="#CBE82C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="vsl-card">
            <div className="s1-thumb">
              <div className="s1-thumb-grid"></div>
              {/* Background Line Graph */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }} viewBox="0 0 800 450" preserveAspectRatio="none">
                <path d="M -20 300 L 150 400 L 300 200 L 450 350 L 600 150 L 750 250 L 900 -50" stroke="#FFFFFF" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 850 0 L 900 -50 L 950 0" stroke="#FFFFFF" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="s1-thumb-content" style={{ zIndex: 5 }}>
                <div className="s1-thumb-text">IN <span style={{ padding: '0 8px' }}>90</span> DAYS</div>
              </div>
              <div className="play-anchor" style={{ zIndex: 10 }}>
                <div className="play-pulse" style={{ width: '64px', height: '64px' }} aria-hidden="true"></div>
                <div className="play-pulse" style={{ width: '64px', height: '64px', animationDelay: '-1.1s' }} aria-hidden="true"></div>
                <div className="s1-play-btn" role="button" tabIndex="0" aria-label="Play video: Watch the audit breakdown">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="s1-kpi" style={{ zIndex: 20 }}>
            <div className="s1-kpi-row">
              <div className="s1-kpi-chip">
                <svg viewBox="0 0 12 12" style={{ width: '12px', height: '12px' }}>
                  <path d="M6 10V2M2 6l4-4 4 4" stroke="#CBE82C" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Recovered</span>
              </div>
            </div>
            <div className="s1-kpi-value">$24k</div>
            <div className="s1-kpi-label label-caps">AVG. MONTHLY BLEED<br />RECOVERED</div>
          </div>
        </div>

        <div className="s1-slots">
          <span className="s1-slots-dot"></span> 2 Audit Slots Left For This Week
        </div>

        <a href="#" className="s1-cta">
          Book Your Free Amazon Audit
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </a>

        <div className="s1-trust">
          <div className="s1-trust-pill"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg> Free Audit</div>
          <div className="s1-trust-pill"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg> No Commitment</div>
          <div className="s1-trust-pill"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg> 48 Hour Turnaround</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
