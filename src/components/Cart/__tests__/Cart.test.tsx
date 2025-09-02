import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MiniCart from "..";

const mockMiniCartData = {
  tally: 1,
  total: 36.76,
};

describe("MiniCart", () => {
  it("should render", () => {
    render(<MiniCart miniCartData={mockMiniCartData} />);
    const minicart = screen.getByRole("link", {
      name: /mini cart/i,
    });
    expect(minicart).toBeInTheDocument();
  });
});
