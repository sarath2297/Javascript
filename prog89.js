var car ={
    name:"boleno",
    model:"hatch back",
    manufacturer:"maruti",
    price:"10 lakh"
}

//display car name and its manufacturer name and price
console.log('Display car name and its manufacturer name and price');
console.log(`Car Name :${car.name}`);
console.log(`Manufacturer :${car.manufacturer}`);
console.log(`Price :${car.price}`);
console.log('----------------------------------');

//check model key is available in car, if yes then display its value
console.log('check model key is available in car, if yes then display its value');
'model' in car ?console.log(`Model : ${car.model}`):console.log('Model is not available');
console.log('----------------------------------');

//add "varient" key to car with value as "manuel"
console.log('add "varient" key to car with value as "manuel"');
car["varient"]=['manuel']
console.log(car);
console.log('----------------------------------');

//insert another value to "varient" key to car with value as "automatic"
console.log('insert another value to "varient" key to car with value as "automatic"');
car["varient"].push("automatic")
console.log(car);
console.log('----------------------------------');

//add "colour" key to car with value as "red","white","blue"
console.log('add "colour" key to car with value as "red","white","blue"');
car["color"]=['red','white','blue']
console.log(car);
console.log('----------------------------------');