var btn = document.querySelector("#btn");
var setName = document.querySelector("#name");
var setEmail = document.querySelector("#email");
var setDate = document.querySelector("#date");
var setCity = document.querySelector("#city");
var setCountry = document.querySelector("#country");

const name = "tiao";
const email = "tiaoze@gmail.com";
const birth = "04/06/1999";
const city = "pindamonhagaba";
const country = "brazil";

btn.addEventListener("click", validacao);

function validacao() {
  var nameValue = setName.value;
  var emailValue = setEmail.value;
  var dateValue = setDate.value;
  var cityValue = setCity.value;
  var countryValue = setCountry.value;

  if (emailValue === email && dateValue === birth && cityValue === city && countryValue === country) {
    alert("logou");
  } else {
    alert("credenciais inválidas");
  }
}
