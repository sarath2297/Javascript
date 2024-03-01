// prog to create a new array with numbers <=13 - increament the number or if >13 - decrement the number

a = [10,11,12,13,14,15]

op = a.map((num)=>num<=13?num+1:num-1)

console.log(op);