//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log('All Product Names :');
products.forEach(element => { console.log(element[1]);});
console.log('-----------------------------------------');
//2. display product whose price < Rs.50
console.log('Product whose price < Rs.50 :');
products.filter(price => price[2]<50).forEach(item => console.log(item))
console.log('-----------------------------------------');

//3. print price of oreo
console.log('Price of oreo : ');
products.filter(item => item[1]=='oreo').forEach(item2=>console.log(item2[2]))
console.log('-----------------------------------------');

//4. print costly product name
console.log('Costly product is :');
costly = products.reduce((num1,num2)=>num1[2]>num2[2]?num1[1]:num2[1])
console.log(costly);
console.log('-----------------------------------------');

//5. display out of stock product
console.log('Out of stock product');
products.filter(item => item[3]==0).forEach(item2=> console.log(item2))
console.log('-----------------------------------------');

//6. sort products based on stock in decsending order
console.log('sort products based on stock in decsending order');
products.sort((pro1,pro2)=> pro2[3]-pro1[3]).forEach(item=>console.log(item[1]))
console.log('-----------------------------------------');

//7. print product having maximum available stock
console.log('product having maximum available stock :');
maxstock = products.reduce((num1,num2)=>num1[3]>num2[3]?num1:num2)
console.log(maxstock[1]);
console.log('-----------------------------------------');

//8. is there any product can be purchased by Rs. 10
console.log('is there any product can be purchased by Rs. 10');
console.log(products.some(item => item[2]<=10)?'Yes':'No');
console.log('-----------------------------------------');


//9. Is there any product in the range of 10 to 30
console.log('Is there any product in the range of 10 to 30');
console.log(products.some(item => item[2]>=10 && item[2]<=30)?'Yes':'No');
console.log('-----------------------------------------');

//10. print all products in the range of 10 to 30
console.log('all products in the range of 10 to 30');
products.filter(item=> item[2]>=10 && item[2]<=30).forEach(data=>console.log(data[1]))
