// Nested Function : closure property

function parent()
{
    const parentvariable = 'parent'
    console.log(`Variable inside parent function is : ${parentvariable}`);
    

    function child()
    {
        const childvariable = 'child'
        console.log(`Variable inside child function is : ${childvariable}`);
        console.log(`Variable inside parent function is : ${parentvariable}`);
    }
    child()
}

parent()