import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import useAuthContext from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Navigate to="/home" /> : <Signin />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/home" /> : <Signup />}
          />
          <Route
            path="/home"
            element={authUser ? <Home /> : <Navigate to={"/"} />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
