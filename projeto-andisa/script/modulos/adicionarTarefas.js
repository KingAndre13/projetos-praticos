export function adicionarTarefas () {
    let botaoAdicionar = document.querySelector('#opcaoAdicionar');
    let criarTarefas = document.querySelector('#criarTarefa');
    let botaoTarefa = document.querySelector('#botaoTarefa');
    let tarefasPrincipais = document.querySelector('#tarefasPrincipais');


    botaoAdicionar.addEventListener('click', () => {
        criarTarefas.style.display = 'block';
    });

    botaoTarefa.addEventListener('click', () => {
        criarTarefas.style.display = 'none';

        let tarefaCriada = document.createElement('p');

        let tituloTarefa = document.querySelector('#titleTarefa');
        let getTituloTarefa = tituloTarefa.value;

        let horarioTarefa = document.querySelector('#horarioTarefa');
        let getHorarioTarefa = horarioTarefa.value;

        let dataTarefa = document.querySelector('#dataTarefa');
        let getDataTarefa = dataTarefa.value;


        tarefaCriada.innerHTML = `<strong>Tarefa: </strong> ${getTituloTarefa} - <strong>Horário: </strong>${getHorarioTarefa} - <strong>Data: </strong>${getDataTarefa}`;
        tarefasPrincipais.appendChild(tarefaCriada);

    });



}