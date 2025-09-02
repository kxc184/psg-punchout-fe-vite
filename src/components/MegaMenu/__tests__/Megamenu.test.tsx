import MegaMenu from "..";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

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
            href: "/CategoryDisplay?storeId=10701&catalogId=10551&urlLangId=-1&langId=-1&pageView=grid&top_category=67001&parent_category_rn=67006&categoryId=68518",
          },
        ],
        href: "/CategoryDisplay?storeId=10701&catalogId=10551&urlLangId=-1&langId=-1&pageView=grid&top_category=67001&categoryId=67006",
      },
    ],
    href: "/CategoryDisplay?storeId=10701&catalogId=10551&urlLangId=-1&langId=-1&pageView=grid&categoryId=67001",
  },
];

// https://github.com/amannn/next-intl/discussions/331#discussioncomment-6527885
const mockUsePathname = vi.fn();
vi.mock("next/navigation", () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe.skip("Megamenu", () => {
  it("should render", async () => {
    mockUsePathname.mockImplementation(() => "/");
    render(<MegaMenu megaMenuData={smallMenu} />);

    // ✅ find megamenu
    expect(await screen.findByText(/shop by category/i)).toBeInTheDocument();

    // ✅ find megamenu topcatagories
    expect(
      await screen.findByRole("link", { name: /general industrial/i }),
    ).toBeInTheDocument();
  });
  it("should render all catagories when hover", async () => {
    mockUsePathname.mockImplementation(() => "/");
    const user = userEvent.setup();
    render(<MegaMenu megaMenuData={smallMenu} />);

    // ✅ hover over top category find category
    const topcategory = await screen.findByRole("link", {
      name: /General Industrial >/i,
    });
    const category = await screen.findByRole("link", {
      name: /Solvent Coatings >/i,
    });
    await user.hover(topcategory);
    expect(category).toBeInTheDocument();

    // ✅  hover over catagory find subcategory
    await user.hover(category);
    const subcategory = await screen.findByRole("link", {
      name: /Basecoats/i,
    });
    expect(subcategory).toBeInTheDocument();
  });
  it("should not show menu when path is no at root", async () => {
    mockUsePathname.mockImplementation(() => "");
    const user = userEvent.setup();
    render(<MegaMenu megaMenuData={smallMenu} />);

    const topcategories = screen.getByRole("list", { name: "top categories" });
    expect(topcategories).toHaveClass("sw:hidden");

    // ✅ hover over megamenu to show topcategories
    const megamenu = screen.getByText(/shop by category/i);
    await user.hover(megamenu);
    expect(topcategories).not.toHaveClass("sw:hidden");

    // ✅ unhover and verifiy topcategories is hidden
    await user.unhover(megamenu);
    await waitFor(
      () => {
        expect(topcategories).toHaveClass("sw:hidden");
      },
      { timeout: 500 },
    );
  });
  it("should click on menu items", async () => {
    mockUsePathname.mockImplementation(() => "/");
    render(<MegaMenu megaMenuData={smallMenu} />);

    // ✅ find link with expected generated href
    const link = await screen.findByRole("link", {
      name: /General Industrial >/i,
    });

    expect(link).toHaveAttribute(
      "href",
      "/CategoryDisplay?storeId=10701&catalogId=10551&urlLangId=-1&langId=-1&pageView=grid&categoryId=67001",
    );
  });
});
