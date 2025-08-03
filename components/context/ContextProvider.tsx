import React, { createContext, useContext } from "react";
import {ReactNodeProps} from "@/interfaces/index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StateContext = createContext<any>(null);

export const ContextProvider: React.FC<ReactNodeProps> = ({ children }) => {
  return <StateContext.Provider value={{}}>{children}</StateContext.Provider>;
};

export const useSstateContext = () => useContext;
