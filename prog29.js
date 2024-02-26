// prog to print all prime numbers between 2-50


for(num=2;num<99999999;num++)
{
    temp = 0;
    for(i=2;i<num;i++)
    {
     if(num%i==0)
      {
        temp++;
        break ;
      }
    }
    if(temp==0)
    {
        console.log(i);
    }
   
}