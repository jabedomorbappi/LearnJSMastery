const getGreeting=()=>{
    let time =Number(document.getElementById("timeInput").value);
    let greeing="";
    if (time<10)
{
    greeting="Good Morning"
}

else if (time<20)
{
    greeting="Good Day";

}

else{
    greeting="Good evening";
}

document.getElementById("greetingMessage").textContent = greeting;
}



