import "./App.css";
import {
  Route,
  Routes,
} from "react-router-dom";

import Profile from "./components/userProfile";
import Users from "./components/users";
import UserReview from "./components/userReview";
import Success from "./components/success";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Users/>}></Route>
        <Route path="profile/:id" element={<Profile/>}></Route>
        <Route path="review" element={<UserReview/>}></Route>
        <Route path="success" element={<Success/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
