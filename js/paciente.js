
const envio = document.querySelector("#submit")

envio.addEventListener("click", function(event) {
    event.preventDefault()

    const cpf = document.querySelector("#cpf").value
    const nome = document.querySelector("#nome").value
    const telefone = document.querySelector("#telefone").value
    const email = document.querySelector("#email").value
    const nascimento = document.querySelector("#nascimento").value

    
    
    console.log(cpf)
    console.log(nome)
    console.log(telefone)
    console.log(email)
    console.log(nascimento)
})