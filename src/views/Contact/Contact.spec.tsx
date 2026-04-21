import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "./Contact";

describe("<Contact />", () => {
  it("renders the form with accessible labels", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your message/i)).toBeInTheDocument();
  });

  it("shows validation errors for an empty submission", () => {
    render(<Contact />);
    fireEvent.click(screen.getByRole("button", { name: /send/i }));
    expect(screen.getByText(/name must be longer/i)).toBeInTheDocument();
    expect(screen.getByText(/valid email/i)).toBeInTheDocument();
    expect(screen.getByText(/message must be longer/i)).toBeInTheDocument();
  });
});
