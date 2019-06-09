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
            $('#event_result').html('Selected: ' + r.join(', '));
        })
});