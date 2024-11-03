
export function newElement(tag, atributos = {}, html = '') {
    const elemento = document.createElement(tag)
    for (const chave in atributos) {
        if (atributos.hasOwnProperty(chave)) {
            elemento.setAttribute(chave, atributos[chave])
        }
    }
    if (html) {
        elemento.innerHTML = html
    }
    return elemento
}
