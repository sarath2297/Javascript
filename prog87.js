// prog to check whether location key is present or not

employee = {
    id:1000,
    name:'Sam',
    job:'developer',
    location:'kochi',
}
flag = false
for(let key in employee)
{
    if(key=='location')
    {
        flag = true
    }
}
console.log(flag?'Location is present':'Location is not present');

console.log(('location' in employee)?'Present':'Not Present');  // all in single line