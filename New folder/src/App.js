import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";

const baseUrl = "https://course-api.com/react-useReducer-cart-project";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        setPosts(response.data);
        setIsLoaded(!isLoaded);
      })
      .catch((error) => console.log(error));
  }, []);

  const postData = (e) => {
    e.preventDefault();
    axios
      .post(baseUrl, { title, body })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const deleteHandler = (id, e) => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  const editHandler = (id, e) => {
    axios
      .patch(`${baseUrl}/${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  if (!isLoaded) {
    return <h1>Content is Still Loading...</h1>;
  } else {
    return (
      <div className="App">
        <form>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Body</label>
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button onClick={postData}>POST</button>
        </form>
        {posts.map((post) => {
          return (
            <div className="container">
              <h1>{post.title}</h1>
              <h3>{post.price}</h3>
              <img src={post.img} />
              <button onClick={(e) => deleteHandler(post.id)}>Delete</button>
              <button onClick={(e) => editHandler(post.id)}>Edit</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
