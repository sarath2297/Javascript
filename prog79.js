//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
    console.log('District having Highest +ve case');
    highest_case = covid.reduce((a,b)=>a[2]>b[2]?a:b)
    console.log(highest_case[1]);
    console.log('-------------------------------------');
//2. district having Highest 1st dose vaccine
    console.log('District having Highest 1st dose vaccine');
    highest_1stdose = covid.reduce((a,b)=>a[5]>b[5]?a:b)
    console.log(highest_1stdose[1]);
    console.log('-------------------------------------');

//3. district having lowest death rate
    console.log('District having lowest death rate');
    lowest_death = covid.reduce((a,b)=>a[3]<b[3]?a:b)
    console.log(lowest_death[1]);
    console.log('-------------------------------------');

//4. sort data with +ve case in descending order
    console.log('Data with +ve case in descending order');
    covid.sort((a,b)=>b[2]-a[2]).forEach(item=>console.log(item))
    console.log('-------------------------------------');

//5. is district with +ve cases > 15000
    console.log('is district with +ve cases > 15000');
    console.log(covid.some(item=>item[2]>15000)?'Yes':'No');
    console.log('-------------------------------------');

//6. sort data with 1st dose vaccine ascending order
    console.log('sort data with 1st dose vaccine ascending order');
    covid.sort((a,b)=>a[5]-b[5]).forEach(item=>console.log(item))
    console.log('-------------------------------------');

//7. Print Thrissur details
    console.log('Thrissur details');
    thrissur = covid.find(item=>item[1]=='Thrissur')
    console.log(thrissur);
    console.log('-------------------------------------');

//8. Print total number of positive cases
    console.log('total number of positive cases');
    total_pos_case = covid.map(item=>item[2]).reduce((a,b)=>a+b)
    console.log(total_pos_case);
    console.log('-------------------------------------');
    
//9. Print total number of curred cases
    console.log('total number of curred cases');
    total_pos_case = covid.map(item=>item[4]).reduce((a,b)=>a+b)
    console.log(total_pos_case);
    console.log('-------------------------------------');

//10. Print curred cases in Idukki
    console.log('curred cases in Idukki');
    idukki = covid.find(item=>item[1]=='Idukki')
    console.log(idukki[4]);
    console.log('-------------------------------------');