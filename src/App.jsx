import "./App.css";
import SportsStorage from "./context/sports.context";
import Dashboard from "./pages/dashboard";
import Pizza from "./pages/pizza";
import Profile from "./pages/profile";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/pizza" element={<Pizza />}></Route>
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <SportsStorage>
      <App />
    </SportsStorage>
  );
}

export default AppWrapper;
