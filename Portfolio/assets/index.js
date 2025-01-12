$(document).ready(function () {
    $('.contenido').hide();
    $('#inicio').show();
    $(".esText").hide();
    $('#eglTraduc').click(function () {
        $(".esText").hide();
        $(".egText").show();
    });
    $('#esTraduc').click(function () {
        $(".esText").show();
        $(".egText").hide();
    });
});
