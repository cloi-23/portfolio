import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  Object.defineProperty(window, "requestAnimationFrame", {
    writable: true,
    value: jest.fn((callback) => window.setTimeout(callback, 0)),
  });

  Object.defineProperty(window, "cancelAnimationFrame", {
    writable: true,
    value: jest.fn((id) => window.clearTimeout(id)),
  });
});

test("renders the portfolio hero", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", {
      name: /full-stack software engineer building clean web applications/i,
    })
  ).toBeInTheDocument();
});
