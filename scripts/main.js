/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import initializeDetailButtonEvents from './dialog.js'
import addMouseOverEventListeners from './hightlight.js'
import { usefish} from './FishDataProvider.js'

// import borderColorChange from './articleBorder.js'
// import borderColorChange from './articleBorder2.js'

initializeDetailButtonEvents()
addMouseOverEventListeners()
// borderColorChange() 

const allOfTheFish = usefish ()

console.log("all of the fish", allOfTheFish)

for (const fish of allOfTheFish) {
console.log("individual fish object" fish)
}