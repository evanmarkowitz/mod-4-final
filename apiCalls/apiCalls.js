const fetchImages = async url => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Client-ID ${process.env.VUE_APP_ACCESS_KEY}`
      }
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(response.message);
    }
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = fetchImages;
