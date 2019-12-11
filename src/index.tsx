import React from "react";
import ReactDOM from "react-dom";

const Root = document.getElementById("root");

interface Props {
  [prop: string]: any;
}

const App = ({ name }: Props) => {
  return <p>click me I'm Paragraph{name}</p>;
};

ReactDOM.render(<App name="Typescript from scratch" />, Root);
