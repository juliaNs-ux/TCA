import supabase from "./supabase.js"

const banco = supabase

const formulario = document.querySelector("#formPaciente")

formulario.addEventListener("submit", async function(event) 
{ event.preventDefault()

    const cpf = document.querySelector("#cpf").value
    const nome = document.querySelector("#nome").value
    const telefone = document.querySelector("#telefone").value
    const email = document.querySelector("#email").value
    const nascimento = document.querySelector("#nascimento").value

    if (cpf == "" || nome == "" || telefone == "") 
    { alert("Preencha os campos obrigatórios!")
      return
    }

    if (cpf.length != 11 || isNaN(cpf)) 
    { alert("CPF invalido!")
      return
    }

    if (nome.split(" ").length < 2) 
    { alert("Digite seu nome completo!")
     return
    }

    if (telefone.length < 10 || telefone.length > 11 || isNaN(telefone)) 
    {alert("Telefone inválido!")
    return
    }

    const { data } = await banco
        .from("pacientes")
        .select("cpf")
        .eq("cpf", cpf)

    if (data.length > 0)
   {alert("CPF já cadastrado!")
        return
    }

    const { error } = await banco
        .from("pacientes")
        .insert({
            cpf: cpf,
            nome: nome,
            telefone: telefone,
            email: email,
            nascimento: nascimento
        })

    if (error) 
    {alert("Erro ao cadastrar: " + error.message)
    } 
    else 
    {alert("Paciente cadastrado com sucesso!")
        formulario.reset()
    }
})
