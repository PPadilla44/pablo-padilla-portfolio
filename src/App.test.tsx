import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders the hero headline", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: /pablo padilla/i })
    ).toBeInTheDocument();
  });

  it("renders all main sections", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /education/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /contact/i })).toBeInTheDocument();
  });
});
