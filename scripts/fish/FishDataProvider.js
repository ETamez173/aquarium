
const fishCollection = [
    {
        name: "Bart",
        food: ["algae", "crustaceans"],
        location: "Hawaii",
        length: 2,
        species: "Betta Fish",
        image: "/images/betta-fish.jpg" 
    },
    {
        name: "Tina",
        food: ["algae", "plankton"],
        location: "Morocco",
        length: 200,
        species: "Hammerhead Shark",
        image: "/images/hammerhead-shark.jpg" 
    },
    {
        name: "Bubbles",
        food: ["coral", "plankton"],
        location: "Djibouti",
        length: 20,
        species: "Gold Fish",
        image: "/images/goldfish-fish.jpg" 
    },
    {
        name: "Molly",
        food: ["fish flakes", "pizza"],
        location: "Harry's Fishworld",
        length: 2,
        species: "Black Molly",
        image: "/images/black-molly.jpg" 
    }
]

// console.log(fishCollection);

// This is new code. Add this.
export const useFish = () => {
    return fishCollection
    
}

// export default useFish //
// Steve spoke about on 112519 at 937am hear notes

    // immutability: our core, raw data should be private and hidden