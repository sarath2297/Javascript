// prog to check if a number is positive or negative using arrow function

const check = (num)=>
{
    return num>0?'Positive':num<0?'Negative':'Not Positive or Negative'
}

console.log(check(7));