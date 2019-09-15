const fetchImages = async url => {
  console.log(process.env.ACCESS_KEY)
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `client_id ${process.env.ACCESS_KEY}`
      }
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      // const error = await response.json();
      throw new Error(response);
    }
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw new Error();
  }
}

export default fetchImages
