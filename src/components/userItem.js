import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  // Link,
} from "@mui/material";
import { Link } from 'react-router-dom';
import { setUser } from "../store/userActions";
import { useDispatch } from "react-redux";

const UserItem = (props) => {

  const dispatch = useDispatch();
  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: "400px", maxWidth: "700px" }}
    >
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.user?.map((u) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={u.id}
            >
              <TableCell>
                {/* <Link href={`/profile/${u.id}`} onClick={() => {setUser(u)}}> */}
                <Link to={`/profile/${u.id}`} onClick={() => dispatch(setUser(u))}>
                  {u.fname}
                  {u.lname}
                </Link>
              </TableCell>
              <TableCell>{u.dob}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserItem;
