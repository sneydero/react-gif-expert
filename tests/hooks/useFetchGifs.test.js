import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../src/hooks/useFetchGifs";

describe("Test in useFetchGif", () => {
  test("It should return the initial state", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBe(true);
  });

  test("It should return an image array and isLoading in false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;

    expect(images.length).toBe(10);
    expect(isLoading).toBe(false);
  });
});
