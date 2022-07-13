let customer = [
    {
        name:'Aisha',
        email: 'aisha@gmail.com',
        phone: '+91-123-456-7890',
        no_of_times_shopped: 2,
        purchase_history : [
        {
                date_of_purchase:'01/07/2022',
                item_purchase:[
                    {
                        product_name:'Samsung Galaxy ',
                        product_price:12000
                    },
                    {
                        product_name:'Mixer',
                        product_price:4000
                    },
        ]
        },
        {
                date_of_purchase:'30/06/2022',
                item_purchase:[
                    {
                        product_name:'Jeans',
                        product_price:1200
                    }
                ]
            }
        ],
    },
        {
        name:'Abhijeet',
        email: 'abhijeet@gmail.com',
        phone: '+91-67845621',
        no_of_times_shopped: 1,
        purchase_history : [
        {
                date_of_purchase:'30/07/2021',
                item_purchase:[
                    {
                        product_name:'Refrigerator',
                        product_price:12000
                    },
                    
        ]
        }
        ]
    },
    {
        name:'Gopali',
        email: 'gopali14@gmail.com',
        phone: '+91-996712321',
        no_of_times_shopped: 3,
        purchase_history : [
        {
                date_of_purchase:'02/07/2022',
                item_purchase:[
                    {
                        product_name:'shirt',
                        product_price:1000
                    },
                    {
                        product_name:'earphone',
                        product_price:4000
                    },
        ]
        },
        {
                date_of_purchase:'11/06/2022',
                item_purchase:[
                    {
                        product_name:'Jeans',
                        product_price:1500
                    }
                ]
            },
            {
                date_of_purchase:'02/05/2022',
                item_purchase:[
                    {
                        product_name:'one plus',
                        product_price:25000
                    }
                ]
            }   
        ]
    },
    {
        name:'Venkateshwar',
        email: 'venkateshwar@example.com',
        phone: '+91-123-456-7890',
        no_of_times_shopped: 6,
        purchase_history : [
        {
                date_of_purchase:'02/07/2022',
                item_purchase:[
                    {
                        product_name:'poco phone',
                        product_price:16950
                    },
                    {
                        product_name:'speaker',
                        product_price:3000
                    },
        ]
        },
        {
                date_of_purchase:'05/06/2022',
                item_purchase:[
                    {
                        product_name:'Jeans',
                        product_price:1299
                    }
                ]
            },
            {
                date_of_purchase:'07/05/2022',
                item_purchase:[
                    {
                        product_name:'shirt',
                        product_price:2000
                    }
                ]
            },
            {
                date_of_purchase:'09/05/2022',
                item_purchase:[
                    {
                        product_name:'laptop',
                        product_price:55000
                    }
                ]
            },
            {
                date_of_purchase:'12/02/2022',
                item_purchase:[
                    {
                        product_name:'Jeans',
                        product_price:2499
                    }
                ]
            },
            {
                date_of_purchase:'03/03/2022',
                item_purchase:[
                    {
                        product_name:'shirt',
                        product_price:2000
                    }
                ]
            },     
        ]
    },
    {
        name:'Roshni',
        email: 'roshni31@gmail.com',
        phone: '+91-9623442167',
        no_of_times_shopped: 6,
        purchase_history : [
            {
                    date_of_purchase:'11/01/2022',
                    item_purchase:[
                        {
                            product_name:'oppo phone',
                            product_price:22950
                        },
                        {
                            product_name:' sony speaker',
                            product_price:10000
                        },
            ]
            },
            {
                    date_of_purchase:'12/02/2022',
                    item_purchase:[
                        {
                            product_name:'Jeans',
                            product_price:2499
                        }
                    ]
                },
                {
                    date_of_purchase:'03/03/2022',
                    item_purchase:[
                        {
                            product_name:'shirt',
                            product_price:2000
                        }
                    ]
                },
                {
                    date_of_purchase:'05/05/2022',
                    item_purchase:[
                        {
                            product_name:'laptop',
                            product_price:64000
                        }
                    ]
                },
                {
                    date_of_purchase:'07/05/2022',
                    item_purchase:[
                        {
                            product_name:'Earphone',
                            product_price:1399
                        }
                    ]
                },
                {
                    date_of_purchase:'07/06/2022',
                    item_purchase:[
                        {
                            product_name:'Bag',
                            product_price:2965
                        }
                    ]
                },                  
            ]
           
               
            }
          
           
        ]
    customer.forEach((value)=>{
        console.log(`${value.name}`)

    })
    let filterarr = customer.filter(item=>(item.no_of_times_shopped>5))
        console.log('customer with more than 5 times shopping are')
        console.log(filterarr);

        
        
        
        for(let i=0;i<5;i++)
        {
            let  total_purchase = 0;
            for(let j=0;j<customer[i].no_of_times_shopped;j++){
                let sum=0
                for(let k=0;k<customer[i].purchase_history[j].item_purchase.length;k++){
                    
                    sum += customer[i].purchase_history[j].item_purchase[k].product_price;
                }
                total_purchase += sum;
            }
            console.log(`\nTotal purchase by ${customer[i].name} is ${total_purchase}`);
        }