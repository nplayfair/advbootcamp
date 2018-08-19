var btn = document.querySelector("#getPrice");

btn.addEventListener("click", function() {
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(handleErrors)
  .then(response => {
    return response.json();
  })
  .then(jsonPrice => {
    document.querySelector("#price").innerHTML = '&pound;' + jsonPrice.bpi.GBP.rate;
  })
  .catch(error => console.log(error));
});

function handleErrors (request){
  if(!request.ok) {
    throw Error(request.status);
  }
  return request;
}
