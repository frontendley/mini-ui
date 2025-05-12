import { forwardRef } from "react";
import { UploadInstance, UploadProps } from "./interface";
import { Uploader } from "./Uploader";

import { classNames as cls } from "../../utils";

function Upload(props: UploadProps) {
  const {
    ...restProps
  } = props

  const classNames = cls()


  return (
    <div className={classNames}>
      <Uploader 
        {...restProps}
      />
    </div>
  )
}

const UploadRef = forwardRef<UploadInstance, UploadProps>(Upload)

UploadRef.displayName = "Upload"

export default UploadRef
