export const fetchImages = async (url) => {
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',  'Authorization': `client_id ${process.env.ACCESS_KEY}`}
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error);
    }
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw new Error();
  }
}