var btn = document.querySelector("#getPrice");

btn.addEventListener("click", function() {
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => {
    return response.json();
  })
  .then(jsonPrice => {
    document.querySelector("#price").innerHTML = '&pound;' + jsonPrice.bpi.GBP.rate;
  });
});
