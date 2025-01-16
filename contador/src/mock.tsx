const mockFetchItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "Produto A",
            description: "Descrição do Produto A",
            price: 100,
            pictureUrl: "https://via.placeholder.com/150",
          },
          {
            id: 2,
            title: "Produto B",
            description: "Descrição do Produto B",
            price: 150,
            pictureUrl: "https://via.placeholder.com/150",
          },
        ]);
      }, 2000); 
    });
  };
  
  export default mockFetchItems;
  