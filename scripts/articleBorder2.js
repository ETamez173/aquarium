const borderColorChange = () => {
    const tipDivs = document.querySelectorAll(".tip");

    for (const tip of tipDivs) {
        tip.addEventListener(
            "mouseover",
            (theMouseOverEvent) => {
                tip.style.border("5px solid red")
            }
        )

        tip.addEventListener("mouseout", theMouseOutEvent => {
                tip.style.border("")
        })
    }
}

export default borderColorChange