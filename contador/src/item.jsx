const Item = ({ id, nome, descricao, estoque }) => {
    return (
      <div key={id} style={{ border: "1px solid #ccc", padding: "16px", margin: "16px" }}>
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <p><strong>Estoque:</strong> {estoque}</p>
      </div>
    );
  };
  
  export default Item;
  