const fetchComments=async ()=>{
    try{
        const resp=await fetch('https://jsonplaceholder.typicode.com/comments');
        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }
        return resp.json();
    }catch(err){
        console.error('Error fetching comments:', err);
        throw [];
    }
}

const displayComments= (comments) => {
    const commentsContainer=document.getElementById('container');
    if (!commentsContainer || !Array.isArray(comments)) {
        console.error('Invalid comments data');
        return;
    }

    commentsContainer.innerHTML='';
    for (const comment of comments){
        const commentDiv=document.createElement('div');
        commentDiv.style.backgroundColor='lightgray';
        commentDiv.style.margin='10px';
        commentDiv.style.padding='10px';
        commentDiv.style.borderRadius='10px';
        
        commentDiv.innerHTML=`
        <h3> comment ID: ${comment.id}</h3>
        <p> Name: ${comment.name}</p>
        <p> Email: ${comment.email}</p>
        <p> Body: ${comment.body}</p>
        `;
        commentsContainer.appendChild(commentDiv);  

    }   
}
const commentloads=async()=>{
    const comments=await fetchComments();
    displayComments(comments);
}
