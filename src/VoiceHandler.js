const VoiceHandler = {
  start: (callback) => {
    const rec = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    rec.lang = navigator.language || "en-IN";
    rec.onresult = (e) => callback(e.results[0][0].transcript);
    rec.start();
  },
  speak: (text) => {
    const ut = new SpeechSynthesisUtterance(text);
    ut.pitch = 2.0;
    ut.rate = 1.2;
    speechSynthesis.speak(ut);
  },
};
export default VoiceHandler;
