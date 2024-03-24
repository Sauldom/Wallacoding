function parseAds(data) {
    return{
      handler: data.author,
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      buy: (data.buy ? 'Compra': 'Venta'),
      photo: data.photo,
      userId:data.userId      
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
function parseUser(data) {
  return {
    id: data.id
  }
}
export async function getUserData(token) {
  const url = 'http://localhost:8000/auth/me';

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    return parseUser(data);
  } catch (error) {
    throw new Error('Error datos del usuario')
  }
}

export async function deleteAd(detailId, token) {
  const url = `http://localhost:8000/api/ads/${detailId}`;

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error('Error borrando anuncio');
  }
}