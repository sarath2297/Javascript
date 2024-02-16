// prog to print a number in reverse order

num = 12345
str = ''
while(num>0)
{
  str = str + num%10
  num = Math.floor(num/10)
}
console.log(Number(str));
