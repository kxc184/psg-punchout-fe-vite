import { render, screen, within } from "@testing-library/react";
import { expect, it, describe, vi } from "vitest";
import UtilityNav from "..";
import * as headerApi from "@/api/header";
import {
  mockEmptyLinkHeaderResponse,
  mockSuccessfulHeaderResponse,
} from "@/mocks/handlers/header-handlers";
import { successfulHeaderResponseApi } from "@/api/header/types";

describe("Utility Nav", () => {
  const renderUtilityNav = async (props = { locationSelectionUrl: true }) =>
    render(await UtilityNav(props));
  const expectCommonElements = () => {
    // ✅ Account info
    expect(screen.getByText(/3M/i)).toBeInTheDocument();
    const navigation = screen.getByRole("navigation", {
      name: /desktop utility navigation/i,
    });
    expect(
      within(navigation).getByText(/account: 6559-0247-6/i),
    ).toBeInTheDocument();
    // ✅ store name
    expect(
      screen.getByRole("link", {
        name: /EAU CLAIRE /i,
      }),
    ).toBeInTheDocument();
    // ✅ store phone
    expect(screen.getByText(/\(715\) 835-4323/i)).toBeInTheDocument();
    // ✅ store time
    expect(screen.getByText(/7:00 am - 6:00 pm/i)).toBeInTheDocument();
  };

  it("should render with all links", async () => {
    vi.spyOn(headerApi, "getHeaderData").mockResolvedValue(
      mockSuccessfulHeaderResponse as successfulHeaderResponseApi,
    );
    await renderUtilityNav();

    expectCommonElements();
    // ✅ quick order
    expect(
      screen.getByRole("link", { name: /go to quick order page/i }),
    ).toBeInTheDocument();
    // ✅ order history
    expect(
      screen.getByRole("link", { name: /go to order history page/i }),
    ).toBeInTheDocument();
    // ✅ my quotes
    expect(
      screen.getByRole("link", { name: /go to my quotes page/i }),
    ).toBeInTheDocument();
    // ✅ pickup locations
    expect(
      screen.getByRole("link", { name: /go to pickup locations page/i }),
    ).toBeInTheDocument();
    // ✅ Back to location selection
    expect(
      screen.getByRole("link", { name: /location selection/i }),
    ).toBeInTheDocument();
  });

  it("should not render optional links if not provided", async () => {
    vi.spyOn(headerApi, "getHeaderData").mockResolvedValue(
      mockEmptyLinkHeaderResponse as successfulHeaderResponseApi,
    );
    await renderUtilityNav({ locationSelectionUrl: false });
    expectCommonElements();
    // ❌ quick order
    expect(
      screen.queryByRole("link", { name: /go to quick order page/i }),
    ).not.toBeInTheDocument();
    // ❌ order history
    expect(
      screen.queryByRole("link", { name: /go to order history page/i }),
    ).not.toBeInTheDocument();
    // ❌ my quotes
    expect(
      screen.queryByRole("link", { name: /go to my quotes page/i }),
    ).not.toBeInTheDocument();
    // ❌ pickup locations
    expect(
      screen.queryByRole("link", { name: /go to pickup locations page/i }),
    ).not.toBeInTheDocument();
    // ❌ Back to location selection
    expect(
      screen.queryByRole("link", { name: /location selection/i }),
    ).not.toBeInTheDocument();
  });
});
