import { ButtonBlockType } from "../../types/blocks";

export const buttonDefault: ButtonBlockType = {
  title: "按钮",
  type: "button",
  id: `button-${Date.now()}`,
  props: {
    type: "primary",
    children: "button"
  }
}
