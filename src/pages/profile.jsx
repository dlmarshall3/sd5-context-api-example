import { useSportsContext } from "../context/sports.context";

export default function Profile() {
  const { user } = useSportsContext();
  return <h2>{user}</h2>;
}
