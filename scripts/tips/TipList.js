/**
 *  TipListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

import { useTip } from "../tips/TipDataProvider.js"
import TipComponent from "../tips/Tips.js"

const TipListComponent = () => {

    // Get a reference to the `<article class="content">` element //
    const contentElement = document.querySelector(".tipList")
    // const contentElement = document.querySelector("insert selector here") //
    const tips = useTip()

   let allTipHTML = ""
    
for (const tip of tips)  {
    TipComponent(tip)
 const tipHTML = TipComponent(tip)
 allTipHTML += tipHTML

 
}

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        
    
    <section class="tipList">
           ${allTipHTML}
        </section>
    `

}

export default TipListComponent