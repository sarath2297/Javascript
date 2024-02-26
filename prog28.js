// prog to check whether if a given number is prime or not

num = 5
temp = 0
for(i=2;i<num;i++)
{
    if(num%i==0)
    {
      temp++;
      break ;
    }
}

console.log(temp==0?"Prime":"Not Prime");