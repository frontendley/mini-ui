import React from "react";
import { ReactNode } from "react";
import { isFragment } from "react-is"

export function toArray(nodes: ReactNode) {
  let result: ReactNode[] = []

  React.Children.forEach(nodes, (child) => {
    if (isFragment(child) && child?.props.children) {
      result = result.concat(toArray(child.props.children))
    } else if (child !== undefined && child !== null) {
      result.push(child)
    }
  })

  return result
}