import { useSportsContext } from "../context/sports.context";
import { Link } from "react-router-dom";

export default function Pizza() {
  const { user } = useSportsContext();
  return (
    <>
      <h2>{user} likes pizza</h2>
      <Link to="/">
        <button>Go back</button>
      </Link>
      <Link to="/profile">
        <button>Check out profile page</button>
      </Link>
    </>
  );
}
