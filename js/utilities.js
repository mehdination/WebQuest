// Name: Mehdi Mihir

function getRandomInt(lower, upper) {
  var mult = upper - (lower - 1);
  var rand = parseInt(Math.random() * mult) + lower;

  return rand;
}

function avg(values) {
  var total = 0;

  for (var i = 0; i < values.length; i++) {
    total += values[i];
  }
  return total / values.length;
}

function median(values) {
  values.sort();

  // (works only if values.length > 1)
  //checks if the number of values is an even number
  //if this condition is met, then the median will be equal to the average of the last term in the first partition and the first term in the second partition
  //otherwise, if the number of values is an odd number, then the median will be set to the middle number


  if ((values.length % 2) == 0) {
    median = (values[(values.length / 2) - 1] + values[values.length / 2]) / 2;
  } else {
    median = values[(values.length + 1) / 2];
  }
  return median;
}