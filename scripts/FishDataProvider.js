
const fishCollection = [
    {
        name: "Bart",
        food: ["algae", "crustaceans"],
        location: "Hawaii",
        length: 2,
        species: "Betta Fish",
        img: "fish.jpg"
    },
{
        name: "Tina",
        food: ["algae", "plankton"],
        location: "Morocco",
        length: 200,
        species: "Hammerhead Shark",
        img: "fish.jpg"
    },
{
        name: "Bubbles",
        food: ["coral", "plankton"],
        location: "Djibouti",
        length: 20,
        species: "Betta Fish",
        img: "fish.jpg"
    },
{
        name: "Molly",
        food: ["fish flakes", "pizza"],
        location: "Harry's Fishworld",
        length: 2,
        species: "Black Molly",
        img: "fish.jpg"
    }
]

// console.log(fishCollection);

// This is new code. Add this.
export const useFish = () => {
    return fishCollection

    

    // immutability: our core, raw data should be private and hidden