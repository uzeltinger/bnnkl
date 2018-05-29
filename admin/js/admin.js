var nextResponse = 1;

function addresponse(){
    var newResponseText =    '<div class="respuesta-row">'
    +'  <div class="respuesta-radio">'
    +'      <input class="with-gap" name="group1" type="radio" id="response'+nextResponse+'"  />'
    +'      <label for="response'+nextResponse+'"></label>'
    +'  </div>'
    +'  <div class="respuesta-input input-field">'
    +'      <input type="text" id="response'+nextResponse+'" name="response[]" class="validate">'
    +'      <label class="text-verde-binnakle" for="response'+nextResponse+'"> </label>'
    +'  </div>'
    +'</div>';
    $( newResponseText ).appendTo( "#respuestas-list" );
    nextResponse++;
    console.log(nextResponse);
}

$(".edit-question").click(function(){
    questionId = $(this).attr('data-edit-question');
    $("#editar-esta-pregunta").html("EDITAR PREGUNTA " + questionId);
});
$(".new-question").click(function(){
    $("#editar-esta-pregunta").html("CREAR NUEVA PREGUNTA");
});