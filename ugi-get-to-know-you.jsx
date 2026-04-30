import { useState } from "react";

const sections = [
  {
    id: "basics",
    label: "The Basics",
    emoji: "👋",
    questions: [
      { id: "name", label: "What's your name? (First name or nickname — whatever you go by)", type: "text", placeholder: "Your name..." },
      { id: "age", label: "How old are you?", type: "select", options: ["13", "14", "15", "16", "17", "18"] },
      { id: "grade", label: "What grade are you in?", type: "select", options: ["7th", "8th", "9th", "10th", "11th", "12th", "Other"] },
      { id: "school", label: "What school do you go to?", type: "text", placeholder: "School name..." },
      { id: "church", label: "Do you have a church home?", type: "radio", options: ["Yes", "Not currently", "I've never really been to church"] },
    ]
  },
  {
    id: "fun",
    label: "Just for Fun",
    emoji: "🎉",
    questions: [
      { id: "vibe", label: "What's your current vibe? (music, shows, hobbies — whatever you're into right now)", type: "textarea", placeholder: "Currently obsessed with..." },
      { id: "food", label: "If you had to eat one meal for the rest of your life, what would it be?", type: "text", placeholder: "Don't overthink it..." },
      { id: "fact", label: "Give us one random fact about you that most people don't know.", type: "textarea", placeholder: "Something surprising..." },
      { id: "lovelang", label: "What's your love language?", type: "radio", options: ["Words of Affirmation", "Quality Time", "Acts of Service", "Gifts", "Physical Touch", "I have no idea"] },
      { id: "wouldyou", label: "Would you rather... beach or mountains?", type: "radio", options: ["Beach 🏖️", "Mountains 🏔️", "Neither, I'm a homebody 🛋️"] },
    ]
  },
  {
    id: "real",
    label: "Real Talk",
    emoji: "💬",
    questions: [
      { id: "goodat", label: "What's something you're actually really good at? (Own it.)", type: "textarea", placeholder: "Be honest — own it..." },
      { id: "struggle", label: "What's something you're genuinely struggling with right now? (This stays in this room.)", type: "textarea", placeholder: "You can be honest here..." },
      { id: "need", label: "What do you need most from a community like this?", type: "textarea", placeholder: "A place to belong, accountability, someone to talk to..." },
      { id: "oneword", label: "One word that describes where you're at in life right now.", type: "text", placeholder: "Just one word..." },
      { id: "lookuptoo", label: "Is there someone in your life you look up to? What makes them stand out to you?", type: "textarea", placeholder: "Could be anyone..." },
      { id: "hoping", label: "What are you hoping to get out of being here?", type: "textarea", placeholder: "No wrong answer..." },
      { id: "knowus", label: "Is there anything you want us to know about you that you don't think we'd ask?", type: "textarea", placeholder: "Anything at all..." },
    ]
  },
  {
    id: "faith",
    label: "Faith & You",
    emoji: "✝️",
    questions: [
      { id: "knowjesus", label: "Do you know Jesus? Where are you at with Him?", type: "radio", options: ["Yes — I have a personal relationship with Him", "I'm still figuring it out", "I've heard about Him but don't really know Him", "Not really — I'm just exploring", "It's complicated"] },
      { id: "howlong", label: "How long have you been following Jesus — or exploring faith?", type: "text", placeholder: "e.g. my whole life, a few months, just starting out..." },
      { id: "godrn", label: "What does your relationship with God look or feel like right now?", type: "textarea", placeholder: "Close, distant, confusing, growing, nonexistent — be real..." },
      { id: "scripture", label: "Do you have a favorite scripture or verse? If so, what is it?", type: "textarea", placeholder: "It's okay if you don't have one yet..." },
      { id: "question", label: "What's a question about God or faith you've been afraid to ask?", type: "textarea", placeholder: "Nothing is off the table here..." },
      { id: "prayfor", label: "Is there something you've been praying about — or something you wish you could pray about?", type: "textarea", placeholder: "You can be real..." },
      { id: "holdsback", label: "Is there anything holding you back in your faith right now?", type: "textarea", placeholder: "Doubt, past hurt, not knowing where to start..." },
    ]
  }
];

export default function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const currentSection = sections[step];

  const handleChange = (qid, value) => setAnswers(prev => ({ ...prev, [qid]: value }));
  const goNext = () => step < sections.length - 1 ? setStep(s => s + 1) : setSubmitted(true);
  const goBack = () => setStep(s => s - 1);

  const S = {
    root: {
      minHeight: "100vh",
      background: "linear-gradient(155deg, #080b0f 0%, #0d1a12 40%, #130c05 100%)",
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", padding: "24px 16px",
      fontFamily: "Georgia, serif", position: "relative", overflow: "hidden",
    },
    orb: (top, right, bottom, left, color) => ({
      position: "fixed", top, right, bottom, left,
      width: "400px", height: "400px", borderRadius: "50%",
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      pointerEvents: "none",
    }),
    wrap: { width: "100%", maxWidth: "620px", position: "relative", zIndex: 1 },
    hdr: { textAlign: "center", marginBottom: "24px" },
    logo: { fontSize: "11px", letterSpacing: "5px", color: "#F59E0B", fontFamily: "Arial, sans-serif", textTransform: "uppercase", fontWeight: "bold", marginBottom: "4px" },
    sub: { fontSize: "10px", color: "rgba(255,255,255,0.28)", fontFamily: "Arial, sans-serif", letterSpacing: "2px", textTransform: "uppercase" },
    dots: { display: "flex", gap: "5px", justifyContent: "center", marginBottom: "20px" },
    dot: (active, done) => ({
      height: "3px", flex: 1, maxWidth: "70px", borderRadius: "2px",
      background: done ? "#F59E0B" : active ? "rgba(245,158,11,0.45)" : "rgba(255,255,255,0.07)",
      transition: "background 0.4s",
    }),
    card: {
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(245,158,11,0.11)",
      borderRadius: "20px", padding: "36px 40px",
      backdropFilter: "blur(24px)",
      boxShadow: "0 40px 80px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.04)",
    },
    secHdr: { display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "28px" },
    emoji: { fontSize: "32px", lineHeight: 1, marginTop: "3px" },
    secStep: { fontSize: "10px", color: "rgba(245,158,11,0.55)", fontFamily: "Arial, sans-serif", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" },
    secTitle: { fontSize: "22px", fontWeight: "bold", color: "#FEF3C7", margin: 0, fontFamily: "Georgia, serif" },
    q: { marginBottom: "24px" },
    lbl: { display: "block", fontSize: "14px", color: "rgba(254,243,199,0.78)", marginBottom: "9px", lineHeight: "1.6", fontFamily: "Arial, sans-serif" },
    inp: { width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(245,158,11,0.17)", borderRadius: "10px", padding: "11px 15px", fontSize: "14px", color: "#FEF3C7", outline: "none", fontFamily: "Arial, sans-serif", boxSizing: "border-box" },
    ta: { width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(245,158,11,0.17)", borderRadius: "10px", padding: "11px 15px", fontSize: "14px", color: "#FEF3C7", outline: "none", fontFamily: "Arial, sans-serif", resize: "vertical", minHeight: "85px", boxSizing: "border-box" },
    sel: { width: "100%", background: "#0a0e07", border: "1px solid rgba(245,158,11,0.17)", borderRadius: "10px", padding: "11px 15px", fontSize: "14px", color: "#FEF3C7", outline: "none", fontFamily: "Arial, sans-serif", boxSizing: "border-box", cursor: "pointer" },
    rg: { display: "flex", flexDirection: "column", gap: "7px" },
    ro: (sel) => ({ display: "flex", alignItems: "center", gap: "11px", padding: "11px 15px", borderRadius: "10px", border: `1px solid ${sel ? "rgba(245,158,11,0.48)" : "rgba(245,158,11,0.1)"}`, background: sel ? "rgba(245,158,11,0.07)" : "rgba(255,255,255,0.02)", cursor: "pointer", transition: "all 0.15s" }),
    rc: (sel) => ({ width: "16px", height: "16px", borderRadius: "50%", border: `2px solid ${sel ? "#F59E0B" : "rgba(245,158,11,0.28)"}`, background: sel ? "#F59E0B" : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" }),
    rl: { fontSize: "13px", color: "rgba(254,243,199,0.78)", fontFamily: "Arial, sans-serif", lineHeight: "1.5" },
    btnRow: { display: "flex", gap: "10px", justifyContent: "flex-end", marginTop: "28px" },
    back: { padding: "10px 20px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "rgba(255,255,255,0.38)", fontSize: "13px", fontFamily: "Arial, sans-serif", cursor: "pointer" },
    next: { padding: "10px 28px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg,#F59E0B,#D97706)", color: "#0f0c07", fontSize: "13px", fontFamily: "Arial, sans-serif", fontWeight: "bold", cursor: "pointer", boxShadow: "0 4px 18px rgba(245,158,11,0.22)" },
  };

  if (submitted) return (
    <div style={S.root}>
      <div style={S.orb("-100px", "-80px", "auto", "auto", "rgba(245,158,11,0.1)")} />
      <div style={S.orb("auto", "auto", "-80px", "-60px", "rgba(52,211,153,0.07)")} />
      <div style={S.wrap}>
        <div style={S.hdr}><div style={S.logo}>Uncommon Ground Initiative</div></div>
        <div style={S.card}>
          <div style={{ textAlign: "center", padding: "48px 28px" }}>
            <div style={{ fontSize: "56px", marginBottom: "18px" }}>🙌</div>
            <div style={{ fontSize: "24px", color: "#FEF3C7", fontFamily: "Georgia, serif", fontWeight: "bold", marginBottom: "14px" }}>
              {answers.name ? `We see you, ${answers.name}.` : "We see you."}
            </div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.48)", fontFamily: "Arial, sans-serif", lineHeight: "1.85", marginBottom: "28px" }}>
              Thank you for being real with us.<br />
              <span style={{ color: "#F59E0B" }}>You belong here — exactly as you are.</span><br /><br />
              Someone from UGI will connect with you personally today.<br />
              You're not just a face in the room.
            </div>
            <button style={{ padding: "11px 30px", borderRadius: "10px", border: "1px solid rgba(245,158,11,0.3)", background: "transparent", color: "#F59E0B", fontSize: "11px", fontFamily: "Arial, sans-serif", cursor: "pointer", letterSpacing: "2px", textTransform: "uppercase" }}
              onClick={() => { setAnswers({}); setStep(0); setSubmitted(false); }}>
              Start Over
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={S.root}>
      <div style={S.orb("-100px", "-80px", "auto", "auto", "rgba(245,158,11,0.1)")} />
      <div style={S.orb("auto", "auto", "-80px", "-60px", "rgba(52,211,153,0.07)")} />
      <div style={S.wrap}>
        <div style={S.hdr}>
          <div style={S.logo}>Uncommon Ground Initiative</div>
          <div style={S.sub}>Get to Know You</div>
        </div>
        <div style={S.dots}>
          {sections.map((s, i) => <div key={s.id} style={S.dot(i === step, i < step)} />)}
        </div>
        <div style={S.card}>
          <div style={S.secHdr}>
            <span style={S.emoji}>{currentSection.emoji}</span>
            <div>
              <div style={S.secStep}>Part {step + 1} of {sections.length}</div>
              <h2 style={S.secTitle}>{currentSection.label}</h2>
            </div>
          </div>

          {currentSection.questions.map(q => (
            <div key={q.id} style={S.q}>
              <label style={S.lbl}>{q.label}</label>
              {q.type === "text" && <input style={S.inp} placeholder={q.placeholder} value={answers[q.id] || ""} onChange={e => handleChange(q.id, e.target.value)} onFocus={e => e.target.style.borderColor = "rgba(245,158,11,0.5)"} onBlur={e => e.target.style.borderColor = "rgba(245,158,11,0.17)"} />}
              {q.type === "textarea" && <textarea style={S.ta} placeholder={q.placeholder} value={answers[q.id] || ""} onChange={e => handleChange(q.id, e.target.value)} onFocus={e => e.target.style.borderColor = "rgba(245,158,11,0.5)"} onBlur={e => e.target.style.borderColor = "rgba(245,158,11,0.17)"} />}
              {q.type === "select" && <select style={S.sel} value={answers[q.id] || ""} onChange={e => handleChange(q.id, e.target.value)}><option value="">Select...</option>{q.options.map(o => <option key={o} value={o}>{o}</option>)}</select>}
              {q.type === "radio" && (
                <div style={S.rg}>
                  {q.options.map(opt => {
                    const sel = answers[q.id] === opt;
                    return (
                      <div key={opt} style={S.ro(sel)} onClick={() => handleChange(q.id, opt)}>
                        <div style={S.rc(sel)}>{sel && <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#0f0c07" }} />}</div>
                        <span style={S.rl}>{opt}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          <div style={S.btnRow}>
            {step > 0 && <button style={S.back} onClick={goBack}>← Back</button>}
            <button style={S.next} onClick={goNext}>{step < sections.length - 1 ? "Next →" : "Submit 🙌"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
