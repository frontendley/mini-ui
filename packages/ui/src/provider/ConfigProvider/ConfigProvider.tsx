import {ReactNode} from "react";
import {ConfigContext} from "./context";

interface ConfigProviderProps {
  children?: ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  return <ConfigContext.Provider value={{}}>{children}</ConfigContext.Provider>
}