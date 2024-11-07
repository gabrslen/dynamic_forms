import { switchFields } from "./fields.js"

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

export function createForm(className, container) {
    const form = newElement('form', { 'id': `form-${className}`, 'class': `form-${className}` })
    const blur = newElement('div', { 'id': 'form-blur', 'class': 'form-blur' })
    container.appendChild(form)
    container.appendChild(blur)
    blur.style.display = 'block'
    form.style.display = 'block'

    blur.addEventListener("click", function () {
        blur.style.display = "none"
        form.style.display = "none"
    })
}
