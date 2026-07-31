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

const box = document.getElementById("box");

box.addEventListener("mouseover", function() {
    box.innerHTML = "Mouse is over me!";
    box.style.backgroundColor = "red"; // Use camelCase and string quotes
});

box.addEventListener("mouseout",function(){
    box.innerHTML="Mouse  is out!";
    box.style.backgroundColor = "black";
    box.style.color="white" 
})

document.addEventListener("mousemove",function(event){
    document.getElementById("move").innerHTML="X: "+event.clientX +"Y: "+event.clientY;
});
  


const k=document.getElementById("k");
k.addEventListener("keydown",function(event){
    document.getElementById("kk").innerHTML="you pressed : "+event.key;
})

const addBtn = document.getElementById("add");
    const removeBtn = document.getElementById("remove");
    const testBtn = document.getElementById("test");
    const output = document.getElementById("removetest");

    // 2. Define the handler function
    function displayMessage() {
      output.innerText = "Hello! The event listener is active.";
    }

    // 3. Attach event to the "Add" button
    addBtn.addEventListener("click", function () {
      testBtn.addEventListener("click", displayMessage);
      output.innerText = "Event listener added to 'Test Click'.";
    });

    // 4. Attach event to the "Remove" button
    removeBtn.addEventListener("click", function () {
      testBtn.removeEventListener("click", displayMessage);
      output.innerText = "Event listener removed from 'Test Click'.";
    });



    function upperCase(){
        const x=document.getElementById("fname");
        x.value=x.value.toUpperCase();
    }

    function uppercase(){
        const x=document.getElementById("Fname");
        x.value=x.value.toUpperCase();
    }