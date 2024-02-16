// prog to print the following output for given input
// input    - 2  // 3   // 4
// output   - 24 // 369 // 4936

num = 5
output = 0
k=1

for(i=num;i>0;i--)
{
   
       output = output + (i * k)
       k = k * 10

}
output = output * num
console.log(output);

/* 

num =5
i = 1
p = 0
while(i<=num)
{
       p = p * 10 + (num*i)
       i++
}
consol.log(p)

*/

/*
pattern -> (5*12345)
num = 5
i = 1
str = ''
while(i<=num)
{
       str = str + 1
       i++
}
console.log(num*str) // datatype of output value will be number

*/

/*
pattern -> (3+33+333)
num = 3
i = 1
str = ''
sum = 0
while(i<=num)
{
       str = str + num
       sum = sum + Number(str)
       i++
}
console.log(sum)

*/