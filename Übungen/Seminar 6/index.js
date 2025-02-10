// Aufgabe 1 + 2
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

// Aufgabe 3
function nonWebWorker() {
    preStart();
    var a = [];

    for (var i = 50000; i >= 0; i--) {
        a.push(i);
    }

    function selectionSort(a) {
        var n = a.length;
        for (var i = 0; i < n - 1; i++) {
            var minIndex = i;
            for (var j = i + 1; j < n; j++) {
                if (a[j] < a[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                var temp = a[i];
                a[i] = a[minIndex];
                a[minIndex] = temp;
            }
        }
    }

    var start = new Date().getTime();
    selectionSort(a);
    var end = new Date().getTime();
    var time = end - start;
    afterStop(time, false);
}

function withWebWorker() {
    preStart();
    var worker = new Worker("selectionSortWorker.js");

    worker.onmessage = function(e) {
        afterStop(e.data, true);
    };

    worker.postMessage("start");
}

function preStart() {
    $("#resultBox").hide(500);
    $("#withWW").hide();
    $("#withoutWW").hide();
    $("#progressbar").show(500);
}

function afterStop(spentTime, mode) {
    $("#timespent").html(spentTime + "ms");
    $("#progressbar").hide(500, function() {
        mode ? $("#withWW").show() : $("#withoutWW").show();
        $("#resultBox").show(500);
    });
}

// Aufgabe 4
var lowerBound = document.querySelector('#lower');
var upperBound = document.querySelector('#upper');
var calculate = document.querySelector('#calculate');
var result = document.querySelector('#result');

if (!!window.Worker) {
    var myWorker = new Worker('worker.js');

    calculate.onclick = function() {
        document.getElementById("loading").style.display = 'block';
        myWorker.postMessage([lowerBound.value, upperBound.value]);
        console.log('[script.js] - Message posted to worker.js');
    }

    myWorker.onmessage = function(e) {
        document.getElementById("loading").style.display = 'none';
        result.textContent = e.data;
        console.log('[script.js] - Message received from worker.js');
    }
}





