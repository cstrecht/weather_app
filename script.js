//1. Prevenir que o form seja enviado, quando carregado o botao search para que a pagina nao atualize.
document.querySelector(".search").addEventListener("submit", (event) => {
  event.preventDefault();

  //2. Assim que a pag nao foi atualizada, guardar o que foi colocado no input:
  let input = document.querySelector("#searchInput").value;
  console.log(input);

  //3. Não dar search a um espaço em branco. Como?
  if (input !== "") {
    // loading... criar função para mostrar uma msg na .noResult
    showMessage("Searching for results...");
  } else {
    document.querySelector(".noResult").innerHTML =
      "There are no results for this search.";
  }
});
function showMessage(msg) {
  document.querySelector(".noResult").innerHTML = msg;
}
