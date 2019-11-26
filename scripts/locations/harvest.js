/**
 *  TipComponent which renders individual tip objects as HTML
 */
const HarvComponent = (harv) => {
    return `
        <div class="harvestLoc">
            <div>
            <img class="harv__image" src="${harv.image}" alt="">
            </div>
            <div class="harv__country">${harv.city}</div>
            <div class="harv__country">${harv.country}</div>
            <div>Latitude: ${harv.latitude}</div>
            <div>Longitude: ${harv.longitude}</div>         
        </div>
    `
}

export default HarvComponent