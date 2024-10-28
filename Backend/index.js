const express = require('express');
const bodyParser = require('body-parser');
const dishRoutes = require('./Routes/dishRoutes.js');
const orderRoutes =require('./Routes/orderRoute.js')

const app = express();
app.use(bodyParser.json());
app.use(dishRoutes);




app.use('/api/orders', orderRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});