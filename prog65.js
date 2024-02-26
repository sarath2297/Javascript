// prog to find pair whose sum is 7 using binary search

arr = [1,2,3,4,5,6,7,8,9,0,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

low = 0
up = arr.length - 1
searchsum = 50
flag = false
while(low<up)
{
    sum = arr[low] + arr[up]
    if(sum==searchsum)
    {
        console.log(`(${arr[low]},${arr[up]})`);
        low++
        up--
        flag = true
    }
    else if(sum>searchsum)
    {
        up--
    }
    else
    {
        low++
    }
}

!flag && console.log('No such pair');
