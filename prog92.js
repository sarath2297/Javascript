// prog to find the first reccursive letter
pattern = 'ABCBACCBAA'
characters = Array.from(pattern)
obj = {}

for(let char of characters)
{
    if(char in obj)
    {
        console.log(`First recursive letter is : ${char}`);
        break
    }
    else
    {
        obj[char]=1
    }

}