$( document ).ready(function(){  
    $("#playarrow").click(function(e){
        $(".inicio-center-image").toggleClass("slideOutLeft");
        $(".inicio-center-popup").toggleClass("slideInDown");
        $(".inicio-center-popup").toggleClass("hiddenme");
        $(".fecha-partida span").toggleClass("hiddenme");
        $(".tipo-partida span").toggleClass("hiddenme");
        $(".nombre-partida span").toggleClass("hiddenme");
        $("#playarrow").toggleClass("hiddenme");
    });
    $("#playarrowmobile").click(function(e){
        $(".inicio-center-popup-mobile").toggleClass("hiddenme");
        $(".fecha-partida").toggleClass("hiddenme");
        $(".tipo-partida").toggleClass("hiddenme");
        $(".nombre-partida").toggleClass("hiddenme");
        $(".icono-play").toggleClass("hiddenme");
    });    
});