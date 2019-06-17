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
                            <button onclick="diretorios()" id="dir">Diretorios</button>`
            const body = `Selected:  ${r.join(', ')}`
            $('#event_header').html(header);
            $('#event_body').html(body);
        })
});

//$('#event_result').html('Selected: ' + r.join(', '));

function clickDir(j) {
    $('#event_body').html('<div id="diretorio"></div>')
    $('#diretorio').jstree({
        'core': {
            'data': j
        }
    });
}

function clickInf() {
    const texto2 = `Teste!!!!!`
    $('#event_body').html(texto2);
}

function diretorios() {
    fetch('../data/folder.json')
        .then(res => res.json())
        .then(json => clickDir(json))
}