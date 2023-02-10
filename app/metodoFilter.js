const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => {
  btn.addEventListener("click", filtrarLivros);
});

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  //
  let livrosFiltrados =
    categoria == "disponivel"
      ? filtrarPorDisponiveis()
      : filtrarPorCategoria(categoria);
  exibirOsLivrosNaTela(livrosFiltrados);
  if (categoria == "disponivel") {
    const valorTotal = calcularValorTotal(livrosFiltrados);
    exibirValorComDescontoNaTela(valorTotal);
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarPorDisponiveis() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorComDescontoNaTela(valorTotal) {
  elementoComDesconto.innerHTML = ` <div class="livros__disponiveis">
  <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
</div>`;
}
