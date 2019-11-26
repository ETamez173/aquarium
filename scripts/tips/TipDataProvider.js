const tipCollection = [
    {
        title: "Clean the Water",
        tiptext: "Make sure you alwasy keep your fish in water."
    },
    {
        title: "Feed the fish the right food",
        tiptext: "It's important to feed the fish the right food."
    },
    {
        title: "Clean the tank regulary",
        tiptext: "Clean the tank every two weeks."
    },
    {
        title: "Other care",
        tiptext: "Other care ........etc."
    }
]


// This is new code. Add this.
export const useTip = () => {
    return tipCollection
}

// export default useFish //

    // immutability: our core, raw data should be private and hidden