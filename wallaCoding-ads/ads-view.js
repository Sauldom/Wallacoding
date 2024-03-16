
export function buildAd(ad){
    return `
    <span>${ad.name}</span>
    <span>Creado por: ${ad.handler}</span>
    <img src="${ad.photo}"></img>
    <p>${ad.description}</p>
    <p>${ad.price}</p>
    <p>${ad.buy}</p>
    `
}
