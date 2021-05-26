export const getGifs = async (category) => {
  console.log(category);
  const apiKey = "WPrYygHPUC7NQYmS2AJpSNoOREpepCpL";
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${apiKey}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium?.url,
  }));

  return gifs;
};
