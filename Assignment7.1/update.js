const prompt = require('prompt-sync')();
const fs = require('fs');
const { threadId } = require('worker_threads');
function Cart(id,Name,quantity,price){
    this.id=id;
    this.Name=Name;
    this.quantity=quantity;
    this.price=price;
}
exports.updatequantity=(id,Name)=>{

    let cartarr = JSON.parse(fs.readFileSync("cart.json"));
    console.log(`Orignal Cart Items :  ${JSON.stringify(cartarr)}`)
    cartarr = cartarr.filter(cart=>cart.Name!=Name)
    let quantity = Number(prompt('Enter how much you want to update qauntity: '));
    let price= Number(prompt('Enter the original product price : '));
    let cartobj = new Cart(id,Name,quantity,price);
    console.log('Adding quantity to cart:');
    cartarr =[...cartarr,cartobj];
    console.log('After adding new item');
    fs.writeFile("cart.json",JSON.stringify(cartarr),(err)=>{
        if(err)
            console.log('Error');
        else
            console.log('Cart(s) item updated succesfully') ;   
    });

}