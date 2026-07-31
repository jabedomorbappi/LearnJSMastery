function greet(name,callback)
{
    callback("heelo "+name)
}


function display(message){
    document.getElementById("demo").innerHTML=message;
}

greet("jabed",display)


function calculate(x,y,operation){
    return operation(x,y)
}


function add(a,b)
{
    return a+b;
}

let result=calculate(5,3,add);
console.log(result);


setTimeout(function()
{myDisplayer("Finished!")},3000)
function myDisplayer(text){
    document.getElementById("async").innerHTML=text;
    
}