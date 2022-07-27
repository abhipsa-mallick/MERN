const express = require('express');
const productroutes = require('./routes/product');
const main = express();
const port = 5001; 

main.use(express.json());

main.use(productroutes);

main.listen(port, () =>{
    console.log(`Server started at port${port}`);
})