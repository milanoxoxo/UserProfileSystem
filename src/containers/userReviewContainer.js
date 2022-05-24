import { connect } from "react-redux";
import UserReview from "../components/userReview";

const mapStateToProps = (state) => ({
  userReview: state.userReviewReducer,
});

const UserReviewContainer = connect(mapStateToProps)(UserReview);

export default UserReviewContainer;