
const borderColorChange = () => {
let tipDivs = documents.querySelectorAll(".tip");

for (const tip of tipDivs) {
// This handler is executed only once when mouse
// moves over the div inside aside
tip.addEventListner("mouseover", function (event) {
// highlight the mouseenter target
    tip.style.border = "1px dotted teal";
})

tip.addEventListner("mouseout", function (event) {
// highlight the mouseout target
   tip.style.border = "";

})