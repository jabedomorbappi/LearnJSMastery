




function displayData(){
    fetch("http://127.0.0.1:5500/api.txt").then(response=> response.text()).then(data=>{
        const dataContainer = document.getElementById("data-container");
        dataContainer.innerHTML = data;
    });
}