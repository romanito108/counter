import React from "react";

const ItemList = ({ produtos }) => {
  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id}>
          <h2>{produto.title}</h2>
          <p>{produto.description}</p>
          <p>Preço: R$ {produto.price}</p>
          <img src={produto.pictureUrl} alt={produto.title} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
