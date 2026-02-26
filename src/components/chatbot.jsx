import React, { useState, useRef, useEffect } from 'react';

const Chatbot = ({ whatsappNumber = '+2222222222222' }) => {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi, I'm Agent Aether. I can help with services, projects, or contact info. How can I help?" }
  ]);
  const [input, setInput] = useState('');
  const listRef = useRef(null);

  // SESSION KEYWORD RULES: add objects here mapping keywords to responses.
  // Example:
  // { keywords: ['security','secure'], response: 'We provide government-grade security solutions.' }
  const sessions = [
    // Add your session rules here. The first matching keyword will trigger the response below.
    // Add your session rules here. The first matching keyword will trigger the response below.
     { keywords: ['services'], response: 'We offer custom enterprise software, GovTech systems, AI & automation, data platforms, systems integration, and software auditing & modernization.' },
    { keywords: ['projects'], response: 'Our projects include a secure voting platform for a national election commission, an AI-driven analytics dashboard for a major bank, and a custom ERP system for a large retailer.' },
    { keywords: ['contact'], response: 'You can reach us at contact@aethersystems.co.za or call +27 12 345 6789.' },
    { keywords: ['security','secure'], response: 'We provide government-grade security solutions, including penetration testing, vulnerability assessments, and secure software development practices.' },
    { keywords: ['custom software','custom solutions'], response: 'We specialize in building custom software tailored to your specific needs, whether it’s a web application, mobile app, or complex enterprise system.' },
    { keywords: ['ai','automation'], response: 'Our AI and automation services include intelligent process automation, machine learning model development, and AI strategy consulting to help you leverage the power of artificial intelligence.' },
    { keywords: ['data','analytics'], response: 'We build robust data platforms and analytics solutions to help you turn your data into actionable insights, including data warehousing, BI dashboards, and advanced analytics.'    },
    { keywords: ['integration','systems integration'], response: 'Our systems integration services ensure that your various software systems work seamlessly together, improving efficiency and data flow across your organization.' },
    { keywords: ['audit','modernization'], response: 'We offer software auditing and modernization services to help you assess the health of your existing systems and modernize them for improved performance, security, and scalability.'     }
  ];

  useEffect(() => {
    // scroll to bottom when messages change
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  const waLink = (num) => {
    const cleaned = num.replace(/[^+0-9]/g, '');
    return `https://wa.me/${cleaned.replace(/^\+/, '')}`;
  };

  const handleUserMessage = (text) => {
    if (!text) return;
    const trimmed = text.trim();
    setMessages((m) => [...m, { from: 'user', text: trimmed }]);

    // Keyword matching: find first session where any keyword appears in the message (case-insensitive)
    const lower = trimmed.toLowerCase();
    let matched = null;
    for (const s of sessions) {
      for (const kw of s.keywords) {
        if (lower.includes(kw.toLowerCase())) {
          matched = s;
          break;
        }
      }
      if (matched) break;
    }

    if (matched) {
      setMessages((m) => [...m, { from: 'bot', text: matched.response }]);
    } else {
      // default fallback response - placeholder for more advanced logic
      setMessages((m) => [...m, { from: 'bot', text: "I'm not sure I understand. Could you rephrase your question or ask about our services?If you still don't find what you looking for please fill the contact form or send us a WhatsApp message right away" }]);
    }
  };

  const onSubmit = (e) => {
    e && e.preventDefault();
    handleUserMessage(input);
    setInput('');
  };

  return (
    <>
      {/* Floating container for buttons */}
      <div className="chatbot-fab">
        {/* WhatsApp Button */}
        <a href={waLink(whatsappNumber)} target="_blank" rel="noreferrer" aria-label="Contact us on WhatsApp" style={{ textDecoration: 'none' }}>
          <div className="chatbot-wa">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M20.52 3.48A11.95 11.95 0 0012 .5C6.21.5 1.5 5.21 1.5 11c0 1.94.51 3.76 1.4 5.35L.5 23.5l7.4-2.05A11.95 11.95 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5 0-3.03-1.18-5.83-3.48-7.22z" fill="#fff" opacity="0.08" />
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.15-.198.297-.768.967-.942 1.166-.173.2-.347.224-.644.075-.297-.149-1.255-.462-2.39-1.475-.884-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.174.2-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.21-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 2.982 1.288 3.24 1.117 3.824 1.05.586-.066 1.905-.777 2.173-1.53.27-.754.27-1.4.189-1.53-.08-.13-.297-.198-.594-.347z" fill="#fff" />
            </svg>
          </div>
        </a>

        {/* Chat toggle button */}
        <div onClick={() => setOpen((s) => !s)} role="button" aria-label="Toggle chat" className="chatbot-toggle">
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>

        {/* Chat window */}
        {open && (
          <div className="chatbot-panel">
            <div className="chatbot-header">
              <div className="chatbot-header-row">
                <div>
                  <strong>Agent Aether</strong>
                  <div className="chatbot-subtitle">Ask me about our services or projects</div>
                </div>
                <div onClick={() => setOpen(false)} className="chatbot-close" role="button" aria-label="Close chat">
                  ✕
                </div>
              </div>
            </div>

            <div className="chatbot-body">
              <div ref={listRef} className="chatbot-messages">
                {messages.map((m, i) => (
                  <div key={i} className={`chatbot-row ${m.from === 'user' ? 'chatbot-row-user' : 'chatbot-row-bot'}`}>
                    <div className={`chatbot-bubble ${m.from === 'user' ? 'chatbot-bubble-user' : 'chatbot-bubble-bot'}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={onSubmit} className="chatbot-input">
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;
export { Chatbot };
