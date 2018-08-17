var btn = document.querySelector("#getPrice");

btn.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var price = JSON.parse(XHR.responseText).bpi.GBP.rate;
      document.querySelector("#price").innerHTML = '&pound;' + price;
    }
  }

  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
})
