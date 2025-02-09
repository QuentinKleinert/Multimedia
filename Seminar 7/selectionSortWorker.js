onmessage = function (e) {
  if (e.data === "start") {
    const array = createArray(50000); // 50K Elemente zum Sortieren

    const startTime = performance.now();
    selectionSort(array);
    const endTime = performance.now();

    postMessage(endTime - startTime); // Sende die benötigte Zeit zurück
  }
};

// Hilfsfunktion zum Erstellen eines Arrays
function createArray(size) {
  const array = [];
  for (let i = size; i >= 0; i--) {
    array.push(i);
  }
  return array;
}

// Selection Sort Algorithmus
function selectionSort(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]; // Elemente tauschen
    }
  }
}

