import React, { useEffect, useState } from "react";
import { fetchUsers, setUser } from "../store/userActions";
// import fetchUsers from "../store/userActions";
import UserItem from "./userItem";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

const Users = () => {
  // constructor(props) {
  //   super(props);
  // }
  const [userValue, setUserValue] = useState({});
  const dispatch = useDispatch();
  const data = useSelector((state) => state.usersReducer.users);
  console.log(data);

  const fetchData = () => {
    try {
      fetch("https://randomuser.me/api/?results=15")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const userData = [];
          data.results.map((d) => {
            const res = {
              id: d.login.uuid,
              fname: d.name.first,
              lname: d.name.last,
              dob: new Date(d.dob.date).toLocaleDateString(),
              email: d.email,
              gender: d.gender,
              photo: "",
              address: "",
              city: "",
              state: "",
              postCode: "",
              country: "",
            };
            userData.push(res);
            window.localStorage.setItem("1", JSON.stringify(userData));
          });
          dispatch(fetchUsers(userData));
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Button
        text={"Fetch Users"}
        onClick={fetchData}
        variant="contained"
        color="primary"
      >
        Fetch Users
      </Button>
      <UserItem user={data} style={{marginLeft:'30rem'}}></UserItem>
    </div>
  );
  // }
};

export default Users;
