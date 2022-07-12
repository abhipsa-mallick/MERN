let n = Number(prompt('Enter the number of element'));
let j=2;
let count =0;
let sum =0;
let flag =1;
while(count<n)
{
    for(let i=2;i<j-1;i++){
        if(j%i==0){
            flag =0;
            break;
        }
    }
    if(flag==1)
    {
        sum+=j;
        count++;
    }
    j++;
    flag=1;
}
console.log(`sum of first 10 prime numbers are ${sum}`)