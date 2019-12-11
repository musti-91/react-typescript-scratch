import * as React from "react";

interface Props {
  title: string;
  onClick: () => void;
}

const Button = ({ onClick, title }: Props) => (
  <button onClick={() => onClick}>{title}</button>
);

export default Button;
