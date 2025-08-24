document.getElementById("sortear").addEventListener("click", () => {
  const jogadoresInput = document.getElementById("jogadores").value.trim();
  const qtd = parseInt(document.getElementById("qtd").value);
  const resultadoDiv = document.getElementById("resultado");

  if (!jogadoresInput) {
    resultadoDiv.innerHTML = "<p>Adicione jogadores primeiro!</p>";
    return;
  }

  let jogadores = jogadoresInput.split("\n").map(j => j.trim()).filter(j => j);
  jogadores = jogadores.sort(() => Math.random() - 0.5); // embaralha

  let times = [];
  while (jogadores.length > 0) {
    times.push(jogadores.splice(0, qtd));
  }

  resultadoDiv.innerHTML = "";
  times.forEach((time, i) => {
    let html = `<h3>Time ${i+1}</h3><ul>`;
    time.forEach(j => html += `<li>${j}</li>`);
    html += "</ul>";
    resultadoDiv.innerHTML += html;
  });
});
