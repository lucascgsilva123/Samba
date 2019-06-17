$(function() {
    fetch('../data/user.json')
        .then(res => res.json())
        .then(json => clickUser(json))

    function clickUser(j) {
        $('#event_user').jstree({
            'core': {
                'data': j
            }
        });
    }
});