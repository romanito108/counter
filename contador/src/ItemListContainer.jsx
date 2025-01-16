import React, { useState, useEffect } from "react";
import { fetchProdutos } from "./ClickCounter"; // Usando o fetchProdutos do seu código
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProdutos().then((data) => {
      setProdutos(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Catálogo de Produtos</h1>
      {loading ? <p>Carregando produtos...</p> : <ItemList produtos={produtos} />}
    </div>
  );
};

export default ItemListContainer;
