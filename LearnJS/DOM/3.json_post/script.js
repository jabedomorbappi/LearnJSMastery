const fetchPosts = async () => {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    return await resp.json();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return []; // Return empty array so callers get a consistent type
  }
};

function displayPosts(posts) {
  const container = document.getElementById("posts-container");

 

  if (!container || !Array.isArray(posts)) {
    console.error("Invalid posts data or container not found");
    return;
  }

  container.innerHTML = "";

  for (const post of posts) {
    const div = document.createElement("div");
    div.style.backgroundColor="tomato";
    div.style.margin="10px";
    div.style.padding="10px";
    div.style.borderRadius="10px";
    

    div.innerHTML = `
      <h2> Title: ${post.title}</h2>
      <p>Post: ${post.body}</p>
    `;
    container.appendChild(div);
  }
}

const loadposts = async () => {
  const posts = await fetchPosts();
  displayPosts(posts);
};