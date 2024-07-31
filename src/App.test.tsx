import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders Deep Patel heading", () => {
  // Render the App component
  render(<App />);

  // Find the <h1> element with text "Deep Patel"
  const headingElement = screen.getByText(/deep patel/i);

  // Assert that the heading is in the document
  expect(headingElement).toBeInTheDocument();
});
