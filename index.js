const botaoTurn = document.querySelector('#turn')
const cardS = document.querySelector('#card1')

botaoTurn.addEventListener('click', (e) => {
    cardS.classList.toggle('flip')
})

const botaoModal = document.querySelector('#btn')
const caixaModal = document.querySelector('.modal-box')

botaoModal.addEventListener('click', () => {
    alert()
    
})