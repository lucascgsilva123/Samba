// Hora{
var dateinfo = document.querySelector('#datehora');

function RetornaDataHoraAtual() {
    var dNow = new Date();
    dateinfo.value = dNow.getDate() + '/' + (dNow.getMonth() + 1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes() + ':' + dNow.getSeconds();

}
setInterval(RetornaDataHoraAtual, 1000);
// }