let Emp ={
    Name:'Abhipsa Mallick',
    email:'mallickabhipsa05@gmail.com',
    Phone:954321678,
    Basic_Salary:110000,
    tsal:function(){
        const hra=0.15*this.Basic_Salary;
        const sa= 0.20*this.Basic_Salary;
       tsal=this.Basic_Salary+hra+sa;
    
    
    if(  this.Basic_Salary > 40000 && this.Basic_Salary<50000)
    {
         tsal=tsal-(0.1*tsal);
    }
    else if(  this.Basic_Salary > 50000 && this.Basic_Salary<70000)
    {
         tsal=tsal-(0.15*tsal);
    }
    else if(  this.Basic_Salary > 70000 && this.Basic_Salary<80000)
    {
         tsal=tsal-(0.2*tsal);
    }
    else if(  this.Basic_Salary > 80000)
    {
         tsal=tsal-(0.3*tsal);
    }
    return tsal;
}
    
}
console.log(`employee name is ${Emp.Name}`)
console.log(`employee email is ${Emp.email}`)
console.log(`Salary after tax deduction ${Emp.tsal()}`)