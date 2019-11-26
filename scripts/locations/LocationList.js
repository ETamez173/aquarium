/**
 *  TipListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

import { useTravTip } from "/scripts/locations/LocationDataProvider.js"
import LocComponent from "/scripts/locations/Location.js"

const TravListComponent = () => {

    const contentElement = document.querySelector(".travAdvice")
  
    const travTips = useTravTip()

   let allTipHTML = ""
    
for (const travTip of travTips)  {
    LocComponent(travTip)
 const tipHTML = LocComponent(travTip)
 allTipHTML += tipHTML

 
}

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        
    
    <section class="tipList">
           ${allTipHTML}
        </section>
    `

}

export default TravListComponent