import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe("Test in <GifItem/>", () => {
  const title = "Esto es una prueba";
  const url = "http://image.test.com/";

  test("It should do match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("It should show the image and ALT with the url indicated", () => {
    render(<GifItem title={title} url={url} />);

    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(url);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(url);
  });

  test("It should show the title as a text in the page", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title).innerHTML).toBe(title);
  });
});
