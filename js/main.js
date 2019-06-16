$(function() {
    //Cria uma instância quando o DOM estiver pronto
    $('#jstree').jstree();
    // Interage com a árvores
    $('#jstree')
        // Percorre a árvore para escrever a informação
        .on('changed.jstree', function(e, data) {
            var i, j, r = [];
            for (i = 0, j = data.selected.length; i < j; i++) {
                r.push(data.instance.get_node(data.selected[i]).text);
            }
            const header = `<button onclick="clickInf()" id="inf">Informações</button>
                            <button onclick="clickDir()" id="dir">Diretorios</button>`
            const body = `Selected:  ${r.join(', ')}`
            $('#event_header').html(header);
            $('#event_body').html(body);
        })
});
//a
//$('#event_result').html('Selected: ' + r.join(', '));

function clickDir() {
    const texto1 = `Diretorios`
    $('#event_body').html(texto1);
}

function clickInf() {
    const texto2 = `Teste!!!!!!!!!!!!!!`
    $('#event_body').html(texto2);
}