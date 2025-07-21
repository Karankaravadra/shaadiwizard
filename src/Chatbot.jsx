import React, { useState } from "react";
import VoiceHandler from "./VoiceHandler.js";
import GoogleSheet from "./GoogleSheet.js";

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Namaste! I'm ShaadiWizard 🤗", user: false },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (msg, user = true) => {
    const newMsg = { text: msg, user };
    setMessages((prev) => [...prev, newMsg]);
    if (user) {
      VoiceHandler.speak("Let me think...");
      sendToGoogleSheet({ message: msg }).catch(console.error);
      setTimeout(() => {
        const reply = `You said: "${msg}". How many guests would you like to invite?`;
        sendMessage(reply, false);
      }, 800);
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((m, i) => (
          <div key={i} className={m.user ? "msg user" : "msg bot"}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <button onClick={() => VoiceHandler.start((text) => sendMessage(text))}>
          🎙
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your wedding plan..."
        />
        <button onClick={() => { sendMessage(input); setInput(""); }}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;

