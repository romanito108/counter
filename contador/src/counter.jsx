import React from 'react';


export const fetchProdutos = () => {
  return new Promise((resolver) => {
    setTimeout(() => {
      resolver([
        { id: '1', nome: 'produtoA', descricao: 'descprodutoa', estoque: 10 },
        { id: '2', nome: 'produtoB', descricao: 'descprodutob', estoque: 5 },
        { id: '3', nome: 'produtoC', descricao: 'descprodutoc', estoque: 20 },
      ]);
    }, 3000); 
  });
};


const ClickCounter = () => {
  return <h1>Componente de Contador</h1>;
};

export default ClickCounter;
