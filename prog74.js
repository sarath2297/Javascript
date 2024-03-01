// prog to print all even numbers in the given array

a = [10,5,2,13,58,1]

even = a.filter((num)=>num%2==0)
console.log(even);

// prog to print numbers greater than 10
console.log(a.filter((num1)=>num1>10));

// prog to print if there is any number greater than 10
console.log(a.some((num)=>num>10)?'YES':'NO');