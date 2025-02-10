onmessage = function(e) {
  console.log( '[worker.js] - Message received from script.js' );
  var lowerBound = e.data[0];
  var upperBound = e.data[1];

  var count = 0;
  var sum = 0;
  for (i = lowerBound; i <= upperBound; i++) {
    if (i % 3 == 0) {
      count++;
      sum += parseInt(i);
    } else if (i % 5 == 0) {
      count++;
      sum += parseInt(i);
    }
  }
  console.log( '[worker.js] - Posting message back to script.js' );
  var result = 'There are ' + count + ' multiples of 3 or 5 between ' + lowerBound + ' and ' + upperBound + '. The sum of these numbers is ' + sum + '.';
  postMessage(result);
}