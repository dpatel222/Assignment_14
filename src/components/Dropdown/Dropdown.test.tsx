import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dropdown from "./Dropdown";

describe("Dropdown component", () => {
  test("has correct cursor and background color when disabled is true", () => {
    render(<Dropdown disabled={true} />);
    const dropdown = screen.getByRole("combobox");

    expect(dropdown).toHaveStyle("cursor: not-allowed");
    expect(dropdown).toHaveStyle("background-color: grey");
  });

  test("has correct cursor and background color when disabled is false", () => {
    render(<Dropdown disabled={false} />);
    const dropdown = screen.getByRole("combobox");

    expect(dropdown).toHaveStyle("cursor: pointer");
    expect(dropdown).toHaveStyle("background-color: green");
  });

  test("is visible", () => {
    render(<Dropdown />);
    const dropdown = screen.getByRole("combobox");

    expect(dropdown).toBeVisible();
  });
});
