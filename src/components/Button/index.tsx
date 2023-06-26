import React from "react";

type ButtonProps = {
  color: string;
  background: string;
  text: string;
  onLog?: () => void;
};

const Button = ({color,background,text,onLog}: ButtonProps) => {
 
  return (
  <div style={{color,background}} onClick={onLog}> {text}</div>);
};

export default Button;
