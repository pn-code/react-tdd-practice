import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("render form elements", () => {
  test("username input should be rendered", () => {
    render(Login());
    const userInputElement = screen.getByPlaceholderText(/username/i);
    expect(userInputElement).toBeInTheDocument();
  });

  test("password input should be rendered", () => {
    render(Login());
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    expect(passwordInputElement).toBeInTheDocument();
  });

  test("login button should be rendered", () => {
    render(Login());
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});

describe("on start, inputs should be empty", () => {
  test("username input should be rendered", () => {
    render(Login());
    const userInputElement = screen.getByPlaceholderText(/username/i);
    expect(userInputElement.value).toBe("")
  });

  test("password input should be rendered", () => {
    render(Login());
    const passwordInputElement = screen.getByPlaceholderText(/password/i);
    expect(passwordInputElement.value).toBe("")
  });
});
