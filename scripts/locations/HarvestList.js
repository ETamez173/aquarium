


import { useHarvest } from "/scripts/locations/HarvestDataProvider.js"
import HarvComponent from "/scripts/locations/harvest.js"

const contentElement = document.querySelector(".harvList")

const HarvListComponent = () => {
    const harvests = useHarvest()

    // stopped here above useHarv etc

    contentElement.innerHTML += `
        <section class="harvList">
        ${
        harvests.map(
            (currentHarv) => {
                return HarvComponent(currentHarv)
            }
        ).join("")
        }
    </section>
   `
}


export default HarvListComponent