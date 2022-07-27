const prompt = require('prompt-sync')();
const fs = require('fs');
function Cart(id,Name,quantity,price){
    this.id=id;
    this.Name=Name;
    this.quantity=quantity;
    this.price=price;
}
exports.removeitem=(Name)=>{

    let cartarr = JSON.parse(fs.readFileSync("cart.json"));
    cartarr = cartarr.filter(cart=>cart.Name!=Name)
    console.log(`Orignal cart items : ${JSON.stringify(cartarr)}`)
    //console.log(`Update -> ${JSON.stringify(cartarr)}`)
    console.log(`Item Name which we want to remove : ${Name}`)
    
    //console.log('After removing item :');
    fs.writeFile("cart.json",JSON.stringify(cartarr),(err)=>{
        if(err)
            console.log('Error');
        else
            console.log('Cart(s) Item Removed Succesfully') ;   
    });

}

