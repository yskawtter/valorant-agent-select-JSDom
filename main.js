function selectAgente() {
const agenteIcon = document.querySelectorAll('.js-agt-icon div')

const agentePrincipal = document.querySelectorAll('.js-agt-principal div')

const agenteSkill = document.querySelectorAll('.agente-skillspec')

const agenteLista = document.querySelectorAll('.js-agt-lista li')

agenteIcon[0].classList.remove('bloq')

// ICONE DO AGENTE
function activeAgtIcon (index) {
    agenteIcon.forEach((ev) => {
        ev.classList.add('bloq')
    })
    agenteIcon[index].classList.remove('bloq')
}

// IMAGEM PRINCIPAL DO AGENTE
function activeAgtPrin (index) {
    agentePrincipal.forEach((agtPrin) => {
        agtPrin.classList.add('bloq')
    })
   agentePrincipal[index].classList.remove('bloq')
}

// HABILIDADE DO AGENTE
console.log(agenteSkill)
function activeAgtSkill (index) {
    agenteSkill.forEach((agtSkill) => {
        agtSkill.classList.add('bloq')
    })
    agenteSkill[index].classList.remove('bloq')
}

agenteLista.forEach((agtLista, index) => {
    agtLista.addEventListener('click', () => {
        activeAgtIcon(index)
        activeAgtPrin(index)
        activeAgtSkill(index)
    })
})
}
selectAgente()


function activeFirstSkill() {
const agtSkillP = document.querySelectorAll('.js-accordion p')

agtSkillP.forEach((it) => {
    it.classList.add('bloq')
})


// PART 2 
const agtSkillAccordion = document.querySelectorAll('.js-accordion img')

function activeSkillAccordion() {
    agtSkillAccordion.forEach((ev) => {
        ev.nextElementSibling.classList.add('bloq')
    })
    this.nextElementSibling.classList.toggle('bloq')
}

agtSkillAccordion.forEach((item) => {
    item.addEventListener('click', activeSkillAccordion)
})

}
activeFirstSkill()


function timerSetAgent() {
function startTimer(duration, display) {
    let timer = duration, seconds

    setInterval( () => {
    seconds = parseInt(timer % 60, 10)
        
    seconds = seconds < 10 ? '0' + seconds : seconds;
    display.textContent = seconds 

    if(--timer < 0) {
        timer = duration
    }

    }, 1000);
}
window.onload = () => {
    let duration = 60
    display = document.querySelector('#timer')

    startTimer(duration, display)
}
}
timerSetAgent()