
import { newElement } from "./elements.js"

const container = document.getElementById('container')

const divMenu = newElement('div', {'id': 'div-menu', 'class': 'div-menu'}, '')
const botao = newElement('button', {'id': 'btn-class', 'class': 'btn-class'}, 'Botão')

container.appendChild(divMenu)
divMenu.appendChild(botao)

botao.addEventListener('click', () => {
    // Lógica do botão
})

document.addEventListener('DOMContentLoaded', () => {
    // Tempo de execuçao
})
