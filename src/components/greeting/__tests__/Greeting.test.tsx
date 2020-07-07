import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Greeting from "../Greeting";

test("Renders a greeting", () => {
  const compiler = "TypeScript";
  const framework = "React";

  const { getByText } = render(
    <Greeting compiler={compiler} framework={framework} />,
  );
  expect(
    getByText(`Hello from ${compiler} and ${framework}!`),
  ).toBeInTheDocument();
});
