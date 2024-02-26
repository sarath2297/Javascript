// Binary Search

arr = [5,7,3,2,9,10]
arr.sort((a,b)=>a-b)  // ascending
console.log(arr);

search = 10
low = 0
up = arr.length - 1
flag = false

while(low<=up)
{
    mid = parseInt(( low + up ) / 2)
    if(arr[mid]==search)
    {
        flag = true
        break
    }
    else if(arr[mid]>search)
    {
        up = mid -1
    }
    else
    {
        low = mid + 1
    }
}

console.log(flag?`${search} is present in the array`:`${search} is not present in the array`);