// object

employee = {
    id:1000,
    name:'Sam',
    job:'developer',
    location:'kochi',
}
console.log(employee);
console.log(employee["job"]);      // first way to access object value -> key may be variable or exact
console.log(employee.job);         // second way to access object value -> should be exact key(same key in object)
employee["salary"]=300000          // adding data(key:value pair) to an object
Object.assign(employee,{'exp':3})  // adding data(key:value pair) to an object new method
console.log(employee);
Object.assign(employee,{isvacinated:true})
console.log(employee);
delete employee.isvacinated        // delete an item from the object
console.log(employee);
employee["name"]='Sam John'        // update an item
console.log(employee);
employee["exp"]+=3
console.log(employee);             // increment an item
for(let key in employee)           // in is used to access key in an object
{
    console.log(key);
}
