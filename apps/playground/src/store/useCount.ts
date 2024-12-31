import { create } from "@mini/zustand";

interface ICountStore {
  count: number,
  inc: () => void
}

export const useCount = create<ICountStore>((set) => {
  return {
    count: 1,
    inc: () => {
      set(state => {
        return {
          ...state,
          count: state.count + 1
        }
      })
    }
  }
})