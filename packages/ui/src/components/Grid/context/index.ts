import { createContext, useContext } from "react"
import { IRowContext } from "../interface"

const defaulRowContext: IRowContext = {
  gutter: [0, 0]
}

const RowContext = createContext<IRowContext>(defaulRowContext)

export const RowProvider = RowContext.Provider

export const useRowContext = () => {
  return useContext(RowContext)
}