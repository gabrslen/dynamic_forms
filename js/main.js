
import { newElement, createForm } from "./elements.js"
const root = document.getElementById('root')

const divMenu = newElement('div', {'id': 'div-menu', 'class': 'div-menu'}, '')
const botao = newElement('button', {'id': 'btn-class', 'class': 'btn-class'}, 'Abrir')
const container = newElement('div', {'id':'div-container','class':'div-container'})
root.appendChild(divMenu)
root.appendChild(container)
divMenu.appendChild(botao)

botao.addEventListener('click', () => {
    const divContainer = document.getElementById('div-container')
    divContainer.innerHTML = ''
    createForm('formulario', divContainer)
})

document.addEventListener('DOMContentLoaded', () => {
    // Tempo de execuçao
})
