const express = require('express'); // Se va a requerir un módulo de express
const app = express(); // Una instancia de la app
app.use(express.json()); // Un middleware de expres para parsear el cuerpo de las peticiones http como json

const products = [		
  {				// Se define un array de los 
    "name": "Samsung Galaxy",	// objetos que representa
    "category": "electronics"	// los productos disponibles
  },				
  {				
    "name": "Motorola V3",	
    "category": "electronics"	
  },
  {
    "name": "Iphone 12",
    "category": "electronics"
  },
  {
    "name": "Skippy",
    "category": "grocery store"
  }
];

app.get('/products', (req, res) => { //Se define una ruta Get para filtrar los productos
  const filter = req.query.filter; //Se obtiene el valor de la query string de la petición
  const filteredProducts = products.filter(product => product.name.includes(filter)); //Filtra el array de productos
  const suggestedProducts = products.filter(product => product.category === filteredProducts[0].category && product.name !== filteredProducts[0].name).slice(0, 2); //Se obtienen dos productos sugeridos que tengan la misma categoría
  res.json([...filteredProducts, ...suggestedProducts]);
}); //Se envía una respuesta Json con el array de los productos filtrados y sugeridos

const PORT = process.env.PORT || 3000; //Puerto de ejecución
app.listen(PORT, () => console.log(`El servidor se está ejecutando en el puerto ${PORT}`)); //Se inicia el servidor con un mensaje en la consola

