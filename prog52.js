// callback functions

function greet(name)
{
    console.log(`Hei ${name}`);
    child()
}

function child()
{
    console.log('inside the child function');
}

greet('Peter')