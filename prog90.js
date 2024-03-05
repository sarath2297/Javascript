// prog to find the word count in the given text
// text ='hai hello all hello world all'
// op={hai:1,hello:2,all:2,world:1}

text ='hai hello all hello world all'
obj = { }
words = text.split(' ')
for(word of words)
{
    // if(word in obj)
    // {
    //     obj[word]+=1
    // }
    // else
    // {
    //     obj[word]=1
    // }
    word in obj?obj[word]+=1:obj[word]=1
}
console.log(obj);

console.log('--------------------------');
wc = {}
text.split(' ').forEach(item=>item in wc?wc[item]+=1:wc[item]=1)
console.log(wc);


