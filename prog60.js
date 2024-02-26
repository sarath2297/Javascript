// prog to check whether 2 is present in the array

let arr = [10,5,6,2,5,3]
flag = false
for(num of arr)
{
    if(num==2)
    {
        // console.log('Number is present');
        flag = true
    }

}
console.log(flag?'Number is present':'Number not present');