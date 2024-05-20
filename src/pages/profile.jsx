import { useSportsContext } from "../context/sports.context";

import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useSportsContext();
  return (
    <>
      <h2>Username: {user}</h2>
      <Link to="/">
        <button>Go back</button>
      </Link>
      <Link to="/pizza">
        <button>Check out pizza page</button>
      </Link>
    </>
  );
}
