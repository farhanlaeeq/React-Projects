import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setIsLoaded(!isLoaded);
        setData(json);
      });
  }, []);

  return (
    <div className="App">
      {isLoaded ? (
        <div>
          {data.map((data) => {
            return (
              <div className="item">
                <p>{data.id}</p>
                <p>{data.name}</p>
                <p>{data.email}</p>
                <p>{data.address.city}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>Contet Still Loading...</h1>
      )}
    </div>
  );
}

export default App;
