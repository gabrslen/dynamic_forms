
export function newElement(tag, attributes = {}, html = '') {
    const element = document.createElement(tag)
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element.setAttribute(key, attributes[key])
        }
    }
    if (html) {
        element.innerHTML = html
    }
    return element
}
