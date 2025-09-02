import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "..";

describe("Footer", () => {
  it("should render", async () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo", { name: /footer/i });
    expect(footer).toBeInTheDocument();
  });
});
