import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MiniCart from "..";
import TestWrapper from "./testwrapper";

describe("MiniCart", () => {
  it("should render", () => {
    render(<MiniCart  />, {wrapper: TestWrapper});
    const minicart = screen.getByRole("link", {
      name: /mini cart/i,
    });
    expect(minicart).toBeInTheDocument();
  });
});
