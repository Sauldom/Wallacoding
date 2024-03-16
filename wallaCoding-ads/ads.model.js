function parseAds(data) {
    return data.map(data => ({
      handler: data.author,
      date: new Date().toISOString(),
      message: data.message,
      likes: data.likes.length,
      id: data.id,
    }))
  }


export async function getAds(){
    const url = "http://localhost:8000/api/ads";
    let ads=[];

    try {
        const response = await fetch(url);
        const data = await response.json();
        ads=parseAds(data);
    } catch (error) {
        throw new Error('Hay un error al obtener los anuncios');
    }
}