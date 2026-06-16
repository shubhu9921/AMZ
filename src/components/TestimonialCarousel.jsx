import React from 'react';

const testimonials = [
  {
    name: 'Jasmine L',
    leftText: "Hey! Just wanted to say—our PPC sales have doubled this month. I honestly didn't expect results this fast!",
    rightText: "We love to hear that, Jasmine! Your brand has huge potential—glad we could help unlock it early. Let's keep the momentum going"
  },
  {
    name: 'Marcus T',
    leftText: "I really appreciate how hands-on you guys are. This is the first time I've felt like someone actually understands my business",
    rightText: "Thanks, Marcus—your wins are our wins. We're in your corner every step of the way!"
  },
  {
    name: 'Reena P.',
    leftText: "Wait, are you telling me we're finally profitable on ads?? I could cry LOL. You guys are unreal!",
    rightText: "Happy tears are the best kind! Yes—you're profitable and scaling. Let's level up even more!"
  }
];

const TestimonialCarousel = () => {
  return (
    <section className="s5">
      <div className="s5-inner">
        <h2 className="s5-header">WHAT CHANGES WHEN THE<br/><span className="accent">SYSTEM WORKS</span></h2>
        <p className="s5-sub">These are accounts we audited, fixed, and handed back to sellers who now know exactly what their account is doing every week.</p>
        <div className="s5-carousel">
          <div className="s5-cards">
            {testimonials.map((t, i) => (
              <div key={i} className="s5-card">
                <div className="chat-name left" style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(0,0,0,0.4)', marginBottom: '8px' }}>{t.name}</div>
                <div className="chat-bubble left">{t.leftText}</div>
                <div className="chat-name right">AMZ EXPAND TEAM</div>
                <div className="chat-bubble right">
                  <div style={{ marginBottom: '8px' }}>{t.rightText}</div>
                  {i === 1 && <span>🤝</span>}
                </div>
                <div className="chat-author">
                  <div className="author-pic"></div> {t.name}
                </div>
              </div>
            ))}
          </div>
          <div className="s5-nav">
            <div className="s5-dots">
              <span className="s5-dot active"></span>
              <span className="s5-dot"></span>
              <span className="s5-dot mobile-only"></span>
              <span className="s5-dot mobile-only"></span>
            </div>
            <div className="s5-arrows">
              <button className="s5-arrow" aria-label="Previous Testimonial">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button className="s5-arrow" aria-label="Next Testimonial">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
