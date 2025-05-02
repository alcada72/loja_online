const BuscarProdutos = async (query) => {
  try {
    const url = query
      ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
      : `https://dummyjson.com/products`;

    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error(`Erro HTTP na API: ${resposta.status}`);
    }

    const { products = [] } = await resposta.json();
    return products;

  } catch (erro) {
    console.error("Falha na busca de produtos:", erro.message);
    return [];
  }
};

export default BuscarProdutos;
// Compare this snippet from src/components/Processador/Preocessador.jsx: