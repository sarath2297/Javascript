// object

employee = {
    id:1000,
    name:'Sam',
    job:'developer',
    location:'kochi',
}
console.log(employee);
console.log(employee["job"]);      // first way to access object value - will not work if keyvalue is changing 
console.log(employee.job);         // second way to access object value - will work all time
employee["salary"]=300000          // adding data(key:value pair) to an object
Object.assign(employee,{'exp':3})  // adding data(key:value pair) to an object new method
console.log(employee);