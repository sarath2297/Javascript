// prog to print duplicate from a given array 
// a = [10,20,30,20,30,40,50,60,10]

const arr = [10,20,30,200,300,40,50,60,10]
flag = false

for(i=0;i<arr.length;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        { 
            console.log(arr[i]);
            flag = true
        }
  
    }
}
if(flag==false)
{
    console.log('No Duplicate found');
}