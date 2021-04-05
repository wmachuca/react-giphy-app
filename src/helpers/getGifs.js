export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Z5LzXTWbMtSxFn9znkiV82DobUnJts1i&q=${encodeURI(category)}&limit=15`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(item => {
        return {
            id: item.id,
            title: item.title,
            url: item.images?.downsized_medium.url
        }
    })

    return gifs;
}