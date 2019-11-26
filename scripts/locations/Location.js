/**
 *  TipComponent which renders individual tip objects as HTML
 */
const LocComponent = (travTip) => {
    return `
    <section class="travAdvice">
    <div class="travList2">
            <h4>${travTip.title}</h4>
            <!-- description -->
            <p>${travTip.tiptext}</p>
           
           
    </div>
    </section>
`
}

export default LocComponent