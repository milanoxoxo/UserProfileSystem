import React, { useEffect } from "react";
import { fetchUsers, setUser } from "../store/userActions";
// import fetchUsers from "../store/userActions";
import UserItem from "./userItem";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  // constructor(props) {
  //   super(props);
  // }
  const dispatch = useDispatch();
  const data = useSelector((state) => state.usersReducer.users);
  console.log(data);

  useEffect(() => {
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
              id:d.login.uuid,
              fname: d.name.first,
              lname: d.name.last,
              dob: new Date(d.dob.date).toLocaleDateString(),
              email: d.email,
              gender: d.gender,
              photo:'',
              address:'',
              city:'',
              state:'',
              postCode:'',
              country:'',
            };
            userData.push(res);
          });
          dispatch(fetchUsers(userData));
        });
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  // render() {
  // const { data, fetchUsers } = this.props;
  return (
    <div className="container">
      {/* <button
        onClick={fetchUsers}
        text={"Fetch Users"}
        className={"btn btn-blue"}
      /> */}
      {/* <div id={"users"}>
        {data.users.map((user, i) => {
          return <UserItem user={data} />;
        })}
      </div> */}
      <UserItem user = {data}></UserItem>
    </div>
  );
  // }
};

export default Users;
