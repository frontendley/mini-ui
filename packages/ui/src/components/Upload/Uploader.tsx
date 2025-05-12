import { ChangeEvent } from "react"
import { UploadItem } from "./interface"
import { uploadRequest } from "./request"

export function Uploader () {


  function doUploadFile(file: UploadItem) {

    function onProgress () {

    }

    function onSuccess () {

    }

    function onError() {

    }
    const option = {
      file: file.file,
      method: "post",
      action: "http://127.0.0.1:8000/upload",
      onSuccess,
      onProgress,
      onError
    }

    uploadRequest(option)
  }

  function handleFile (files: File[]) {
    const asyncUpload = async (file: File, index: number) => {
      const uploadItem: UploadItem = {
        uid: `${new Date()}-${index}`,
        file: file
      }

      setTimeout(() => {
        doUploadFile(uploadItem)
      }, 0)
    }


    files.forEach((file, index) => {
      asyncUpload(file, index)
    })
    
  }

  return (
    <input 
      type="file" 
      multiple={true}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(files)
          handleFile([].slice.call(files))
      }}   
    />
  )
}
