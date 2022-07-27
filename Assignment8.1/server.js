const express = require('express');
const fs = require('fs');
const app = express();
const port = 4000;
app.get('/',(req,res)=>{  

const content = JSON.parse(fs.readFileSync("cart.json"));
let totalPrice=0;
for(let i=0;i<content.length;i++){
    totalPrice+=content[i].quantity*content[i].price;
}
    res.status(200).json({
        message:"Retrieved Data",
        data:content,
        totalPrice:totalPrice

    })
})        
app.get('/:id',(req,res)=>{ 
    id = req.params.id; 
    const content = JSON.parse(fs.readFileSync("cart.json"));
    const matchedItem = content.filter(item=>item.id == id);
    res.status(200).json({
        message:"Retrieved Data",
        data:matchedItem
    })
})

app.listen(port,()=>{

    console.log(`Server started at ${port}`)
})