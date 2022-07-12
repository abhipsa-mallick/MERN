let numberofelements =Number(prompt('ENTER THE NUMBER OF ELEMENTS '));
let arr =[];
let sum =0;
for(let i=0;i<numberofelements;i++)
{
    let num = Number(prompt(`enter $(i) elements`));
    arr.push(num);
    console.log(num);
    if((num)>0 && (num)%6==0 )
    {
        sum = sum+arr[i];
    }
    
}

console.log('Sum of elements are' +sum);