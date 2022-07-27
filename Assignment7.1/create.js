const prompt = require('prompt-sync')();
const fs = require('fs');
function Cart(id,Name,quantity,price){
    this.id=id;
    this.Name=Name;
    this.quantity=quantity;
    this.price=price;
}
exports.additem=()=>{
    const noofitems = Number(prompt('Enter number of items: '));
    let cartarr=[];
    let total_price=0;
    for(let i=0;i<noofitems;i++){
        let id = prompt('Enter ID of the item: ');
        let Name = prompt('Enter name of the item: ');
        let quantity = Number(prompt('enter quantity of items :'));
        let price = Number(prompt('Enter price of the items: '));
        let cart = new Cart(id,Name,quantity,price);
        cartarr.push(cart)
        total_price+=quantity*price;
      

    }
    console.log(`Total Price of added items: ${total_price}`);
    fs.writeFile("cart.json",JSON.stringify(cartarr),(err)=>{
        if(err)
            console.log('Error');
        else
            console.log('Cart(s) details saved succesfully') ;   
    });
}