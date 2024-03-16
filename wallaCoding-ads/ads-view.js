
export function buildAd(ad){
    return `
    <p>${ad.name}</p>
    <p>Creado por: ${ad.handler}</p>
    <br>
    <img src="${ad.photo}"></img>
    <p>${ad.description}</p>
    <p>${ad.price}</p>
    <p>${ad.buy}</p>
    `
}
