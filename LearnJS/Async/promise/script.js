fetch("fetch.txt").
then((response) => response.text())
.then(function(data) {
    myDisplay(data);

})
.catch(function(error) {
    myDisplay("Error: " + error);
});

function myDisplay(data){
    document.getElementById("demo").innerHTML = data;
}



const checkInventory=(item)=>{
    return new Promise((resolve,reject) =>    {
        console.log("Checking inventory for "+ item);
        setTimeout(() => {
            const stock={shoes:4,hates:0,shirts:10,socks:2};
            if (stock[item]>0){
                resolve({ item, count: stock[item], status: 'In Stock' });

            }
            else{
                reject( new Error (`Out of stock for item:${stock[item]}`));
            }

    },2000);
});
}

console.log("This is call before check inventory");


checkInventory("shoes")
.then((data)=>{
    console.log("success: "+data);
    return data.count*50;

})
.then((total_price)=>{
    console.log(`Calculated total price: ${total_price}`);

})
.catch((error)=>{
    console.log("Error: "+error.message);
})
.finally(()=>{
    console.log(`operation finished . clearning up resources ...`)
})
console.log("This is call after check inventory");
