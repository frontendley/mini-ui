export function warning(
    condition: boolean,
    message: string,
    ...options: unknown[]
) {
  if(!console || !condition)
    return

  // eslint-disable-next-line no-console
  console.error(`
    [@mini-ui/ui]: ${message}
  `, ...options)
}
