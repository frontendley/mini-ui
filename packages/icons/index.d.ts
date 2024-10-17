// 类型声明， 重载className、style、spin的属性
export interface IconProps extends Omit<SVGAttributes<SVGElement>, "className"> {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
}