// Quando todos os elementos da tela carregarem
// o slide roda e a nossa tela de load some
// TUDO DENTRO DE $(window).load SERA EXECUTADO QUANDO TODO O SITE FOR CARREGADO PELO CLIENTE
$(window).load(function () {
    
    $('#loader-wrapper, #loading-text').velocity("fadeOut", {
        duration: 500
    });
    
    $(".rslides").responsiveSlides({
        startidx: 0
    });
    
    $("#sobre-div").mCustomScrollbar({
        theme: "rounded-dots",
        scrollButtons: {
            enable: true
        },
        scrollInertia: 100
    });
    // NOTE Workround pesado
    if ($('body').width() <= 800) {
        $('.menu-items').velocity('fadeOut', {
            duration: 500
        });
    }
});

$(document).ready(function () {

    var hasFooter = false;
    var full_height = "99.1%";
    var original_height = "78px";

    // Quando o menu responsivo não está sendo exibido
    $('.show').on('click', function () {
        $('.menu-items').velocity('fadeIn', {
            duration: 500
        });

        if ($('body').width() <= 800) {
            $('#sobre-div, #projetos-div, #contato-div, #infra-div, #main-text').velocity("fadeOut", {
                duration: 500
            });
        }
    });
    // Quando o menu responsivo está sendo exibido
    $('.hide').on('click', function () {
        $('.menu-items').velocity('fadeOut', {
            duration: 500
        });
    });

    $("#sobre, #projetos, #contato, #infra").on('click', function () {
        // Aumenta o tamanho da barra de baixo
        $('.fixed-nav-bar').css({
            "height": full_height,
            'background': 'rgba(0, 0, 0, 0.75)',
            'border-top': '7px solid red'
        });
        $('#mid-arrow').css('display', 'block');
        $(this).css('opacity', 1);
        // ps: as animações do velocity quase sempre escondem o elemento também
        if (!hasFooter) {
            hasFooter = true
            $('footer').velocity("slideDown", {
                duration: 500
            });
        }
        $('#main-text').velocity("fadeOut", {
            duration: 500
        });
        
        if ($('body').width() <= 800) {
            $('.menu-items').velocity('fadeOut', {
                duration: 500
            });
        }
        return false;
    });

    $("#mid-arrow").on('click', function () {

        hasFooter = false;
        // Remove a borda dos botões e tudo alterado por esse .js
        $('#sobre, #projetos, #contato, #infra').removeAttr('style');
        // Esconde as respectivas divs
        $('#sobre-div, #projetos-div, #contato-div, #infra-div').velocity("fadeOut", {
            duration: 500
        });
        // slideUp esconde o footer ???
        $('footer').velocity("slideUp", {
            duration: 500
        });
        $('#main-text').css('display', 'block');
        $('#main-text').velocity("fadeIn", {
            duration: 500
        });
        // Retorna a barra de baixo a sua posição original
        $('.fixed-nav-bar').css({
            "height": original_height,
            'background': 'rgba(0, 0, 0, 0)',
            'border-top': '7px solid rgba(0, 0, 0, 0)'
        });
        $('#mid-arrow').css({
            "display": "none"
        });
    });

    $("#sobre").on('click', function () {
        $('#projetos, #contato, #infra').css({
            'border-bottom': 'none',
            opacity: 0.5
        });
        $('#projetos-div, #contato-div, #infra-div').css('display', 'none');
        $('#sobre-div').velocity("fadeIn", {
            duration: 500
        });
    });
    $("#projetos").on('click', function () {
        $('#sobre, #contato, #infra').css({
            'border-bottom': 'none',
            opacity: 0.5
        });
        $('#sobre-div, #contato-div, #infra-div').css('display', 'none');
        $('#projetos-div').velocity("fadeIn", {
            duration: 500
        });
    });
    $("#contato").on('click', function () {
        $('#sobre, #projetos, #infra').css({
            'border-bottom': 'none',
            opacity: 0.5
        });
        $('#sobre-div, #projetos-div, #infra-div').css('display', 'none');
        $('#contato-div').velocity("fadeIn", {
            duration: 500
        });
    });
    $("#infra").on('click', function () {
        $('#sobre, #projetos, #contato').css({
            'border-bottom': 'none',
            opacity: 0.5
        });
        $('#sobre-div, #projetos-div, #contato-div').css('display', 'none');
        $('#infra-div').velocity("fadeIn", {
            duration: 500
        });
    });

});