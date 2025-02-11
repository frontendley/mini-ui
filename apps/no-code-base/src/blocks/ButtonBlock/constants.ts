import { ButtonBlockType } from "../../types/blocks";

export const BUTTON_DEFAULT: Omit<ButtonBlockType, 'id'> = {
  title: "按钮",
  type: "button",
  props: {
    type: "primary",
    children: "button"
  }
}
