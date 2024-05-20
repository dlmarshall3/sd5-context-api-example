import { useSportsContext } from "../context/sports.context";

import { useNavigate, Link } from "react-router-dom";

export default function Dashboard() {
  const { user, setUser } = useSportsContext();

  return (
    <>
      <h1>Dashboard</h1>
      <input type="text" onChange={() => setUser(event.target.value)} />
      <Link to="/profile">
        <button>Navigate</button>
      </Link>
      <Link to="/pizza">
        <button>MMMMMMMM</button>
      </Link>
    </>
  );
}
