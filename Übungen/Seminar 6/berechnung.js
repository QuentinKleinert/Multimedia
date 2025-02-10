self.onmessage = function(messageEvent) {
  if (messageEvent.data === "Run") {
    let i, summe = 0;
    for (i = 0; i < 900000000; i++) {
      summe += i * i + Math.random();
    }
    self.postMessage(summe);
    self.close();  // Beendet den Worker nach Abschluss der Berechnungen
  }
};
