import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { userSelector } from "./features/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "./features/userSlice";

function App() {
  const userList = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="App">
      {userList.map((user) => {
        return (
          <div className="user-details">
            <p>User ID : {user.id}</p>
            <p>Username : {user.name}</p>
            <p>Email : {user.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
