function checkNumbers() {
    var start = parseInt(document.getElementById("start").value);
    var end = parseInt(document.getElementById("end").value);
    var result = "";

    for (var i = start; i <= end; i++) {
      if (i % 2 === 0) {
        result += i + " is even.<br>";
      } else {
        result += i + " is odd.<br>";
      }
    }

    document.getElementById("result").innerHTML = result;
  }