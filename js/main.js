//Contato
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

window.addEventListener('load', function() {
    loadFooterInfo()
});

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