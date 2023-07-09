// FUNCTIONS AND METHODS IMPORTS
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// COMPONENTS AND CONTEXTS IMPORTS
import MainContext from "@store/MainContext";
import EndScreen from "@components/activityWrapper/endScreen/EndScreen";

describe("The EndActivity Screen ", () => {
  const mockSetLoading = vi.fn();
  const mockSetError = vi.fn();
  const mockStartActivity = vi.fn();

  const mockContext = {
    score: 10,
    isEnded: true,
    isLoading: false,
    error: { isError: false, msg: "" },
    setLoading: mockSetLoading,
    setError: mockSetError,
    startActivity: mockStartActivity,
  };

  it("renders the rank and restart button when the game has ended", async () => {
    render(
      <MainContext.Provider value={mockContext}>
        <EndScreen />
      </MainContext.Provider>
    );

    expect(await screen.findByText(/Your rank is/)).toBeTruthy();
    expect(screen.getByRole("button", { name: /Try Again/i })).toBeTruthy();
  });

  it("calls startActivity when the restart button is clicked", async () => {
    render(
      <MainContext.Provider value={mockContext}>
        <EndScreen />
      </MainContext.Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /Try Again/i }));

    expect(mockStartActivity).toHaveBeenCalled();
  });
});
