import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { HttpResponse, http } from "msw";
import server from "../../../mocks/server";
import Search from "..";
import { vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

vi.mock("next/headers", () => ({
  headers: vi.fn(
    () =>
      new Headers({
        "Contract-Id": "",
        "Parent-Org-Entity-Id": "",
      }),
  ),
}));

// This matches the transformed shape returned by the API route
const noAutoSuggestProductsResponse = {
  searchTerm: "bruu",
  numberResults: 0,
  categories: [],
  products: [],
};

describe("Search", () => {
  it("should render", () => {
    render(<Search />);

    // ✅ find search
    const search = screen.getByRole("searchbox");
    expect(search).toBeInTheDocument();

    // ✅ do not find auto suggest
    const autoSuggest = screen.queryByRole("region", {
      name: /auto suggest/i,
    });
    expect(autoSuggest).not.toBeInTheDocument();
  });
  it("should show and hide auto suggestion", async () => {
    server.use(
      http.get("/en-us/api/punchout-bff/products/auto-suggestion", () =>
        HttpResponse.json({
          searchTerm: "brush",
          numberResults: 2,
          categories: [],
          products: [
            { name: "Brush", uniqueID: "1", url: "/brush", thumbnail: "" },
            {
              name: "Roller",
              uniqueID: "2",
              url: "/roller",
              thumbnail: "",
            },
          ],
        }),
      ),
    );
    const user = userEvent.setup();
    render(<Search />);

    // ✅ find search
    const search = screen.getByRole("searchbox");
    expect(search).toBeInTheDocument();

    // ✅ do not find auto suggest
    const autoSuggestHidden = screen.queryByRole("region", {
      name: /auto suggest/i,
    });
    expect(autoSuggestHidden).not.toBeInTheDocument();

    // ✅ type 'brush' into search box
    await user.type(search, "brush");
    expect(search).toHaveValue("brush");

    // ✅ wait for debounce to happen and auto suggest is shown
    await waitFor(() => {
      const autoSuggestShown = screen.getByRole("region", {
        name: /auto suggest/i,
      });
      expect(autoSuggestShown).toBeInTheDocument();
    });

    // ✅ clear search box
    await user.clear(search);
    expect(search).toHaveValue("");

    // ✅ wait for debounce to happen and auto suggest is hidden
    await waitFor(() => {
      const autoSuggestHidden2 = screen.queryByRole("region", {
        name: /auto suggest/i,
      });
      expect(autoSuggestHidden2).not.toBeInTheDocument();
    });
  });
  it("should show message when 0 products", async () => {
    // 🚨 mock server response to return an empty list of products
    server.use(
      http.get("/en-us/api/punchout-bff/products/auto-suggestion", () =>
        HttpResponse.json(noAutoSuggestProductsResponse, {
          status: 200,
        }),
      ),
    );
    const user = userEvent.setup();
    render(<Search />);

    // ✅ find search
    const search = screen.getByRole("searchbox");
    expect(search).toBeInTheDocument();

    // ✅ do not find auto suggest
    const autoSuggestHidden = screen.queryByRole("region", {
      name: /auto suggest/i,
    });
    expect(autoSuggestHidden).not.toBeInTheDocument();

    // ✅ type 'bruu' into search box
    await user.type(search, "bruu");
    expect(search).toHaveValue("bruu");

    // ✅ wait for debounce to happen and auto suggest is shown
    const autoSuggestShown = await screen.findByRole("region", {
      name: /auto suggest/i,
    });
    expect(autoSuggestShown).toBeInTheDocument();

    // ✅ find no products found text
    const noProductsText = screen.getByText(/there are 0 results for/i);
    expect(noProductsText).toBeInTheDocument();
  });
});
