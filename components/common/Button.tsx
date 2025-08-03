import React from "react";
import {ButtonProps} from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ style, text }) => {
  return <button className={style}>{text}</button>;
};

export default Button;
