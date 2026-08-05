const fetchUsers=async()=>{
    try{
        const resp=await fetch("https://jsonplaceholder.typicode.com/users");
        if (!resp.ok)
            throw new Error(`HTTp error! status: ${resp.status}`);
            
        
        return resp.json();
    }catch(err){
        console.error("Error fetching users:", err);
        return [];      

    }   
}



const displayUsers=(users)=>{
    const container=document.getElementById("data-container");
    if (!container || !Array.isArray(users)) return;
    container.innerHTML="";
    users.forEach((user)=>{
        const p=document.createElement("p");
        p.innerText=` Name:${user.name}`;
        container.appendChild(p);
    })
}   

const displayEmails=(users)=>{
    const container=document.getElementById("email-container");
    if (!container || !Array.isArray(users)) return;
    container.innerHTML="";
    users.forEach((user)=>{
        const p=document.createElement("p");
        p.innerText=` Email:${user.email}`;
        container.appendChild(p);   

    })

}
const handleLoadNames=async()=>{
    const users=await fetchUsers();
    displayUsers(users);
}

const handleLoadEmails=async()=>{
    const users=await fetchUsers();
    displayEmails(users);
}


const handleLoadAll=async()=>{
    const users=await fetchUsers();
    displayUsers(users);
    displayEmails(users);
}
