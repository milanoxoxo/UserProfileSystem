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
import { Link } from "react-router-dom";
import { setUser } from "../store/userActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

const UserItem = (props) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: "400px", maxWidth: "600px" }}
      style={{marginLeft:'22rem'}}
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
                <Link
                  to={`/profile/${u.id}`}
                  onClick={() => dispatch(setUser(u))}
                >
                  {u.fname}
                  {u.lname}
                </Link>
              </TableCell>
              <TableCell>{u.dob}</TableCell>
              <TableCell>
                <Tooltip title={u.email} placement="top" >
                <span className="table-cell-trucate">{u.email}</span>
                </Tooltip>
              </TableCell>
              <TableCell>{u.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserItem;
