import { ChangeEvent, HTMLAttributes } from "react";

export interface UploadItem {
  /**
   * @zh 文件的唯一标识
   * */ 
  uid: string;
  /**
   * @zh 上传的文件
   * */ 
  file: File;

}

export interface UploadProps extends 
  Omit<HTMLAttributes<HTMLInputElement>, 'onChange' | 'onProgress'> {
  /**
   * @zh 接口上传地址
   * */ 
  action?: string;
  /**
   * @zh 文件上传的进度
   * */ 
  onProgress?: (file: UploadItem, e: ChangeEvent<HTMLInputElement>) => void
  /**
   * @zh 上传文件改变时的回调。文件开始上传，失败，成功时会触发。注意：如果需要实时获取文件的上传进度，请在onProgress 中处理。
   * */ 
  onChange?: (fileList: UploadItem[], file: UploadItem) => void
}

export type UploadRequestOptions = {
  file: File;
  method: string;
  action: string;
  onProgress: (percent: number, progressEvent: ProgressEvent) => void;
  onSuccess: (response: object) => void;
  onError: (response: object) => void;
}

export interface UploadInstance {
  submit: (file: UploadItem) => void;
  abort: (file: UploadItem) => void;
  reupload: (file: UploadItem) => void;
}
