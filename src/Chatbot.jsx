import React, { useState } from 'react';
import VoiceHandler from './VoiceHandler';
import EmailHandler from './EmailHandler';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      VoiceHandler.speak("Thank you! We received: " + input);
      EmailHandler.send({ message: input });
      setInput('');
    }
  };

  return (
    <div className="chatbot-window">
      <h2>🧙‍♂️ ShaadiWizard</h2>
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender === 'user' ? 'user-msg' : 'bot-msg'}>
            {msg.text}
          </div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your wedding plan..." />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chatbot;
