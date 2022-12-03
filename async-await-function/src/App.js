import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';


const baseUrl = "https://jsonplaceholder.typicode.com/posts"



function App() {
  const [clicked, setClicked] = useState([]);


  const initial_data = async () => {
    try {
      const responseee = await fetch(baseUrl);
      const data = await responseee.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initial_data().then(resp => {
      setClicked(resp);
    })
  },[])

  return (
    <div className="App">
       <p>API</p>
       {clicked.map((data) => {
            return (
              <div className="item">
                <p>{data.id}</p>
                <p>{data.title}</p>
                <p>{data.body}</p>
              </div>
            );
          })}
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [data, setData] = useState([]);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((json) => {
//         setIsLoaded(!isLoaded);
//         setData(json);
//       });
//   }, []);
//   console.log(data);
//   return (
//     <div className="App">
//       {isLoaded ? (
//         <div>
//           {data.map((data) => {
//             return (
//               <div className="item">
//                 <p>{data.id}</p>
//                 <p>{data.name}</p>
//                 <p>{data.email}</p>
//                 <p>{data.address.city}</p>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <h1>Contet Still Loading...</h1>
//       )}
//     </div>
//   );
// }

// export default App;
