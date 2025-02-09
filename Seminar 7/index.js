const webworker = new Worker("berechnung.js");

// Start der Berechnung
webworker.postMessage("Run");

// Ergebnis empfangen und anzeigen
webworker.onmessage = function(workerMessage) {
  alert("Ergebnis: " + workerMessage.data);
  
  // Worker nach der Berechnung beenden
  webworker.terminate();    
};
