export function getPrefix(componentName: string, prefix?: string){
  prefix = prefix || "mini"

  return  `${prefix}-${componentName}`
}