/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import initializeDetailButtonEvents from './dialog.js'
import addMouseOverEventListeners from './hightlight.js'

import { useFish } from '../scripts/fish/FishDataProvider.js'
import FishListComponent from '../scripts/fish/FishList.js'

import { useTip } from '../scripts/tips/TipDataProvider.js'

import TipListComponent from '../scripts/tips/TipList.js'

// import borderColorChange from './articleBorder.js'
// import borderColorChange from './articleBorder2.js'

// initializeDetailButtonEvents()

// borderColorChange() 

const allOfTheFish = useFish()

console.log("all of the fish", allOfTheFish)

for (const fish of allOfTheFish) {
    console.log("individual fish object", fish)
}

const allOfTheTips = useTip()

console.log("all of the tips", allOfTheTips)

for (const tips of allOfTheTips) {
    console.log("individual tip object", tips)
}


initializeDetailButtonEvents()  
addMouseOverEventListeners()

FishListComponent()
TipListComponent()