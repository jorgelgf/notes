import { createContext, useState } from "react";
const initialState: any = {};

export const GlobalContext = createContext(initialState);

export default function AppContext(props: any) {
  const [state, setState] = useState(initialState);
  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {props.children}
    </GlobalContext.Provider>
  );
}
