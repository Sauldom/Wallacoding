
export function buildAd(ad){
    return `
    <a class="ad-link" href='ad-detail.html?adId=${ad.id}'>
    <p>${ad.name}</p>
    <br>
    <img class="img-ad"src="${ad.photo}"></img>
    <p>${ad.description}</p>
    <p>${ad.price}</p>
    <p>${ad.buy}</p>
    </a>  
    `
}
export function buildEmptyList(){
    return '<h2>No hay anuncios para mostrar</h2>'
}