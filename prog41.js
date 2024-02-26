/*
      *
     * *
    * * *
   * * * *
    * * *
     * *
      * 
 */
num = 4
s = num-1
for(i=1;i<=num;i++)
{
    str = ''
    for(sp=num;sp>=i;sp--)
    {
        str = str + ' '
    }
    for(j=1;j<=i;j++)
    {
       str = str + ' *'

    }
    console.log(str);
}

for(j=1;j<=num-1;j++)
{
   str = ' '
   for(k=1;k<=j;k++)
   {
    str = str + ' '
   }
   for(l=num-j;l>=1;l--)
   {
    str = str + ' *'
   }
   console.log(str);

}