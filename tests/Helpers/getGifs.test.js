import { getGifs } from "../../src/Helpers/getGifs";

describe("Tests in getGifs()", () => {
  test("It should return a gifs array", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBeGreaterThanOrEqual(10);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
