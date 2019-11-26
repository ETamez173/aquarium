


import { useFish } from "/scripts/fish/FishDataProvider.js"
import FishComponent from "/scripts/fish/fish.js"

const contentElement = document.querySelector(".fishList")

const FishListComponent = () => {
    const fishes = useFish()

    contentElement.innerHTML += `
        <section class="fishList">
        ${
        fishes.map(
            (currentFish) => {
                return FishComponent(currentFish)
            }
        ).join("")
        }
    </section>
   `
}


export default FishListComponent