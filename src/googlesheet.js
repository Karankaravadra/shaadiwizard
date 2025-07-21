const GOOGLE_SHEET_ENDPOINT = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

const GoogleSheet = {
  async send(data) {
    await fetch(GOOGLE_SHEET_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  },
};
export default GoogleSheet;
