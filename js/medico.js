
import supabase from "./supabase.js"

const banco = supabase
const envio = document.querySelector("#formMedico")

async function Cadastrarmed(event) {
    event.preventDefault()

    const crm = document.querySelector("#crm").value
    const nome = document.querySelector("#nome").value
    const telefone = document.querySelector("#telefone").value
    const email = document.querySelector("#email").value
    const especialidade = document.querySelector("#especialidade").value

    const { error } = await banco
        .from('medicos')
        .insert({
            crm: crm,
            nome: nome,
            telefone: telefone,
            email: email,
            especialidade: especialidade
        })

    if (error) {
        alert('Erro ao cadastrar')
        console.error(error)
    } else {
        alert('Médico Cadastrado')
        envio.reset()
    }
}

envio.addEventListener("submit", Cadastrarmed)
