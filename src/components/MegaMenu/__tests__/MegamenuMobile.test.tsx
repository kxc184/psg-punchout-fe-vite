import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import MegaMenuMobile from "../mobile/MegaMenuMobile";
import { render, screen } from "@testing-library/react";

// Mock a small menu to make testing functionality easier
const smallMenu = [
  {
    name: "General Industrial",
    uniqueID: "67001",
    categories: [
      {
        name: "Solvent Coatings",
        uniqueID: "67006",
        categories: [
          {
            name: "Basecoats",
            uniqueID: "68518",
          },
        ],
      },
    ],
  },
];

describe("MegaMenuMobile (hover interaction)", () => {
  it("renders top-level category", () => {
    render(<MegaMenuMobile data={smallMenu} />);
    expect(
      screen.getByRole("list", {
        name: /topcategories/i,
      }),
    ).toBeInTheDocument();
  });

  it("shows second-level category on hover over top category", async () => {
    const user = userEvent.setup();
    render(<MegaMenuMobile data={smallMenu} />);
    expect(
      screen.getByRole("navigation", { name: "categories" }),
    ).not.toHaveClass("sw:translate-x-full");
    await user.hover(screen.getAllByText("General Industrial")[0]);
    expect(screen.getByRole("navigation", { name: "categories" })).toHaveClass(
      "sw:translate-x-full",
    );
  });

  it("shows third-level category on hover over second-level", async () => {
    const user = userEvent.setup();
    render(<MegaMenuMobile data={smallMenu} />);
    expect(screen.getByRole("list", { name: "third-level" })).toHaveClass(
      "sw:hidden",
    );
    await user.hover(screen.getAllByText("General Industrial")[0]);
    await user.hover(screen.getByText("Solvent Coatings"));
    expect(screen.getByRole("list", { name: "third-level" })).not.toHaveClass(
      "sw:hidden",
    );
  });
});
