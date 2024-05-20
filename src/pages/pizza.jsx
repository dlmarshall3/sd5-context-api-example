import { useSportsContext } from "../context/sports.context";

export default function Pizza() {
  const { user } = useSportsContext();
  return <h2>{user} likes pizza</h2>;
}
