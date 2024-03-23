
export function buildAd(ad){
    return `
    
    <p>${ad.name}</p>
    <p>Creado por: ${ad.handler}</p>
    <br>
    <a class="ad-link" href='ad-detail.html?adId=${ad.id}'><img class="img-ad"src="${ad.photo}"></img></a>  
    <p>${ad.description}</p>
    <p>${ad.price}</p>
    <p>${ad.buy}</p>
      
    `
}
export function buildEmptyList(){
    return '<h2>No hay anuncios para mostrar</h2>'
}