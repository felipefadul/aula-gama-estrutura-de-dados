var valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];

function busca(num) {
  for (i = 0; i < 6; i++) {
    if (num == valores[i]) {
      return i;
    }
  }
  return -1;
}

function buscaBinaria(num) {
  let inicio, meio, fim;
  let passos = 0;
  inicio = 0;
  fim = 9;
  while (inicio <= fim) {
    meio = parseInt((inicio + fim) / 2);
    passos += 1;
    if (num == valores[meio]) {
      console.log("Achei em " + passos + " passos.");
      return meio;
    }
    else {
      if (num > valores[meio]) {
        inicio = meio + 1;
      }
      else {
        fim = meio - 1;
      }
    }
  }
  console.log("Não achei em " + passos + " passos.");
  return -1;
}
//Usando a nossa ferramenta de busca

console.log(buscaBinaria(10));
console.log(buscaBinaria(60));
console.log(buscaBinaria(50));