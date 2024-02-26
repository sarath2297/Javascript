// prog to find gcf/hcf of given two numbers

num1 = 5
num2 = 12

for(i=1;i<=num1;i++)
{
    if(num1%i==0 && num2%i==0)
    {
        hcf = i;
    }
}
console.log(hcf);