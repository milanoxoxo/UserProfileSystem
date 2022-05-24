import "./App.css";
import {
  Route,
  Routes,
} from "react-router-dom";

import Profile from "./components/userProfile";
import Users from "./components/users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Users/>}></Route>
        <Route path="profile/:id" element={<Profile/>}></Route>

        {/* <Users></Users> */}
      </Routes>
    </div>
  );
}

export default App;
