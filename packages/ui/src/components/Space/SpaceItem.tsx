import { SpaceItemProps } from "./interface";

export function SpaceItem(props: SpaceItemProps) {
  const {
    children,
    ...rest
  } = props

  return (
    <div
      {...rest}
    >
      { children }
    </div>
  )
}