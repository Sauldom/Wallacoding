function parseAds(data) {
    return data.map(data => ({
      handler: data.author,
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      buy: (data.buy ? 'Compra': 'Venta'),
      photo: data.photo      
    }))
  }


export async function getAds(){
    const url = "http://localhost:8000/api/ads";
    let ads=[];

    try {
        const response = await fetch(url);
        const data = await response.json();
        ads=parseAds(data);
        return ads;
    } catch (error) {
        throw new Error('Hay un error al obtener los anuncios');
    }
}