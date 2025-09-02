import { describe, expect, it } from "vitest";
import Header from "..";
import HeaderMobile from "../HeaderMobile";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));
// const smallMenu = [
//   {
//     name: "General Industrial",
//     uniqueID: "67001",
//     categories: [
//       {
//         name: "Solvent Coatings",
//         uniqueID: "67006",
//         categories: [
//           {
//             name: "Basecoats",
//             uniqueID: "68518",
//             href: "/CategoryDisplay?storeId=10701&catalogId=10551&urlLangId=-1&langId=-1&pageView=grid&top_category=67001&parent_category_rn=67006&categoryId=68518",
//           },
//         ],
//         href: "/CategoryDisplay?storeId=10701&catalogId=10551&urlLangId=-1&langId=-1&pageView=grid&top_category=67001&categoryId=67006",
//       },
//     ],
//     href: "/CategoryDisplay?storeId=10701&catalogId=10551&urlLangId=-1&langId=-1&pageView=grid&categoryId=67001",
//   },
// ];

const mockMiniCartData = {
  tally: 1,
  total: 36.76,
};

describe("Header", () => {
  // skipping this test as it requires either mocking the next/headers dynamic api
  // or rewriting the custom render function to provide context for nextjs
  // TODO: fix this test with the above
  it.skip("Should render on desktop", async () => {
    render(await Header());

    // ✅ find utility nav
    const utilityNav = screen.getByRole("navigation", {
      name: /desktop utility navigation/i,
    });
    expect(utilityNav).toBeInTheDocument();

    // ✅ find megamenu
    const megamenu = screen.getByRole("navigation", {
      name: /desktop megamenu/i,
    });
    expect(megamenu).toBeInTheDocument();

    // ✅ find minicart
    const minicart = screen.getAllByRole("link", {
      name: /mini cart/i,
    });
    if (minicart.length) {
      expect(minicart[0]).toBeInTheDocument();
    }
  });
  it("Should render on mobile", async () => {
    const user = userEvent.setup();
    render(<HeaderMobile miniCartData={mockMiniCartData} />);

    // ✅ find utility nav
    const utilityNav = screen.queryByRole("navigation", {
      name: "utility navigation",
    });
    expect(utilityNav).not.toBeInTheDocument();

    // ✅ find megamenu
    const showMegamenu = screen.getByRole("button", {
      name: /show megamenu/i,
    });
    expect(showMegamenu).toBeInTheDocument();

    const mobileMegamenu = screen.getByLabelText("mobile-megamenu");

    expect(mobileMegamenu).toHaveClass("sw:left-[-300px]");
    await user.click(showMegamenu);
    expect(mobileMegamenu).toHaveClass("sw:left-0");

    // ✅ find minicart
    const minicart = screen.getByRole("link", {
      name: /mini cart/i,
    });
    expect(minicart).toBeInTheDocument();
  });
});
