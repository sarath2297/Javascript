const num = [1,3,5,7,9,11,13,15]

for(i=0;i<num.length;i++)
{
    console.log(num[i]);
}

// for in method

for(j in num)
{
    console.log(num[j]);
}

console.log('---------');

for(k of num)
{
    console.log(k);
}