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

$(document).ready(function() {
    $('.side-menu li:has(ul)').click(function(e) {
        e.preventDefault();

        if ($(this).hasClass('activado')) {
            $(this).removeClass('activado');
            $(this).children('ul').slideUp();
        } else {
            $('.side-menu li ul').slideUp();
            $('.side-menu li').removeClass('activado');
            $(this).addClass('activado');
            $(this).children('ul').slideDown();
        }
    });
});

$('.menu li ul li a').click(function() {
    window.location.href = $(this).attr("href");
});