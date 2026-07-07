export function adicionarTarefas () {
    let botaoAdicionar = document.querySelector('#opcaoAdicionar');
    let criarTarefas = document.querySelector('#criarTarefa');
    let botaoTarefa = document.querySelector("#botaoTarefa");


    botaoAdicionar.addEventListener('click', () => {
        criarTarefas.style.display = 'block';
    });

    botaoTarefa.addEventListener('click', () => {
        criarTarefas.style.display = 'none';
    });



}