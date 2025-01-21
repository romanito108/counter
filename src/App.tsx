import React from 'react';
import ClickCounter from './counter';
import Itemcount from './itemCount';
import ItemListContainer from "./ItemListContainer";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Contador de Cliques</h1>
     
    <Itemcount />
    <ItemListContainer />
    </div>
  );
}

export default App;