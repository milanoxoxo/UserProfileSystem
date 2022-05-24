import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  RadioGroup,
  TextField,
  Radio,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import UserProfileForm from "./userForm";

const UserProfile = (props) => {
  const profile = useSelector((state) => state.usersProfileReducer);
  //   console.log(profile);

  const [values, setValues] = useState(profile);
  //   console.log(values);

  const handleChange = (e) => {
    console.log(e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleChangeDate = (newValue) => {
    setValues({ ...values, dob: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div>
      <UserProfileForm
        handleChange={handleChange}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
        values={values}
      ></UserProfileForm>
    </div>
  );
};

export default UserProfile;
