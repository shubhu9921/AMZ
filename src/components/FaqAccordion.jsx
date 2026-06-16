import React from 'react';

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = React.useState(0);

  const faqs = [
    {
      question: "1. I have tried agencies before and it did not work.",
      answer: "We hear this on almost every first call. Most agencies are built around the appearance of work; busy dashboards, weekly reports, vague answers. The audit is how we prove we are different before you spend a dollar. You see exactly what is broken, what fixing it is worth, and how we approach it."
    },
    {
      question: "2. I do not want to be locked into a contract.",
      answer: "The audit has no commitment attached. If you move forward, the terms are straightforward; no lock-ins structured to make leaving painful. We keep clients because the account moves, not because the contract makes leaving difficult."
    },
    {
      question: "3. I do not have the time to onboard a new agency.",
      answer: "The audit takes 48 hours on our side. Your involvement is one conversation. After that we work inside the account - you do not manage us. Every Monday you get one page showing what changed and why. That is the only time it asks from you."
    }
  ];

  return (
    <section className="s7-section">
      <div className="s7-inner">
        <div className="s7-header">
          <h2 className="s7-title">BEFORE YOU <span className="accent">BOOK</span></h2>
          <p className="s7-sub">Most sellers who book the audit come in carrying one of three concerns.<br/> Here is what happens to each of them.</p>
        </div>

        <div className="s7-faq">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="s7-item" key={index}>
                <button 
                  className={`s7-trigger ${isOpen ? 'is-open' : ''}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <div className="s7-num-badge">{index + 1}</div>
                  <div className="s7-question">{faq.question}</div>
                  <div className="s7-chevron">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </div>
                </button>
                <div className={`s7-panel ${isOpen ? 'is-open' : ''}`}>
                  <div className="s7-panel-inner">
                    <p className="s7-response">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="s7-footer">
           <a href="#" className="s1-cta">
              Book Your Free Amazon Audit 
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
           </a>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
