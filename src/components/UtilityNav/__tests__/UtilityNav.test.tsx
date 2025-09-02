import { render, screen, within } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import UtilityNav from "..";

describe("Utility Nav", () => {
  const account = {
    orgEntityDisplayName: "WOODCREEK",
    accountNumber: "2524-3595-3",
  };
  const store = {
    name: "POULSBO #701856",
    phone: "(745) 202-1274",
    hours: "7:00 AM - 5:00 PM",
  };

  const renderUtilityNav = (props = {}) =>
    render(<UtilityNav account={account} store={store} {...props} />);

  const expectCommonElements = () => {
    // ✅ Account info
    expect(screen.getByText(/woodcreek/i)).toBeInTheDocument();
    const navigation = screen.getByRole("navigation", {
      name: /desktop utility navigation/i,
    });
    expect(
      within(navigation).getByText(/account: 2524-3595-3/i),
    ).toBeInTheDocument();
    // ✅ store info
    expect(
      screen.getByRole("link", {
        name: /poulsbo #701856 \(745\) 202-1274 7:00 am - 5:00 pm/i,
      }),
    ).toBeInTheDocument();
  };

  it("should render with all links", () => {
    renderUtilityNav({
      quickOrderUrl: "/#",
      orderHistoryUrl: "/#",
      locationSelectionUrl: "/#",
    });

    expectCommonElements();
    // ✅ quick order
    expect(
      screen.getByRole("link", { name: /go to quick order page/i }),
    ).toBeInTheDocument();
    // ✅ order history
    expect(
      screen.getByRole("link", { name: /view your order history/i }),
    ).toBeInTheDocument();
    // ✅ Back to location selection
    expect(
      screen.getByRole("link", { name: /location selection/i }),
    ).toBeInTheDocument();
  });

  it("should not render optional links if not provided", () => {
    renderUtilityNav();
    expectCommonElements();
    // ❌ quick order
    expect(
      screen.queryByRole("link", { name: /go to quick order page/i }),
    ).not.toBeInTheDocument();
    // ❌ order history
    expect(
      screen.queryByRole("link", { name: /view your order history/i }),
    ).not.toBeInTheDocument();
    // ❌ Back to location selection
    expect(
      screen.queryByRole("link", { name: /location selection/i }),
    ).not.toBeInTheDocument();
  });
});
