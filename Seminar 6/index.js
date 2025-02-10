function startWorker() {
    const webworker = new Worker("berechnung.js");

    // Timer und Output-Elemente holen
    const timerElement = document.getElementById("Timer");
    const outputElement = document.getElementById("Output");

    // Zähler und Anzeige zurücksetzen
    let counter = 0;
    timerElement.innerHTML = counter + " s";
    outputElement.innerHTML = "";  // Output zurücksetzen

    // Zähler, der jede Sekunde hochzählt
    const counterInterval = setInterval(() => {
        counter++;
        timerElement.innerHTML = counter + " s";  // Sekundenanzeige
    }, 1000);  // alle 1 Sekunde hochzählen

    // Start der Berechnung im Web Worker
    webworker.postMessage("Run");

    // Ergebnis empfangen und anzeigen
    webworker.onmessage = function(event) {
        // Stoppe den Zähler, wenn das Ergebnis da ist
        clearInterval(counterInterval);

        // Ergebnis anzeigen
        outputElement.innerHTML = event.data;

        // Worker nach der Berechnung beenden
        webworker.terminate();
    };
}

function startSelect() {
  const sortOutput = document.getElementById("SortOutput");
  const worker = new Worker("selectionSortWorker.js");

  sortOutput.value = "Sortierung läuft...";

  worker.onmessage = function (e) {
    sortOutput.value = `Sortierung abgeschlossen in ${e.data.toFixed(2)} ms`;
  };

  worker.postMessage("start");
}









