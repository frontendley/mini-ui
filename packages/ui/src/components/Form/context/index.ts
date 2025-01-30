import { createContext, useContext } from "react";
import { FormContextType } from "../interface";

const defaultFormContext: FormContextType = {
}

const FormContext = createContext<FormContextType>(defaultFormContext)

export const FromProvider = FormContext.Provider

export function useFormContext () {
  return useContext(FormContext)
}
