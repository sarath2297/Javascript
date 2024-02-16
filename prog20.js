// prog to check whether the given number is palindrom or not

num = 12121212
n = num
str = ''
while(num>0)
{
    str = str + num%10
    num = Math.floor(num/10)
}
console.log(str==n?'Palindrom':'Not Palindrom');