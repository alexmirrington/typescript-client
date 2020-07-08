import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Greeting from "../Greeting";

describe("Greeting Component", () => {
  it("renders a greeting", () => {
    const compiler = "TypeScript";
    const framework = "React";

    const { getByText } = render(
      <Greeting compiler={compiler} framework={framework} />,
    );
    expect(
      getByText(`Hello from ${compiler} and ${framework}!`),
    ).toBeInTheDocument();
  });
});
