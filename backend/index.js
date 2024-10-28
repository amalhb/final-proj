const express = require("express");
const cors = require('cors');
const dishRoutes = require('./Routes/dishRoutes');
const bodyParser = require('body-parser');
const categoryRouter = require('./Routes/categoryDishRoutes.js');
const creatdishRouter=require('./Routes/creatDishRoute.js')
const chiefRouter = require('./Routes/chiefRoutes.js');


const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

 
app.use('/api', dishRoutes); 
app.use('/api', categoryRouter);
app.use('/api', creatdishRouter);
app.use('/api', chiefRouter);



const PORT = 5000;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on port ${PORT}`);
});
