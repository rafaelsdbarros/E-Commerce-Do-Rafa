//Contato
const fullName = "Rafael Barros"
const telefone = "(11) 91234-5678"
const whats = "(11) 91234-5678"
const email = "rafastore@gmail.com"
//Endereço
const logradouro = "Rua das lojas, 133 - São Paulo"
const cidade = "São Paulo - SP"
const cep = "00000-000"
//Redes
const insta = "@rafastore"
const facebook = "@rafastore"
const linkedin = "@rafastore"

const date = new Date()

window.addEventListener('load', function() {
    setupModal()
    loadFooterInfo()
});

function getWeekDay(weekDay) {
    switch (weekDay) {
        case 0:
            return "Domingo"
           break; 
        case 1:
            return "Segunda-feira"
           break;
        case 2:
            return "Terça-feira"
           break;   
        case 3:
            return "Quarta-feira"
           break;   
        case 4:
            return "Quinta-feira"
           break;                           
        case 5:
             return "Sexta-feira"
            break;
        case 6:
            return "Sabado"
            break;                
        default:
            break;
    }
}

function getFullDate() {
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const weekDay = date.getDay()

    const fullDate = `${day}/${month}/${year} - ${getWeekDay(weekDay)}`
    return fullDate
}

function setupModal() {

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    //close modal on click close.
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(e){
        if (e.target ==  modal) {
            modal.style.display = "none";
        }
    }

    //Display content
    const divContent = document.getElementById("divContent");
    divContent.innerHTML = 
    `   
        <br>
        <hr>
        <br>
        <p>Sou <b> ${fullName} </b> criador deste site, é um prazer receber-los(as)! </p>
        <p>Formando em ADS/Mackenzie</p>
        <p>Hoje é ${getFullDate()}</p>
        <br>
        <i><strong>Desejo ótimas compras :) </strong></i>
        <br>
        <br>
        <hr>
    `
    modal.style.display = "block"
}

function loadFooterInfo() {

    const elementContato = document.getElementById("divContato");
    const elementEndereco = document.getElementById("divEndereco");
    const elementRedes = document.getElementById("divRedes");

    elementContato.innerHTML = 
    `   
        <p class="titleDiv">Entre em contato</p>
        <p>Telefone: ${telefone}</p>
        <p>Whatsapp: ${whats}</p>
        <p>Email: ${email}</p>
    `

    elementEndereco.innerHTML = 
    `
        <p class="titleDiv">Endereço</p>
        <p>${logradouro}</p>
        <p>${cidade}</p>
        <p>${cep}</p>
    `
    elementRedes.innerHTML = 
    `
        <p class="titleDiv">Nossas redes sociais</p>
        <p>Instagram: ${insta}</p>
        <p>Facebook: ${facebook}</p>
        <p>LinkedIn: ${linkedin}</p>
    `
}