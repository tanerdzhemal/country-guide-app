const result = document.getElementById("result");
const btn = document.getElementById("search-btn");
const url = "https://restcountries.com/v3.1/name/";

const getCountry = function () {
  let inpCountry = document.getElementById("inp-country").value;
  fetch(`${url}${inpCountry}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let languages = Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(", ");
      result.innerHTML = `
      <img src="${data[0].flags.svg}" class="flag-img"></img>
      <h3 class="details">Name: <h3 class="data">${
        data[0].name.common
      }</h3></h3>
      <h3 class="details">Capital: <h3 class="data"> ${
        data[0].capital[0]
      }</h3></h3>
      <h3 class="details">Continent: <h3 class="data">${
        data[0].region
      }</h3></h3>
      <h3 class="details">Population: <h3 class="data">${
        data[0].population
      }</h3></h3>
      <h3 class="details">Languages: <h3 class="data"> ${languages} </h3></h3>
      <h3 class="details">Currency: <h3 class="data">${
        data[0].currencies[Object.keys(data[0].currencies)].name
      } - ${Object.keys(data[0].currencies)[0]}</h3></h3>
    `;
    })
    .catch(() => {
      if (inpCountry.length == 0) {
        result.innerHTML = `<h4>Nothing to look for...</h4>`;
      } else {
        result.innerHTML = `<h4>Please enter a valid country name!</h4>`;
      }
    });
};

btn.addEventListener("click", getCountry);
