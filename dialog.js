const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

// Show Bart's details when the button is clicked

// 1
document.querySelector("#button--jawsie").addEventListener(
    "click",
    theClickEvent => {
      //  console.log("hi")
        const theDialog = document.querySelector("#details--jawsie")
        theDialog.showModal()
    }
)

// 2

document.querySelector("#button--dangles").addEventListener(
    "click",
    theClickEvent => {
      
        const theDialog = document.querySelector("#details--dangles")
        theDialog.showModal()
    }
)

// 3

document.querySelector("#button--bubbles").addEventListener(
    "click",
    theClickEvent => {
      
        const theDialog = document.querySelector("#details--bubbles")
        theDialog.showModal()
    }
)
// 4

document.querySelector("#button--barry").addEventListener(
    "click",
    theClickEvent => {
      
        const theDialog = document.querySelector("#details--barry")
        theDialog.showModal()
    }
)

// 5



document.querySelector("#button--bitey").addEventListener(
    "click",
    theClickEvent => {
      
        const theDialog = document.querySelector("#details--bitey")
        theDialog.showModal()
    }
)
// 6



document.querySelector("#button--snappy").addEventListener(
    "click",
    theClickEvent => {
      
        const theDialog = document.querySelector("#details--snappy")
        theDialog.showModal()
    }
)



}

export default initializeDetailButtonEvents