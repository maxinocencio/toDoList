document.getElementById('botao1').onclick = function() {
    if (document.getElementById('tarefa').value.length == 0 ) {
        alert('Digite algo')
    }

    else {
        document.getElementById('tarefas').innerHTML += `
        <div class = "tarefaNova">
            <p id = "nomeTarefa">
                ${document.getElementById('tarefa').value}
            </p>
            <button id="apagar">
                apagar
            </button>
        </div>
        `;

        var tarefasAdicionadas = document.querySelectorAll('#apagar');

        for (var i=0; i < tarefasAdicionadas.length; i++) {
            tarefasAdicionadas[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        var tarefasP = document.querySelectorAll('#nomeTarefa');

        for (var i = 0; i < tarefasP.length; i++) {
            tarefasP[i].onclick = function() {
                this.classList.toggle('feito');
            }
        }

        document.getElementById('tarefa').value = "";

        var todasTarefas = document.querySelectorAll('.view');

    }
}