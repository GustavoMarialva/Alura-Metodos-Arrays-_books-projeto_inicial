let livros = [];
const endPointDaAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endPointDaAPI);
  livros = await res.json();
  console.table(livros);
  // table cria um console com uma tabela com todos os dados do array da api
}
