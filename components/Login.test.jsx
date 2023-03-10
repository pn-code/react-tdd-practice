import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import Login from "./Login";

vi.mock("axios", () => ({
    __esModule: true,
    default: {
        get: () => ({
            data: { id: 1, name: "John Doe" },
        }),
    },
}));

// TEST BLOCK #1
describe("render form elements", () => {
    test("username input should be rendered", () => {
        render(<Login />);
        const userInputElement = screen.getByPlaceholderText(/username/i);
        expect(userInputElement).toBeInTheDocument();
    });

    test("password input should be rendered", () => {
        render(<Login />);
        const passwordInputElement = screen.getByPlaceholderText(/password/i);
        expect(passwordInputElement).toBeInTheDocument();
    });

    test("login button should be rendered", () => {
        render(<Login />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});

// TEST BLOCK #2
describe("on start, check form elements", () => {
    test("username input should be rendered", () => {
        render(<Login />);
        const userInputElement = screen.getByPlaceholderText(/username/i);
        expect(userInputElement.value).toBe("");
    });

    test("password input should be rendered", () => {
        render(<Login />);
        const passwordInputElement = screen.getByPlaceholderText(/password/i);
        expect(passwordInputElement.value).toBe("");
    });

    test("button should be disabled", () => {
        render(<Login />);
        const btnElement = screen.getByRole("button");
        expect(btnElement).toBeDisabled();
    });

    test("button should be disabled", () => {
        render(<Login />);
        const btnElement = screen.getByRole("button");
        expect(btnElement).not.toBe("Please Wait...");
    });

    test("error message should not be visible", () => {
        render(<Login />);
        const errorElement = screen.getByTestId("error");
        expect(errorElement).not.toBeVisible();
    });
});

// TEST BLOCK #3
describe("should handle user events", () => {
    test("username input should be rendered", () => {
        render(<Login />);
        const userInputElement = screen.getByPlaceholderText(/username/i);
        const testValue = "test";

        fireEvent.change(userInputElement, { target: { value: testValue } });
        expect(userInputElement.value).toBe(testValue);
    });

    test("password input should be rendered", () => {
        render(<Login />);
        const passwordInputElement = screen.getByPlaceholderText(/password/i);
        const testValue = "test";

        fireEvent.change(passwordInputElement, {
            target: { value: testValue },
        });
        expect(passwordInputElement.value).toBe(testValue);
    });

    test("button is not disabled if both inputs have values", () => {
        render(<Login />);
        const btnElement = screen.getByRole("button");
        const userInputElement = screen.getByPlaceholderText(/username/i);
        const passwordInputElement = screen.getByPlaceholderText(/password/i);
        const testValue = "test";

        fireEvent.change(userInputElement, { target: { value: testValue } });
        fireEvent.change(passwordInputElement, {
            target: { value: testValue },
        });

        expect(btnElement).not.toBeDisabled();
    });

    test(`button should render "loading" when clicked`, () => {
        render(<Login />);
        const btnElement = screen.getByRole("button");
        const userInputElement = screen.getByPlaceholderText(/username/i);
        const passwordInputElement = screen.getByPlaceholderText(/password/i);
        const testValue = "test";

        fireEvent.change(userInputElement, { target: { value: testValue } });
        fireEvent.change(passwordInputElement, {
            target: { value: testValue },
        });
        fireEvent.click(btnElement);

        expect(btnElement).toHaveTextContent(/please wait/i);
    });

    test(`button should not render "loading" after our API call`, async () => {
        render(<Login />);
        const btnElement = screen.getByRole("button");
        const userInputElement = screen.getByPlaceholderText(/username/i);
        const passwordInputElement = screen.getByPlaceholderText(/password/i);
        const testValue = "test";

        fireEvent.change(userInputElement, { target: { value: testValue } });
        fireEvent.change(passwordInputElement, {
            target: { value: testValue },
        });
        fireEvent.click(btnElement);

        await waitFor(() =>
            expect(btnElement).not.toHaveTextContent(/please wait/i)
        );
    });

    test(`user should be rendered after fetching`, async () => {
        render(<Login />);
        const btnElement = screen.getByRole("button");
        const userInputElement = screen.getByPlaceholderText(/username/i);
        const passwordInputElement = screen.getByPlaceholderText(/password/i);

        const testValue = "test";

        fireEvent.change(userInputElement, { target: { value: testValue } });
        fireEvent.change(passwordInputElement, {
            target: { value: testValue },
        });
        fireEvent.click(btnElement);

        const userItem = await screen.findByText("John Doe")

        await waitFor(() =>
            expect(userItem).toBeInTheDocument()
        );
    });
});
