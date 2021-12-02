document
  .querySelector(".search")
  .addEventListener("submit", async (/* codigo assincrono! */ event) => {
    event.preventDefault();

    let input = document.querySelector("#searchInput").value;
    console.log(input);

    if (input !== "") {
      showMessage("Searching for results...");

      // URL do link da pagina Open Weather.
      // Na template string, usar encodeURI para passar para um formato url
      // API key = as vezes que vou acessar à api do site. Acessar a API key da minha conta
      // existem outros parametros que podem ser usados p.e: lingua = &lang=en
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
        input
      )}&appid=e643b5c2b7306a02cba630ffaadcda59&units=metric&lang=en`;

      let results = await fetch(url); // fetch: promisses. fazer requisicao, esperar resposta, qd tiver resposta continua o codigo
      let json = await results.json(); //await : ele diz"faz a requisicao,espera o resultado e TRANSFORMA em json!!""

      console.log(json);
    } else {
      document.querySelector(".noResult").innerHTML =
        "There are no results for this search.";
    }
  });
function showMessage(msg) {
  document.querySelector(".noResult").innerHTML = msg;
}
