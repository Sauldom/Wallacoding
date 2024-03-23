export function drawDetail(adDetail){
    return `
    <h1 class="detail-name">${adDetail.name}</h1>
    <img class="detail-image" src="${adDetail.photo}"></img>
    <p class="description" >Descripcion de producto:</p>
    <p class="description-detail">${adDetail.description}</p>
    <p class ="detail-buy">Es un producto en ${adDetail.buy} por ${adDetail.handler}</p>
    <p class = "detail-price">El precio es ${adDetail.price} €</p>
    `
}