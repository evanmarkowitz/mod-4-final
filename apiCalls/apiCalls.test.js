/* eslint-disable no-undef */
// const fetchImages = require("./apiCalls");
import fetchImages from "./apiCalls";

describe("apiCalls", () => {
  let mockImages;
  let options;

  beforeEach(() => {
    mockImages = { results: [{ title: "A" }, { title: "B" }] };
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `client_id ${process.env.ACCESS_KEY}`
      }
    };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockImages)
      });
    });
  });

  it("should be called with the correct URL", () => {
    const expected = "https://api.unsplash.com/";

    fetchImages("https://api.unsplash.com/", options);
    expect(window.fetch).toHaveBeenCalledWith(expected, options);
  });

  it("HAPPY: should return with a parsed response", async () => {
    const result = await fetchImages("https://api.unsplash.com/", options);

    expect(result).toEqual(mockImages);
  });

  it("SAD: should return an error if the answer is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(fetchImages("https://api.unsplash.com/")).rejects.toEqual(
      Error("Error fetching images")
    );
  });
});
