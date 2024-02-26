//Nested array
// prog to print num greater than 25

arr = [[2,45],[5,56],[3,12],[26,4]]

for(num of arr)
{
    for(value of num)
    {
        if(value>25)
        {
            console.log(value);
        }
    }
}
