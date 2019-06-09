$(function() {
    // 6 create an instance when the DOM is ready
    $('#jstree').jstree();
    // 8 interact with the tree - either way is OK
    $('button').on('click', function() {
        $('#jstree').jstree(true).select_node('child_node_1');
        $('#jstree').jstree('select_node', 'child_node_1');
        $.jstree.reference('#jstree').select_node('child_node_1');
    });
});