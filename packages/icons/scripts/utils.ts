export function delExt (filepath: string) {
  return filepath.replace(".svg", "")
}

export function kebab2Camel (filename: string) {
  return filename.split('-').map(item => item.charAt(0)?.toLocaleUpperCase() + item.substring(1).toLocaleLowerCase()).join("")
}