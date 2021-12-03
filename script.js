const inputField = document.getElementById("searchInput");
const btn = document.getElementById("btn");

document.querySelector(".search").addEventListener("submit", async (event) => {
  event.preventDefault();

  let input = document.querySelector("#searchInput").value;
  inputField.value = "";

  if (input !== "") {
    clearScreen();
    showMessage("Searching for results...");

    // API Open Weather:
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      input
    )}&appid=e643b5c2b7306a02cba630ffaadcda59&units=metric&lang=en`;
    let results = await fetch(url);
    let json = await results.json();

    if (json.cod === 200) {
      showInfo({
        name: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        tempIcon: json.weather[0].icon,
        windSpeed: json.wind.speed,
        windAngle: json.wind.deg,
      });
    } else {
      clearScreen();
      showMessage("There are no results for this search.");
    }
  } else {
    document.querySelector(".noResult").innerHTML = "Type something please.";
  }
});
function showInfo(json) {
  showMessage("");
  document.querySelector(".result").style.display = "block";

  document.querySelector(".title").innerHTML = `${json.name}, ${json.country}`;
  document.querySelector(".tempInfo").innerHTML = `${json.temp} <sup>°C</sup>`;
  document.querySelector(
    ".windInfo"
  ).innerHTML = `${json.windSpeed} <span>km/h</span>`;

  // Funcao para obter os icons da temperatura
  document
    .querySelector(".info img")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`
    );
}

function showMessage(msg) {
  document.querySelector(".noResult").innerHTML = msg;
}

function clearScreen() {
  showMessage(" ");
  document.querySelector(".result").style.display = "none";
}
