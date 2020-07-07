import React from "react";

export interface GreetingProps {
  compiler: string;
  framework: string;
}

const Greeting = (props: GreetingProps): JSX.Element => {
  return (
    <h1>
      Hello from {props.compiler} and {props.framework}!
    </h1>
  );
};

export default Greeting;
