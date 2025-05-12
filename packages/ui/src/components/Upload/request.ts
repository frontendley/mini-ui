import { UploadRequestOptions } from "./interface"

function getBody(xhr: XMLHttpRequest) {
  const text = xhr.responseText || xhr.response

  if(!text)
    return Text

  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}

export function uploadRequest(options: UploadRequestOptions) {
  const {
    file,
    method,
    action,
    onProgress,
    onSuccess,
    onError
  } = options;


  const xhr = new XMLHttpRequest()

  xhr.onprogress = function progress (event: ProgressEvent<EventTarget>) {
    onProgress?.(1, event)
  }

  xhr.onload = function onload () {
    if(xhr.status < 200 || xhr.status >= 300) {
      onError(getBody(xhr))
    }
    onSuccess?.(getBody(xhr))
  } 
  
  const data = new FormData()

  data.append('file', file)

  xhr.open(method, action, true)
  xhr.send(data)

  return {
    abort: xhr.abort
  }
}
