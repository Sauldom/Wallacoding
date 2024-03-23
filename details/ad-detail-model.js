function parseAds(data) {
    return{
      handler: data.author,
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      buy: (data.buy ? 'Compra': 'Venta'),
      photo: data.photo      
    }
  }

export async function getDetail(adId){
    const url = `http://localhost:8000/api/ads/${adId}`;   

    try {
        const response = await fetch(url);
        const data = await response.json();
        const ads=parseAds(data);
        return ads;
    } catch (error) {
        throw new Error('Hay un error al obtener los anuncios');
    }
}