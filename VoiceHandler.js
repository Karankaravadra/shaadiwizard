const VoiceHandler = {
  speak: (text) => {
    const msg = new SpeechSynthesisUtterance(text);
    msg.pitch = 2;
    msg.rate = 1.3;
    speechSynthesis.speak(msg);
  }
};
export default VoiceHandler;
