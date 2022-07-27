let {additem}=require('./create');
let {updatequantity}=require('./update');
let {removeitem}=require('./remove');
let prompt = require('prompt-sync')();
let operation =prompt('which operation do you want to perform: ');
switch(operation){
    case 'add':
                additem();
                break;
    case 'update':
                let quantity = prompt('enter the item to update the quantity:')
                updatequantity(quantity);
                break;
    case 'remove':
                let item = prompt('enter the item which you want to remove:')
                removeitem(item);
                break;
    default:
                console.log('no operation is going to perform');
                break;                                   
}