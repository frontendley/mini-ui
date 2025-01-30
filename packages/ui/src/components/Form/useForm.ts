import { useRef } from "react";
import { Store } from "./store";

function getInstance() {
  return new Store()
}

export function useForm(form?: Store) {
  const formRef = useRef(form)

  if(form) {
    formRef.current = form
  } else {
    formRef.current = getInstance() 
  }

  return formRef.current
}
