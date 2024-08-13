import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";
import useFetchGifs from "../src/hooks/useFetchGifs";

describe("Test in <GifExpertApp/>", () => {
  const inputValue = "Batman";
  test("It should show images consuming useFetchGifs", async () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);

    expect(screen.getByText("One Punch")).toBeTruthy();

    const { result } = renderHook(() => useFetchGifs());
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;

    expect(images.length).toBe(10);
    expect(isLoading).toBe(false);
  });
});
