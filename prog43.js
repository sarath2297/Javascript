for(row=1;row<=8;row++)
{
    str = ''
    for(col=1;col<=5;col++)
    {
        if(row==1 || row==8 || col==1 || col==5)
        {
            str = str + ' *'
        }
        else
        {
            str = str + '  '
        }
    }
    console.log(str);
}