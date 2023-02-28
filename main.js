let priceAccordion = document.querySelectorAll('.prices__accordion-item');

priceAccordion.forEach(el => {
    el.addEventListener('click', onAccordionClick, false)
})
function onAccordionClick(evt) {
    priceAccordion.forEach(el => {
        if(el === evt.currentTarget) {
            evt.currentTarget.style.height = '300px'
        }
        if(el !== evt.currentTarget) {
            el.style.height = '50px'
        }
    })
}
