
 $(document).ready(function(){   
    $('.modalagenda').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            //alert("Ready");
            console.log('modal, ready');
        },
        complete: function() { 
            //alert('Closed'); 
            console.log('modal, complete');
        } // Callback for Modal close
    });
});

var i;
function contadormas(input_id){ 
    var cant = document.getElementById(input_id); 
    if(cant.value>=0){
        i = cant.value;
    }else{
        i = 0;
    }
    i++; 
    cant.value = i;
}
function contadormenos(input_id){
    var cant = document.getElementById(input_id); 
    if(cant.value>0){
        i = cant.value;
        i--;
        cant.value = i;
    }
}

$("#puntos_equipo_1_menos").click(function(){
    contadormenos("puntos_equipo_1");
});
$("#puntos_equipo_1_mas").click(function(){
    contadormas("puntos_equipo_1");
});
$("#puntos_equipo_2_menos").click(function(){
    contadormenos("puntos_equipo_2");
});
$("#puntos_equipo_2_mas").click(function(){
    contadormas("puntos_equipo_2");
});
$("#puntos_equipo_3_menos").click(function(){
    contadormenos("puntos_equipo_3");
});
$("#puntos_equipo_3_mas").click(function(){
    contadormas("puntos_equipo_3");
});
$("#puntos_equipo_4_menos").click(function(){
    contadormenos("puntos_equipo_4");
});
$("#puntos_equipo_4_mas").click(function(){
    contadormas("puntos_equipo_4");
});
/*
$(".participante").change(function(e){
    var total_participantes = 20;    
    var hay_seleccionados = checkseleccionados();
    if(hay_seleccionados){
        alert("You just clicked checkbox with the id " + this.id)
    }
});

function checkseleccionados(){
    var numberOfChecked = $('input:checkbox:checked').length;
    if(numberOfChecked==0){
        return false;
    }
    return true;
}
*/

function over(ev) {
    if($(ev.target).hasClass('can-drag-here')){
        var elemento = ev.target;
    }else if($(ev.target.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode;
    }else if($(ev.target.parentNode.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode.parentNode;
    }
    elemento.style.border = '2px dotted #555';  
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    if($(ev.target).hasClass('can-drag-here')){
        var elemento = ev.target;
    }else if($(ev.target.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode;
    }else if($(ev.target.parentNode.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode.parentNode;
    }       
    ev.preventDefault();
    elemento.style.border = '';
    elemento.appendChild(document.getElementById(data));
    elemento.checked = true;
    var elementodyclase = '#' +elemento.id + ' input.participante';
    if (elemento.id == 'list-equipos') {
        $(elementodyclase).prop("checked", false);
    } else {
        $(elementodyclase).prop("checked", true);
    }
    
    console.log(elementodyclase);
}

function enter(ev) {
    if($(ev.target).hasClass('can-drag-here')){
        var elemento = ev.target;
    }else if($(ev.target.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode;
    }else if($(ev.target.parentNode.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode.parentNode;
    }
    elemento.style.border = '2px dotted #555';     
}

function leave(ev) {
    if($(ev.target).hasClass('can-drag-here')){
        var elemento = ev.target;
    }else if($(ev.target.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode;
    }else if($(ev.target.parentNode.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode.parentNode;        
    }
    elemento.style.border = '';     
}

//  votos   

$(document).ready(function(){ 
    $(".voteaction").click(function(){
        var productId = $(this).attr('class').replace('voteaction ', '');
        var id = $(this).attr('id');
        var teamId = id.replace("buttonteamvote", "");
        var dataidea = $(this).attr('data-idea');
        var inputIdeaId = "idea" + dataidea;
        var labelIdeaId = "labelidea" + dataidea;
        var inputIdeaTeamId = "ideateam" + dataidea;
        var buttonIdeaTeam = "buttonidea"+dataidea+"team1";
        var inputIdeaId = "#"+inputIdeaId;
        var labelIdeaId = "#"+labelIdeaId;
        var inputIdeaTeamId = "#"+inputIdeaTeamId;
        $(inputIdeaId).prop( "checked", true );        
        $(inputIdeaTeamId).val(teamId);
        $(labelIdeaId).removeClass();
        $(labelIdeaId).addClass("label-checked-" + teamId);
        $(".buttonidea"+dataidea+"team1").removeClass("button-selected");
        $(".buttonidea"+dataidea+"team2").removeClass("button-selected");
        $(".buttonidea"+dataidea+"team3").removeClass("button-selected");
        $(".buttonidea"+dataidea+"team4").removeClass("button-selected");
        $(this).addClass("button-selected");        
    });
});



function addocalStorage(key,value){
    localStorage.setItem(key,value);
    //console.log(localStorage);
}
$(document).ready(function(){ 
    var sombrero = "";
    var data_idea = "";
    $(".button-sombrero").click(function(){
        sombrero = $(this).attr('data-sombrero');
        console.log(sombrero);
        $(".button-sombrero").removeClass("active");
        $(this).addClass("active");
    });
    $(".checkbox-sombrero").click(function(){
        data_idea = $(this).attr('data-idea');
        if(sombrero){
            $(this).removeClass("checkbox-indiana");
            $(this).removeClass("checkbox-cook");
            $(this).removeClass("checkbox-tuareg");
            $(this).removeClass("checkbox-livingstone");    
            $(this).addClass("checkbox-"+sombrero); 
            console.log(data_idea);
            console.log($(this).prop( "checked"));
            var ideaUniqueId = data_idea.replace("_1", "");
            var ideaUniqueId = ideaUniqueId.replace("_2", "");
            console.log(ideaUniqueId);
            if($(this).prop( "checked")==true){
                $("#ideateam_"+data_idea).val(sombrero);
                addocalStorage("ideateam_"+data_idea,sombrero);                
                $("#"+"ideatext"+ideaUniqueId).removeClass();
                $("#"+"ideatext"+ideaUniqueId).addClass("label-checked-" + sombrero);
            }else{
                $("#ideateam_"+data_idea).val("0");
                $("#"+"ideatext"+ideaUniqueId).removeClass();
            }
        }else{
            $(this).prop( "checked", false );
        }

    });
    
}); 


/*  ideas cargadas  */
var playerId = 0;
function chekIfPlayerSelected(){
    if(playerId==0){
        alert('Seleccione jugador');
        return false;
        //console.log(playerId);
    }
    return true;
}

$(".player-email").click(function(){
    if($(this).hasClass("not-allowed")){
    }else{
         //console.log($(this).attr('data-player-id'));
        $(".player-email").removeClass("active");
        $(".player-email").addClass("not-allowed");
        $(this).addClass("active");
        $(this).removeClass("not-allowed");
        playerId = $(this).attr('data-player-id');
        //console.log(playerId);
    }   
});

var teamId = 1;
$(".tab-team").click(function(){
    if(chekIfPlayerSelected()){
        teamId = $(this).attr('data-team-id');
        reformulacionId = 1;
        var menuteamreformulacion = "#menuteam" + teamId + "reformulacion" + reformulacionId;
        $(".reformulacion_n").removeClass("active");
        $(menuteamreformulacion).addClass("active");
        var teamreformulaciones = "#team" + teamId + "reformulaciones" + reformulacionId;
        $(".team1reformulaciones").hide();
        $(teamreformulaciones).show();
    }
});

var reformulacionId = 1;
$(".reformulacion_n").click(function(){
    if(chekIfPlayerSelected()){
        reformulacionId = $(this).attr('data-reformulacion');    
        //console.log(reformulacionId);  
        $(".reformulacion_n").removeClass("active");
        $(this).addClass("active");
        var teamreformulaciones = "#team" + teamId + "reformulaciones" + reformulacionId;
        $(".team1reformulaciones").hide();
        $(teamreformulaciones).show();
    }
});

$(".vote-add-idea").click(function(){
    //console.log('addidea');
    if(chekIfPlayerSelected()){
        $(this).toggleClass("idea-voted");
        $(this).next().toggleClass("idea-voted-label");
        $(this).html("+");
        if($(this).hasClass("idea-voted")){
            $(this).html("-");
        }
    }
});

/*  mision 3 borrar ideas */
$(".delete-idea").click(function(){
    let ideaId = $(this).attr('data-idea-id');
    $("#"+ideaId).remove();  
    console.log(ideaId); 
});


/*  mision4 */


var teamDeCuatro = 1;
var ideaDeTres = 1;
$(".equipotabs").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    var teamDeCuatro = $(this).attr('data-team');
    var ideaDeTres = $(this).attr('data-idea');

    $(".equipotabs" + teamDeCuatro).removeClass("active");
    $(this).addClass("active");

    let team_ideas_m4_div = "#team-ideas-m4-" + teamDeCuatro + ideaDeTres;
    let team_ideas_m4_all_tabs = ".team-ideas-m4-" + teamDeCuatro;    

    $(team_ideas_m4_all_tabs).hide();
    $(team_ideas_m4_div).show();
});



$(".input-embarco").change(function(e){
    sumarBikkles(this);    
});
$(".input-tierra").change(function(e){
    sumarBikkles(this);    
});
function sumarBikkles(elemento){
    let total = 0;
    let embarco = 0;
    let tierra = 0;
    let teamDeCuatro_ = $(elemento).attr('data-team');
    let ideaDeTres_ = $(elemento).attr('data-idea');
    let intup_total = "#total" + teamDeCuatro_ + ideaDeTres_;
    embarco = parseInt($("#embarco" + teamDeCuatro_ + ideaDeTres_).val());
    tierra = parseInt($("#tierra" + teamDeCuatro_ + ideaDeTres_).val());
    if($.isNumeric(embarco)){
        total+=embarco;
    }
    if($.isNumeric(tierra)){
        total+=tierra;
    }
    $(intup_total).val(total);
    sumarAcumulado(teamDeCuatro_,ideaDeTres_);
}
function sumarAcumulado(team,idea){
    let acumulado = 0;    
    let idea1 = parseInt($("#total" + team + 1).val());
    let idea2 = parseInt($("#total" + team + 2).val());
    let idea3 = parseInt($("#total" + team + 3).val());
    if($.isNumeric(idea1)){
        acumulado+=idea1;
    }
    if($.isNumeric(idea2)){
        acumulado+=idea2;
    }
    if($.isNumeric(idea3)){
        acumulado+=idea3;
    }
    $("#acumulado" + team).val(acumulado);
    console.log(team);
    console.log(acumulado);

}
$( document ).ready(function(){
    $(".team-ideas-m4-1").hide();
    $(".team-ideas-m4-2").hide();
    $(".team-ideas-m4-3").hide();
    $(".team-ideas-m4-4").hide();
    $("#team-ideas-m4-11").show();
    $("#team-ideas-m4-21").show();
    $("#team-ideas-m4-31").show();
    $("#team-ideas-m4-41").show();
})

