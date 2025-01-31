import React, { useState, useEffect } from "react";
import mockFetchItems from "./mock"; 
import ItemDetail from "./itemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockFetchItems().then((data) => {
      const singleItem = data[0]; 
      setItem(singleItem);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      {loading ? (
        <p>Carregando detalhes do produto...</p>
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
}

export default ItemDetailContainer;