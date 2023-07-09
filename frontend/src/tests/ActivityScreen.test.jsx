// FUNCTIONS AND METHODS IMPORTS
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
// COMPONENTS IMPORTS
import ActivityScreen from "@components/activityWrapper/activityScreen/ActivityScreen";

describe("ActivityScreen", () => {
  it("renders the section and check that all 4 buttons exist", () => {
    render(<ActivityScreen />);

    expect(screen.getAllByRole("button", { name: /noun/i })).toBeTruthy();
    expect(screen.getAllByRole("button", { name: /verb/i })).toBeTruthy();
    expect(screen.getAllByRole("button", { name: /adverb/i })).toBeTruthy();
    expect(screen.getAllByRole("button", { name: /adjective/i })).toBeTruthy();
  });

  it("renders the section and check that each button is active and clickable", async () => {
    render(<ActivityScreen />);

    const buttons = screen.getAllByRole("button");
    const nounButton = buttons.find((button) => button.textContent === "noun");
    fireEvent.click(nounButton);
    const verbButton = buttons.find((button) => button.textContent === "verb");
    fireEvent.click(verbButton);
    const adverbButton = buttons.find(
      (button) => button.textContent === "adverb"
    );
    fireEvent.click(adverbButton);
    const adjectiveButton = buttons.find(
      (button) => button.textContent === "adjective"
    );
    fireEvent.click(adjectiveButton);
  });
});
