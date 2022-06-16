const tooltips = document.querySelectorAll('.tooltips');

tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
})

function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    
    onMouseMove.tooltipBox = tooltipBox;
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;

    this.addEventListener('mouseleave', onMouseLeave);
    this.addEventListener('mousemove', onMouseMove);
}

const onMouseLeave = {
    tooltipBox: '',
    element: '',
    handleEvent() {
        this.tooltipBox.remove();
        this.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove);
    }
}

const onMouseMove = {
    handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + 'px';
        this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
}

function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    //css
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
}