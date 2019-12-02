$(document).ready(function() {

    $(".button-collapse").sideNav();

    $('.preloader-background').delay(1700).fadeOut('slow');

    $('.preloader-wrapper')
        .delay(1700)
        .fadeOut();

    $('.slider').slider({
        indicators: true,
        duration: 1000
    });

    var anio = (new Date).getFullYear();

    $(".footer small.copyright").html("Copyright &copy; " + anio + " IJJI Foundation | Todos los derechos reservados");
});