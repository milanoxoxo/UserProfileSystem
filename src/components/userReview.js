import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Modal from "./Modal";

const dummy = [
  {
    address: "12 York Street, Toronto, ON, Canada",
    city: "Toronto",
    country: "Canada",
    dob: "9/27/1958",
    email: "heather.knight@example.com",
    fname: "Heather",
    gender: "female",
    id: "68040f46-3365-4472-9399-4544e6fdadc9",
    lname: "Knight",
    photo: "https://randomuser.me/api/portraits/thumb/women/20.jpg",
    postCode: "M5J 0A9",
    state: "Ontario",
  },
];

const UserReview = (values) => {
  const review = useSelector((state) => state.usersReviewReducer);
  const [imageUrl, setImageUrl] = useState(null);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (review.photo) {
      setImageUrl(URL.createObjectURL(review.photo));
    }
  }, [review.photo]);

  // const handleSubmit = () => {
  //   // dispatch(submitUser(true))
  //   // navigate('/submit')
  // };

  return (
    <div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      {!modalOpen && (
        <>
          <h2>Reivew</h2>
          <form>
            <Grid container spacing={2} margin={8}>
              <Grid item xs={6}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginLeft: "10rem",
                    // margin: "5rem",
                  }}
                >
                  <p>
                    {review.fname} {review.lname} from {review.country}{" "}
                  </p>
                  <h3>Details</h3>
                  <p>Gender: {review.gender}</p>
                  <p>Full Address: {review.address}</p>
                  <p>Date of Birth: {review.dob}</p>
                  <p>Email Address: {review.email}</p>
                </div>
              </Grid>
              <Grid item xs={6} alignItems={"flex-end"}>
                <img
                  src={imageUrl}
                  style={{
                    maxHeight: "20rem",
                    maxWidth: "20rem",
                    marginTop: "2rem",
                    marginRight: "10rem",
                  }}
                ></img>
              </Grid>
              <Grid container justifyContent={"center"}>
                <Button
                  className="openModalBtn"
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ width: "10rem", margin: "5rem" }}
                  onClick={() => setModalOpen(true)}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </>
      )}
    </div>
  );
};

export default UserReview;
