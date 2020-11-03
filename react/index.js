import React from "react";
import { render } from "react-dom";
import { ReactApp } from "./ReactApp";

// this is the interface between Angular.js and React,
// a simple DOM element.
const root = document.createElement("div");
root.id = "react-app";

// the module interface is a function that takes in props (arguments),
// and returns the rendered DOM element.
// This ensures you can exchange state back and forth between
// Angular.js and React.
export const renderReactApp = props => {
  render(<ReactApp {...props} />, root);
  return root;
};

// this would be an example of the interface to share if you can use TypeScript
/*
  interface Props {
    name: string;
    onChangeName: (name: string) => void;
  }
*/

// which you can use with:
// renderReactApp = (props: Props) => render(...);
