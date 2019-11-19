const initializeLocationButtonEvents = () => {
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
document.querySelector("#button--jawsieLoc").addEventListener(
    "click",
    theClickEvent => {
      //  console.log("hi")
        const theDialog = document.querySelector("#details--jawsieLoc")
        theDialog.showModal()
    }
)

// 2




}

export default initializeLocationButtonEvents