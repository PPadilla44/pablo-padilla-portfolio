import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  it("renders the text prop", () => {
    render(<Button text="Contact Me" />);
    expect(screen.getByRole("button", { name: /contact me/i })).toBeInTheDocument();
  });

  it("invokes the callBack on click", () => {
    const callBack = jest.fn();
    render(<Button text="Click" callBack={callBack} />);
    fireEvent.click(screen.getByRole("button", { name: /click/i }));
    expect(callBack).toHaveBeenCalledTimes(1);
  });
});
