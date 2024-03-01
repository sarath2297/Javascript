a = [10,5,2,13,58,1]

// prog to find the highest number
highest = a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(highest);

// prog to find the lowest number
lowest = a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(lowest);

// prog to find sum of all values in the array
sum = a.reduce((num1,num2)=>num1+num2)
console.log(sum);