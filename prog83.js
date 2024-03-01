// prog to print all vowels in the given string to an array without repeatting (Case sensitive)

str = 'Good Evening All'

vowels = ['a','e','i','o','u','A','E','I','O','U']
array = []


// characters = str.toLowerCase().split('')
// for(char of characters)
// {
//     if(vowels.includes(char)&& !array.includes(char))
//     {
//         array.push(char)
//     }
// }
// console.log(array);

a = Array.from(str.toLowerCase()).filter(item=>(vowels.includes(item) && !array.includes(item)) && array.push(item))
console.log(a);
