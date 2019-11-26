/**
 *  TipComponent which renders individual tip objects as HTML
 */
const TipComponent = (tip) => {
    return `
    <section class="tipList">
    <div class="tipList2">
            <h4>${tip.title}</h4>
            <!-- description -->
            <p>${tip.tiptext}</p>
                       
    </div>
    </section>
`
}

export default TipComponent