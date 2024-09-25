import {createContext, useContext} from "react";
import {warning} from "../../utils";

const DEFAULT_CONFIG_CONTEXT = {}

export const ConfigContext = createContext(DEFAULT_CONFIG_CONTEXT)

export const useConfigContext = () => {
  const ctx = useContext(ConfigContext)

  if(!ctx) {
    warning(true, '@mini-ui can not find ConfigProvider in components tree, please check had import ConfigProvider')
  }

  return ctx
}

