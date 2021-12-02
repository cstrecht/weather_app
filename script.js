document.querySelector(".search").addEventListener("submit", async (event) => {
  event.preventDefault();

  let input = document.querySelector("#searchInput").value;
  console.log(input);

  if (input !== "") {
    showMessage("Searching for results...");

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      input
    )}&appid=e643b5c2b7306a02cba630ffaadcda59&units=metric&lang=en`;

    let results = await fetch(url);
    let json = await results.json();

    // API Open weather encontrou o resultado???
    // RESULTADO EXISTE: json.cod = 200 ; RESULTADO NAO EXISTE: json.cod = '404' json.message='city not found'
    if (json.cod === 200) {
      // Se for verdade, mostrar as informacoes no ecra
      showInfo({
        name: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        tempIcon: json.weather[0].icon,
        windSpeed: json.wind.speed,
        windAngle: json.wind.deg,
      });
    } else {
      showMessage("There are no results for this search");
    }
  } else {
    document.querySelector(".noResult").innerHTML = "Type something please.";
  }
});

function showMessage(msg) {
  document.querySelector(".noResult").innerHTML = msg;
}

function showInfo(json) {
  showMessage(""); // retirar a show message
  document.querySelector(".result").style.display = "block";
}
