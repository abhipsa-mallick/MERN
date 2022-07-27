const express = require('express');
const { dbconn}=require('./config/db');
const productroutes = require('./routes/product');
const cors = require('cors');

const main = express();

const port = 4001; 

main.use(express.json());
main.use(cors());

main.use('/product',productroutes);
dbconn();
main.listen(port, () =>{
    console.log(`Server started at port${port}`);
})