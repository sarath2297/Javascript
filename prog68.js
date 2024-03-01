//Nested array 
// flat() - prog to print value greater than 25 in an nested array with the help of flat

arr = [[2,45,[5,88]],[5,56],[3,12],[26,4]]

console.log(arr);

a = arr.flat(2)
console.log(a);
for(num of a)
{
    if(num>25)
    {
        console.log(num);
    }
}