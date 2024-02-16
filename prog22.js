// prog to check if a given 3 digit number is armstrong or not
// 153 = 1**3 + 5**3 + 3**3 = 153

num = 153
sum = 0
temp = num
while(num>0)
{
   sum = sum + (num%10)**3
   num = parseInt(num/10)
}
console.log(temp==sum?'Armstrong':'Not Armstrong');
