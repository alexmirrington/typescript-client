import React from "react";

export interface GreetingProps {
  compiler: string;
  framework: string;
}

const Greeting = (props: GreetingProps): JSX.Element => {
  return (
    <p>
      Hello from {props.compiler} and {props.framework}!
    </p>
  );
};

export default Greeting;
