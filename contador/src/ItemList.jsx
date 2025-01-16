import React from "react";
import Item from "./Item";

const ItemList = ({ produtos }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {produtos.map((produto) => (
        <Item key={produto.id} {...produto} />
      ))}
    </div>
  );
};

export default ItemList;
