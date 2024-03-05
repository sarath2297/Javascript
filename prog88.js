// prog to check whether gender is present in the object employee, if present print present else add new key as gender with value as Male

employee = {
    id:1000,
    name:'Sam',
    job:'developer',
    location:'kochi',
}

'gender' in employee?console.log('Gender is present'):(console.log('Gender not present....Adding '),employee["gender"]='Male',console.log(employee));
'gender' in employee?console.log('Gender is present'):(console.log('Gender not present....Adding '),employee["gender"]='Male',console.log(employee));

