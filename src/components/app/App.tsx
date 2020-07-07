import React from "react";

export interface AppProps {
  compiler: string;
  framework: string;
}

const App = (props: AppProps): JSX.Element => {
  return (
    <h1>
      Hello from {props.compiler} and {props.framework}!
    </h1>
  );
};

export default App;