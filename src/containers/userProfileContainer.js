import { connect } from "react-redux";
import UserProfile from "../components/userProfile";

const mapStateToProps = (state) => ({
  userProfile: state.userProfileReducer,
});

const UserProfileContainer = connect(mapStateToProps)(UserProfile);

export default UserProfileContainer;
