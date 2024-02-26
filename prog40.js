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