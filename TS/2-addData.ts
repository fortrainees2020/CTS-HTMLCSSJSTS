//function addnum(n1, n2)
function addnum(n1:number, n2:number)
    {return n1+n2;}

//const n1 = '10';
const n1 = 10;
const n2 = 20;
const res = addnum(n1 ,n2); //Compile time eror because of signature does not match due to passed value'10' 
console.log(res);

//const res1 = addnum1(n1,n2)














//With JS
function addnum1(n1:number, n2:number)
{
        if (typeof n1 != 'number' || typeof n2!=='number') //Explicit code to validat data type and get it in runtime
            throw new Error("Value must be a number");
        return n1+n2;
}