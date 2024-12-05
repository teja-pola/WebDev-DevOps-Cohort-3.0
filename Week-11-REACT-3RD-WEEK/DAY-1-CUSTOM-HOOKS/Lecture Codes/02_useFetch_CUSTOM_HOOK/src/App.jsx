// // Method 1: Handling everything (including fetching data) within the App function itself

// import { useEffect, useState } from "react";

// function App() {

//   // State to store the fetched post data
//   const [post, setPost] = useState({});

//   // Function to fetch the post data from the API
//   async function getPost() {

//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // Make an API call
//     const json = await response.json(); // Convert the response to JSON
//     setPost(json); // Update the state with the fetched data
//   }

//   // useEffect to run the fetch function when the component mounts
//   // We could have fetched data directly here, but async-await cannot be used directly in useEffect.
//   // Therefore, a separate function is created and called here.
//   useEffect(() => {

//     getPost();
//   }, []); // Empty dependency array ensures this runs only once after the component mounts

//   // Return JSX to display the title from the fetched post
//   return (
//     <>
//       <h2>{post.title}</h2>
//     </>
//   );
// }

// export default App;




// Method - 2: Using a custom Hook to handle data fetching

import { usePostTitle } from "./hooks/useFetch"; // Importing the custom hook for fetching post title

function App() {
  // Calling the custom hook to fetch the post title
  const postTitle = usePostTitle();

  return (
    <>
      <h2>{postTitle} </h2>{/* Display the fetched post title */}
    </>
  );
}

export default App;






