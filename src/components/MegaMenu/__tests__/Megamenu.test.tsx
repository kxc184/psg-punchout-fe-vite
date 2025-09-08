import MegaMenu from "..";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

// Mock a small menu to make testing functionality easier
const smallMenu = [
  {
    name: "General Industrial",
    uniqueID: "67001",
    href: "/CategoryDisplay?storeId=10701&catalogId=10551&urlLangId=-1&langId=-1&pageView=grid&categoryId=67001",
    categories: [
      {
        name: "Solvent Coatings",
        uniqueID: "67006",
        categories: [
          {
            name: "Basecoats",
            uniqueID: "68518",
            href: "/CategoryDisplay?storeId=10701&catalogId=10551&urlLangId=-1&langId=-1&pageView=grid&top_category=67001&parent_category_rn=67006&categoryId=68518",
          },
        ],
        href: "/CategoryDisplay?storeId=10701&catalogId=10551&urlLangId=-1&langId=-1&pageView=grid&top_category=67001&categoryId=67006",
      },
    ],
  },
];

// https://github.com/amannn/next-intl/discussions/331#discussioncomment-6527885
const mockUsePathname = vi.fn();
vi.mock("next/navigation", () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe("Megamenu", () => {
  it("should render", async () => {
    mockUsePathname.mockImplementation(() => "/");
    render(<MegaMenu data={smallMenu} isStuck={false} />);

    // ✅ find megamenu
    expect(
      screen.getByText(/SHOP BY CATEGORY|SHERWIN-WILLIAMS/i),
    ).toBeInTheDocument();

    // ✅ find megamenu topcatagories
    expect(
      screen.getByRole("link", { name: /general industrial/i }),
    ).toBeInTheDocument();
  });
  it("should render all catagories when hover", async () => {
    mockUsePathname.mockImplementation(() => "/");
    const user = userEvent.setup();
    render(<MegaMenu data={smallMenu} isStuck={false} />);

    // ✅ hover over top category find category
    const topCategory = screen.getByRole("link", {
      name: /general industrial/i,
    });

    const category = screen.getByRole("link", {
      name: /solvent coatings/i,
    });
    await user.hover(topCategory);
    expect(category).toBeInTheDocument();

    // ✅  hover over catagory find subcategory
    await user.hover(category);
    const subcategory = await screen.findByRole("link", {
      name: /Basecoats/i,
    });
    expect(subcategory).toBeInTheDocument();
  });

  it("should click on menu items", async () => {
    mockUsePathname.mockImplementation(() => "/");
    render(<MegaMenu data={smallMenu} isStuck={false} />);

    // ✅ find link with expected generated href
    const link = screen.getByRole("link", {
      name: /general industrial/i,
    });

    expect(link).toHaveAttribute(
      "href",
      "/CategoryDisplay?storeId=10701&catalogId=10551&urlLangId=-1&langId=-1&pageView=grid&categoryId=67001",
    );
  });
});
