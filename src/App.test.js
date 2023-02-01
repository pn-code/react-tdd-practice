import { render, renderHook, screen } from "@testing-library/react";
import App from "./App";

// VITEST TESTS
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

test("1 + 1", () => {
  expect(1 + 1).toEqual(2);
});

test("1 + 2 + 3", () => {
  expect(sum(1, 2, 3)).toEqual(6);
});

test("10 numbers", () => {
  expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual(55);
});

test("0 numbers", () => {
  expect(sum()).toEqual(0);
});

test("1 number", () => {
  expect(sum(1)).toEqual(1);
});

// DOM TESTS
test("renders header", () => {
  render(App())
  const message = screen.queryByText(/Hello World/i);
  expect(message).toBeInTheDocument();
});

test("checks for 3 list items", () => {
    render(App())
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });