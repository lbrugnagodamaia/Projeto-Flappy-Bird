function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    Element.className = className
    return elem
}

function Barreira(reserva = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reserva ? corpo : borda)
    this.elemento.appendChild(reserva ? borda : corpo)
}