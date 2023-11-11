const express = require('express');
const app = express();
const port = 3000;
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is product 1',
    price: 100,
    category: 'Category 1',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is product 2',
    price: 200,
    category: 'Category 2',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is product 3',
    price: 300,
    category: 'Category 3',
  },
];
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/products', (req, res) => {
  res.json(products);
});
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id == id);
  res.json(product);
});

app.get('/categories/:id/products/:productId', (req, res) => {
  const { id, productId } = req.params;
  res.json({
    id: id,
    productId: productId,
    name: 'Product 1',
    price: 100,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); // listen to port 3000
