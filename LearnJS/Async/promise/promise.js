
// status=true
// let mypromsie=new Promise((resolve,reject)=>{
//     if (!status)
//     {
//         resolve("success");
//     }
//     else{
//         reject("failure");
//     }
// })


// mypromsie.
// then(result=>{
//     console.log(result)
// })
// .catch(error=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("finished")
// })


// console.log("cooking analogy to understand the await");




console.log("1. Program starts");

async function loadData() {
  console.log("2. loadData function starts running");
  
  // Here is where the magic happens!
  const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
  
  // --- EVERYTHING BELOW THIS LINE IS PAUSED ---
  console.log("4. API finished! Here is the data:", response);
}

// We call the function
loadData();

console.log("3. The rest of the program keeps running!");