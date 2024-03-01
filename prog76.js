//Array operations

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
console.log('Names of employees :');
employee.forEach(element => {console.log(element[1])});

//print total numbers of employee
console.log('----------------------');
console.log(`Total number of employees : ${employee.length}`);


//print developer employee details
console.log('----------------------');
console.log('Developer Employee Details');
employee.filter(item => item[2]=='developer').forEach(data=>console.log(data))


//print employee whose salary > 30000
console.log('----------------------');
console.log('Employee whose salary > 30000');
employee.filter(item => item[4]>30000).forEach(salary => console.log(salary))


// print details of employee Laisha
console.log('----------------------');
console.log('Employee details of Laisha');
console.log(employee.find(names=>names[1]=='Laisha'));

//print the employ name whose have the higest salary
console.log('----------------------');
console.log('Employee name who have the higest salary');
highestsal = employee.reduce((a,b)=>a[4]>b[4]?a:b)
console.log(highestsal[1]);

//print the employ name whose have the lowest salary
console.log('----------------------');
console.log('Employee name who have the lowest salary');
lowestsal = employee.reduce((a,b)=>a[4]>b[4]?b:a)
console.log(lowestsal[1]);

//print the total salary expense of the company
console.log('----------------------');
console.log('Total salary expense of the company :');
totalexp = employee.map(item=>item[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(totalexp);


