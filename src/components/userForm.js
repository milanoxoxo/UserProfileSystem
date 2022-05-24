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
import UserForm from "./userForm";
import React from "react";

const UserProfileForm = React.forwardRef(
  (
    { handleChange, handleChangeDate, handleChangePhoto, handleSubmit, values },
    ref
  ) => {
    return (
      <form style={{ margin: "4rem" }} onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="First Name"
              name="fname"
              value={values.fname}
              onChange={handleChange}
              sx={{ m: 2, width: "90%" }}
            />
            <TextField
              variant="outlined"
              label="Last Name"
              name="lname"
              value={values.lname}
              onChange={handleChange}
              sx={{ m: 2, width: "90%" }}
            />
            <TextField
              variant="outlined"
              label="Email Address"
              name="email"
              value={values.email}
              onChange={handleChange}
              sx={{ m: 2, width: "90%" }}
            />
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row={true}
                name="gender"
                value={values.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="others"
                  control={<Radio />}
                  label="Others"
                />
              </RadioGroup>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack marginTop={4} marginLeft={2} width="90%">
                <DesktopDatePicker
                  label="Date of Birth(YYYY-MM-DD)"
                  inputFormat="MM/dd/yyyy"
                  name="dob"
                  value={values.dob}
                  onChange={handleChangeDate}
                  //   sx={{ m: 2, width: "30ch" }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              marginTop={4}
              marginLeft={2}
            >
              {/* <Button variant="contained" component="label">
                Upload File
                <input
                  style={{ display: "none" }}
                  type="file"
                  name="photo"
                  accept="image/*"
                  hidden
                  onChange={handleChange}
                />
              </Button> */}
              <input
                accept="image/*"
                type="file"
                id="select-image"
                style={{ display: "none" }}
                onChange={handleChangePhoto}
              />
              <label htmlFor="select-image">
                <Button variant="contained" color="primary" component="span">
                  Upload Image
                </Button>
              </label>
              <p>
                {console.log(values.photo)}
                {console.log(values.photo.name)}
                {values.photo ? values.photo.name : "No file chosen"}
              </p>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="addressAutocompleteField"
              variant="outlined"
              label="Address"
              name="address"
              //   value={values.address}
              //   onChange={handleChange}
              inputRef={ref}
              sx={{ m: 2, width: "90%" }}
            />
            <TextField
              variant="outlined"
              label="City"
              name="city"
              value={values.city}
              onChange={handleChange}
              sx={{ m: 2, width: "90%" }}
            />
            <TextField
              variant="outlined"
              label="State"
              name="state"
              value={values.state}
              onChange={handleChange}
              sx={{ m: 2, width: "90%" }}
            />
            <TextField
              variant="outlined"
              label="postalCode"
              name="postCode"
              value={values.postCode}
              onChange={handleChange}
              sx={{ m: 2, width: "90%" }}
            />
            <TextField
              variant="outlined"
              label="Country"
              name="country"
              value={values.country}
              onChange={handleChange}
              sx={{ m: 2, width: "90%" }}
            />
          </Grid>
          <Grid container justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ float: "right", width: "10rem", marginRight: "1rem" }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
);

export default UserProfileForm;
