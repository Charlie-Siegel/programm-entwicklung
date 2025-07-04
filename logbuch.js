// logbuch.js
const logEntries = [];

function addLogEntry({ action, type, name, details, user }) {
  const entry = {
    timestamp: new Date().toISOString(),
    action,
    type,
    name,
    details,
    user
  };
  logEntries.push(entry);
  console.log("🔹 Log-Eintrag hinzugefügt:", entry);
}

function getLogEntries() {
  return logEntries;
}

function downloadLogbuch() {
  const blob = new Blob(
    [JSON.stringify(logEntries, null, 2)],
    { type: "application/json" }
  );
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "logbuch.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
