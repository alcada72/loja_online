const BuscarProdutos = async (query) => {
  try {
    const resposta = await fetch(
      `https://dummyjson.com/products/search?q=${query}`
    );
    
    if (!resposta.ok) {
      throw new Error(`Erro HTTP NO SERVIDOR DA api: ${resposta.status}`);
    }

    const data = await resposta.json();
    return data.products || []; // Retorna array vazio se não houver resultados
  } catch (erro) {
    console.error("Falha na busca:", erro);
    return []; // Fallback para evitar quebras no frontend
  }
};

export default BuscarProdutos;