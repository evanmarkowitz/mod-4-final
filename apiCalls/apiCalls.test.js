import { fetchImages } from "./apiCalls";
import jest from "jest";

describe("apiCalls", () => {
  let mockImages;

  beforeEach(() => {
    mockImages = { results: [{ title: "A" }, { title: "B" }] };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockImages)
      });
    });
  });

  it.skip("should be called with the correct URL", () => {
    const expected = "https://api.unsplash.com/";

    fetchImages("https://api.unsplash.com/");
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it.skip("HAPPY: should return with a parsed response", async () => {
    const result = await fetchImages("https://api.unsplash.com/");

    expect(result).toEqual(mockImages.results);
  });

  it.skip("SAD: should return an error if the answer is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(fetchImages("https://api.unsplash.com/")).rejects.toEqual(
      Error("Error fetching movies")
    );
  });
});
