// prog to find the second largest number from the given three numbers and sort the given 3 numbers in descending order

x = 1000
y = 10
z = 100

if(x>y && x>z)
{
    if(y>z)
    {
        console.log(`${y} is the second largest number`);
        console.log(`Sorted : ${x},${y},${z}`);
    }
    else
    {
        console.log(`${z} is the second largest number`);
        console.log(`Sorted : ${x},${z},${y}`);
    }
}
else if(y>x && y>z)
{
    if(x>z)
    {
        console.log(`${x} is the second largest number`);
        console.log(`Sorted : ${y},${x},${z}`);
    }
    else
    {
        console.log(`${z} is the second largest number`);
        console.log(`Sorted : ${y},${z},${x}`);
    }
}
else
{
    if(x>y)
    {
        console.log(`${x} is the second largest number`);
        console.log(`Sorted : ${z},${x},${y}`);
    }
    else
    {
        console.log(`${y} is the second largest number`);
        console.log(`Sorted : ${z},${y},${x}`);
    }
}
