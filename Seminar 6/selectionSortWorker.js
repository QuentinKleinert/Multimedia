onmessage = function(e) {
  if (e.data === "start") {
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
    postMessage(time);
  }
};


