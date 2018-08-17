function countDown(delay) {
  var remaining = delay;
  var intervalId = setInterval(function(delay) {
    if (remaining == 0) {
      clearInterval(intervalId);
      return console.log("Ring Ring Ring!!!");
    }
    else {
      console.log(remaining);
      remaining -= 1;
    }
  }, 1000);
}
