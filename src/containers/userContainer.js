import { connect } from 'react-redux';
import Users from '../components/users';
import { fetchUsers, setUser } from '../store/userActions';

const mapStateToProps = (state) => ({
  data: state
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers())
    },
    setUser:(user) => {
      dispatch(setUser(user))
    }
  }
}

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users)

export default UsersContainer;