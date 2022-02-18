import { createContext, useState } from "react";

import { condition } from "./condition";
export const GlobalContext = createContext(condition);

export default function AppContext({ children }: any) {
  const [value, setValue] = useState(condition);
  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  );
}
