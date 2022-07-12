const arr =[1,3,4,5,9];
const max1=0;
function max(max1){
    for(let i=0;i<arr.length;i++)
    {
        if(max1<arr[i])
            max1=arr[i];
    }
    return max1;
}
console.log(arr);
const MAX = max(max1);
console.log(`MAXIMUM ELEMENT IS ${MAX}`);