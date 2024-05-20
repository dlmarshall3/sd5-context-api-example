import { createContext, useContext, useState } from "react";

const SportsContext = createContext();

export default function SportsStorage({ children }) {
  const [sports, setSports] = useState("");
  const [user, setUser] = useState("");

  return (
    <SportsContext.Provider value={{ sports, setSports, user, setUser }}>
      {children}
    </SportsContext.Provider>
  );
}

export function useSportsContext() {
  return useContext(SportsContext);
}
