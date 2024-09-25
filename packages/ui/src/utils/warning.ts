export function warning(
    condition: boolean,
    message: string,
    ...options: unknown[]
) {
  if(!console || !condition)
    return

  console.error(`
    [@mini-ui/ui]: ${message}
  `, ...options)
}