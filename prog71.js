// prog to find the cube of each items in the given array

a = [10,11,12,13,14,15]

for(num of a )
{
    console.log(num**3);
}

console.log('---------------------------------');

a.forEach(item => { 
    console.log(item**3);
});

console.log('---------------------------------');

console.log(a.map((item1)=>item1**3));