
    const harvestCollection = [
        {
            city: "Cancun",
            country: "Mexico",
            latitude: "187",
            longitude: "280",
            image: "/images/cancun_p1.jpg" 
        },
        {
            city: "Key West",
            country: "Florida USA",
            latitude: "187",
            longitude: "280",
            image: "/images/florida_p1.jpg"  
        },
        {
            city: "Li",
            country: "China",
            latitude: "187",
            longitude: "280",
            image: "/images/china_p1.jpg" 
        },
        {
            city: "Bankok",
            country: "Thailand",
            latitude: "187",
            longitude: "280",
            image: "/images/thailand_p1.jpg" 
        }
    ]
    
    
    
    // This is new code. Add this.
    export const useHarvest = () => {
        return harvestCollection
        
    }

    // console.log(harvestCollection);