// find the lowest expense
// find the highest expense
// find the total expense

let expense = [12000,15000,34000,10000,4500,7000,55000]

lowest = expense[0]
highest = expense[0]
sum = 0
for(let num of expense)
{
    if(num<=lowest)
    {
        lowest = num
    }
    if(num>=highest)
    {
        highest = num
    }
    sum = sum + num
}

console.log(`Lowest : ${lowest}`);
console.log(`Highest : ${highest}`);
console.log(`Total : ${sum}`);