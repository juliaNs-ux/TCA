
const formulario = document.querySelector("#form-horarios");
const medicoSelect = document.querySelector("#crm");

async function buscarMedicos() {

    const { data, error } =
         await supabase
        .from('medicos')
        .select('crm, nome');

    if (error) 
    {
      alert("Erro ao buscar médicos!");

    } else
    {data.forEach(function(medico) 
        {  const opcao = document.createElement("option");

            opcao.value = medico.crm;
            opcao.textContent = medico.nome;

            medicoSelect.appendChild(opcao);

        });

    }

}


formulario.addEventListener("submit", async function(event) 
{

    event.preventDefault();
    const crm = medicoSelect.value;
    const dia = document.querySelector("#dia_semana").value;
    const inicio = document.querySelector("#horario_inicio").value;
    const fim = document.querySelector("#horario_fim").value;

    if (fim <= inicio)
    {alert("O horário final deve ser depois do horário inicial!");
        return;

    }


    const { data, error } = await supabase
        .from('horarios_medicos')
        .insert
        ([ {    crm_medico: crm,
                dia_semana: dia,
                horario_inicio: inicio,
                horario_fim: fim
            }
        ]);

    if (error) 
    {
        alert("Erro ao cadastrar horário!")

    } else 
    {   alert("Horário cadastrado com sucesso!");
        formulario.reset();
    }

});


buscarMedicos();

<script type="module" src="/js/horarios.js"></script>
