var inter,t;
function interval(){
    clear();
    t=60;
    segundos=t;
    inter=setInterval(function(){
        if(t<10){
            segundos = '0'+t;
        }else{
            segundos=t;
        }
        t--;
        document.getElementById("timer-clock-number").innerHTML=segundos;
    },1000,"JavaScript");
}
$("#start-clock").click(function(){
    interval();
});

function clear(){
    clearInterval(inter);
    document.getElementById("timer-clock-number").innerHTML="60";
}

/*
* mision 2 reformulaciones
*
*/
$(".idea-action").click(function(e){
    e.preventDefault();
});
var dragingId = 0;
var nextIdeaId = 1;
var reformulacionId = 1;
var ideanumber = ["0", "1","2","3","4","5","6","7","8","9","10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"];
var letternumber = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var ideanumberNext = [0,0,0,0];
var letternumberNext = [0,0,0,0];
var idealetternumber = "";

$(".reformulacion_n").click(function(){
    reformulacionId = $(this).attr('data-reformulacion');    
    console.log(reformulacionId);  
    $(".reformulacion_n").removeClass("active");
    $(this).addClass("active");
    var ideaslistado_div_clasica = "#ideaslistado_clasica_" + reformulacionId;
    var ideaslistado_div_rompe = "#ideaslistado_rompe_" + reformulacionId;
    $(".ideas-listado").hide();
    $(ideaslistado_div_clasica).show();
    $(ideaslistado_div_rompe).show();
});

function addidea(typeidea){    
    var inputIdeaId = "#idea" + typeidea;
    var ideaValue = $(inputIdeaId).val();
    if(ideaValue!==''){
        if(typeidea=="clasica"){
            ideanumberNext[reformulacionId] ++;
            idealetternumber = ideanumber[ideanumberNext[reformulacionId]];
        }else{
            letternumberNext[reformulacionId] ++;
            idealetternumber = letternumber[letternumberNext[reformulacionId]];
        }
    $(inputIdeaId).val('');
    var ideaslistado_ = "#ideaslistado_" + typeidea + "_" + reformulacionId;
    var newIdea = '';
    var newIdea = '<div data-drag-from="' + typeidea + '" class="idea-agregada idea-draggable" id="ideaagregada_' + nextIdeaId + '" draggable="true" ondragstart="m2_drag(event)">'
                + '<div draggable="false" class="idealetternumber">'+idealetternumber+'</div>'
                + '<input draggable="false" type="hidden" id="inputidealetternumber_' + nextIdeaId + '" name="idealetternumber' + typeidea + reformulacionId + '" class="idealetternumber" value="' + idealetternumber + '">'
                + '<input draggable="false" type="text" id="inputidea_' + nextIdeaId + '" name="idea' + typeidea + reformulacionId + '[]" class="idea idea-agregada" value="' + ideaValue + '">'                
                + '<a draggable="false" class="idea-action buttonideadelete" id="buttonideadelete' + nextIdeaId + '" href="#" onClick="deleteidea('+ nextIdeaId +')" data-delete-type="' + typeidea + '"><i class="material-icons left">delete</i></a>'
                + '<a draggable="false" class="idea-action buttonideaedit" id="buttonideaedit' + nextIdeaId + '" href="#" onClick="editidea('+ nextIdeaId +')"><i class="material-icons left">edit</i></a>'
                + '</div>';
    $( newIdea ).appendTo( ideaslistado_ );
    nextIdeaId ++;
    $(inputIdeaId).focus();
    }
}

function editidea(ideaId){
    var inputIdeaId = "#inputidea_" + ideaId;
    $(inputIdeaId).focus();
}
function deleteidea(ideaId){
    var inputIdeaId = "#inputidea_" + ideaId;
    var ideaagregada = "#ideaagregada_" + ideaId;
    var buttonideadelete = "#buttonideadelete" + ideaId;
    var data_delete_type = $(buttonideadelete).attr('data-delete-type');
    //console.log(buttonideadelete);
    //console.log(data_delete_type);
    $(inputIdeaId).remove();
    $(ideaagregada).remove();
    reordenarIdeas(data_delete_type);
    
}


/*                          drag and drop mision 2                  */


function m2_over(ev,target) {
    //console.log("dragingId");
    //console.log(dragingId);
    if($(ev.target).hasClass('can-drag-here')){
        var elemento = ev.target;
    }else if($(ev.target.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode;
    }else if($(ev.target.parentNode.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode.parentNode;
    }else if($(ev.target.parentNode.parentNode.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode.parentNode.parentNode;
    }
    //console.log(elemento);
    var moviendose = document.getElementById(dragingId);
    var data_drag_from = $(moviendose).attr('data-drag-from');
    var este = document.getElementById(elemento.id);
    var data_drag_here = $(este).attr('data-drag-here');
    //console.log(data_drag_here);
    if(data_drag_from!=data_drag_here) { 
        elemento.style.border = '2px dotted #555'; 
    } 
    ev.preventDefault();
}

function m2_drag(ev,target) {
    ev.dataTransfer.setData('Text', ev.target.id);
    dragingId = ev.target.id;    
    //console.log(dragingId);
}

function m2_drop(ev,target) {
    var data = ev.dataTransfer.getData("Text");
    var moviendose = document.getElementById(data);
    var data_drag_from = $(moviendose).attr('data-drag-from');    
    //console.log(data_drag_from);    
    if($(ev.target).hasClass('can-drag-here')){
        var elemento = ev.target;
    }else if($(ev.target.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode;
    }else if($(ev.target.parentNode.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode.parentNode;
    }else if($(ev.target.parentNode.parentNode.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode.parentNode.parentNode;
    }       
    ev.preventDefault();    
    elemento.style.border = '';

    var este = document.getElementById(elemento.id);
    var data_drag_here = $(este).attr('data-drag-here');
    //console.log(data_drag_here);

    if(data_drag_from!=data_drag_here) {    
        elemento.appendChild(document.getElementById(data));
        var nuevoElemento = document.getElementById(data);
        $(nuevoElemento).attr('data-drag-from',data_drag_here);
        elemento.checked = true;
        var elementodyclase = '#' +elemento.id + ' input.participante';
        if (elemento.id == 'list-equipos') {
            $(elementodyclase).prop("checked", false);
        } else {
            $(elementodyclase).prop("checked", true);
        }
        reordenar(data,data_drag_here);    
    }
    //console.log(elementodyclase);
}

function m2_enter(ev) {
    if($(ev.target).hasClass('can-drag-here')){
        var elemento = ev.target;
    }else if($(ev.target.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode;
    }else if($(ev.target.parentNode.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode.parentNode;
    }else if($(ev.target.parentNode.parentNode.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode.parentNode.parentNode;
    }
    elemento.style.border = '2px dotted #555';     
}

function m2_leave(ev) {
    if($(ev.target).hasClass('can-drag-here')){
        var elemento = ev.target;
    }else if($(ev.target.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode;
    }else if($(ev.target.parentNode.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode.parentNode; 
    }else if($(ev.target.parentNode.parentNode.parentNode).hasClass('can-drag-here')){
        var elemento = ev.target.parentNode.parentNode.parentNode;       
    }
    elemento.style.border = '';     
}

function reordenar(id,ideatipo){    
    var nuevoElemento = document.getElementById(id);
    var elementodyclase = '#' + id + ' > div.idealetternumber';
    let idealetternumberlocal;
    if(ideatipo=="clasica"){
        ideanumberNext[reformulacionId] ++;
        idealetternumberlocal = ideanumber[ideanumberNext[reformulacionId]];
        // reordenar el contrario: rompe
        reordenarIdeas('rompe');
    }else{
        letternumberNext[reformulacionId] ++;
        idealetternumberlocal = letternumber[letternumberNext[reformulacionId]];
        // reordenar el contrario: clasica
        reordenarIdeas('clasica');
    }
    $(elementodyclase).html(idealetternumberlocal);
}

function reordenarIdeas(reordertype){
    if(reordertype=="clasica"){
        ideanumberNext[reformulacionId] = 0;
        var newletternumbers = ideanumber;
    }else{
        letternumberNext[reformulacionId] = 0;
        var newletternumbers = letternumber;
    }    
    var ideaslistado_elemento = "#ideaslistado_" + reordertype + "_" + reformulacionId + " .idea-draggable";  
    $(ideaslistado_elemento).each(function(){        
        if(reordertype=="clasica"){
            ideanumberNext[reformulacionId] ++;            
            idealetternumber = newletternumbers[ideanumberNext[reformulacionId]];
        }else{
            letternumberNext[reformulacionId] ++;
            idealetternumber = newletternumbers[letternumberNext[reformulacionId]];
        }
        id = $(this).attr('id');
        var elementodyclaseacambiar = '#' + id + ' > div.idealetternumber';
        $(elementodyclaseacambiar).html(idealetternumber);        
    });       
}



/*  
*   addm3idea
*
*/


var nextM3IdeaId = 1;
var ideaAatacar = 1;

$(".idea-a-atacar").click(function(){
    var ideaId = $(this).attr('data-idea');
    ideaAatacar = ideaId;
    $(".idea-a-atacar").removeClass("active");
    $(this).addClass("active");
    var ideaslistado_div = "#ideaslistado_" + ideaId;
    $(".ideas-listado").hide();
    $(ideaslistado_div).show();
});

function addm3idea(){
    console.log("ideaAatacar");  
    console.log(ideaAatacar);     

    var inputIdeaId = "#m3idea";
    var ideaValue = $(inputIdeaId).val();
    if(ideaValue!==''){
    $(inputIdeaId).val('');
    var ideaslistado_ = "#ideaslistado_" + ideaAatacar;
    var typeidea = "ideaaatacar" + ideaAatacar + "[]";
    var newIdea = '';
    var newIdea = '<div class="idea-agregada" id="ideaagregada_' + nextIdeaId + '">'
                + '<input type="text" id="inputidea_' + nextIdeaId + '" name="idea' + typeidea + '[]" class="idea idea-agregada" value="' + ideaValue + '">'
                + '<a class="idea-action buttonideaedit" id="buttonideaedit' + nextIdeaId + '" href="#" onClick="editidea('+ nextIdeaId +')"><i class="material-icons left">edit</i></a>'
                + '<a class="idea-action buttonideadelete" id="buttonideadelete' + nextIdeaId + '" href="#" onClick="deleteidea('+ nextIdeaId +')"><i class="material-icons left">delete</i></a>'
                + '</div>';
    $( newIdea ).appendTo( ideaslistado_ );
    nextIdeaId ++;
    $(inputIdeaId).focus();
    }

}

/*
* misión 3 defender ideas
*/
var idea_a_defender = 1;
$(".idea-a-defender").click(function(){
    idea_a_defender = $(this).attr('data-idea');    
    $(".idea-a-defender").removeClass("active");
    $(this).addClass("active");
    var ideaslistado_div = "#ideaslistado_" + idea_a_defender;
    $(".ideas-listado").hide();
    $(ideaslistado_div).show();
    var defenderlistado_div = "#defenderlistado_" + idea_a_defender;
    $(".ideasdefender-listado").hide();
    $(defenderlistado_div).show();
    //console.log(idea_a_defender);
});

var ideaDefenderSelected = 0;
$(".ideadefendercheckbox").click(function(){
    $("#defenderlistado_"+ idea_a_defender+" .ideadefender").each(function(){
        let id = $(this).attr('id');
        //console.log(id);
        $("#"+id+" .ideadefendercheckbox").prop( "checked", false );
    });
    let ideatexto = $(this).next().html();
    let id = $(this).attr('id');
    $(this).prop( "checked", true );
    $("#idea-a-defender p").html(ideatexto);    
    ideaDefenderSelected = $(this).attr('data-idea-id');
    //console.log(ideaDefenderSelected);    
});

function addm3ideaDefender(){
    //console.log("ideaDefenderSelected");  
    //console.log(ideaDefenderSelected);
    if(ideaDefenderSelected===0){
        alert('Seleccione idea a defender');
    }else{
        var inputDfensaId = "#m3idea";
        var defensaValue = $(inputDfensaId).val();
        var ideaValue = $("#ideadefendercheckbox_"+ideaDefenderSelected).next().html();
        if(defensaValue!==''){
            $(inputDfensaId).val('');
            var ideaslistado_ = "#ideaslistado_" + idea_a_defender;
            //var typeidea = "ideaaatacar" + idea_a_defender + "[]";
            var newIdea = '';
            var newIdea = '<div class="idea-defender-agregada" id="ideaagregada_' + ideaDefenderSelected + '">'
                        + '<input disabled type="text" id="inputideatext_' + ideaDefenderSelected + '" name="ideastext[]" class="idea idea-defender-agregada" value="' + ideaValue + '">'
                        + '<input disabled type="hidden" id="inputideaid_' + ideaDefenderSelected + '" name="ideas[]" class="idea idea-defender-agregada" value="' + ideaDefenderSelected + '">'
                        + '<input type="text" id="inputdefensa_' + ideaDefenderSelected + '" name="defensas[]" class="idea idea-defender-agregada" value="' + defensaValue + '">'                        
                        + '<a class="idea-defender-action buttonideaedit" id="buttonideaedit' + ideaDefenderSelected + '" onClick="editideam3('+ ideaDefenderSelected +')"><i class="material-icons left">edit</i></a>'
                        + '<a class="idea-defender-action buttonideadelete" id="buttonideadelete' + ideaDefenderSelected + '" onClick="deleteideam3('+ ideaDefenderSelected +')"><i class="material-icons left">delete</i></a>'
                        + '</div>';
            $( newIdea ).appendTo( ideaslistado_ );
            nextIdeaId ++;
            $(inputDfensaId).focus();
            $("#ideadefender_"+ideaDefenderSelected).remove();
        }
    }    
}

function editideam3(ideaId){
    var inputIdeaId = "#inputdefensa_" + ideaId;
    $(inputIdeaId).focus();
}
function deleteideam3(ideaId){
    var inputIdeaId = "#ideaagregada_" + ideaId;
    let ideaText = $("#inputideatext_"+ideaId).val();
    $("#ideaagregada_" + ideaId).remove();
    console.log(ideaText);
    let defenderlistado_ = "#defenderlistado_" + idea_a_defender;
    var rearmarIdea = '<div id="ideadefender_'+ideaId+'" class="ideadefender">'
                        + '<input type="checkbox" name="ideadefender[]" id="ideadefendercheckbox_'+ideaId+'" class="ideadefendercheckbox" data-idea-id="'+ideaId+'">'
                        + '<label class="ideadefenderlabel" for="ideadefendercheckbox_'+ideaId+'">'+ideaText+'</label>'
                        + '</div>';
    $( rearmarIdea ).appendTo( defenderlistado_ );
}

/*  mision 4 slide  */

var nextM4IdeaId = 1;
var ideaAatacarM4 = 1;
$(".idea-a-atacar-m4").click(function(){
    var ideaId = $(this).attr('data-idea');
    ideaAatacarM4 = ideaId;
    $(".idea-a-atacar-m4").removeClass("active");
    $(this).addClass("active");
    var ideaslistado_div = "#ideaslistado-m4_" + ideaId;
    $(".ideas-listado-m4").hide();
    $(ideaslistado_div).show();
});


$('.carousel.carousel-slider1').carousel({fullWidth: true});
$('.carousel.carousel-slider2').carousel({fullWidth: true});
$('.carousel.carousel-slider3').carousel({fullWidth: true});

$('.moveNextCarousel1').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carouselidea1').carousel('next');
});
$('.movePrevCarousel1').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carouselidea1').carousel('prev');
});
$('.moveNextCarousel2').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carouselidea2').carousel('next');
});
$('.movePrevCarousel2').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carouselidea2').carousel('prev');
});

$('.moveNextCarousel3').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carouselidea3').carousel('next');
});
$('.movePrevCarousel3').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carouselidea3').carousel('prev');
});
$( document ).ready(function(){
    $("#ideaslistado-m4_2").hide();
    $("#ideaslistado-m4_3").hide();
})