import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders the hero headline", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: /pablo/i })
    ).toBeInTheDocument();
  });

  it("renders every main section heading", () => {
    render(<App />);
    expect(screen.getByTestId("experience-section")).toBeInTheDocument();
    expect(screen.getByTestId("skills-section")).toBeInTheDocument();
    expect(screen.getByTestId("projects-section")).toBeInTheDocument();
    expect(screen.getByTestId("education-section")).toBeInTheDocument();
  });

  it("renders the theme toggle", () => {
    render(<App />);
    expect(screen.getByTestId("theme-toggle-btn")).toBeInTheDocument();
  });
});
