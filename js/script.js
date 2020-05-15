
var distancia = 120
$("#botao-pular").click(function () {

    $('#sapo').css('margin-left', distancia)
    distancia = distancia + 120
    
    if (distancia > 1200) {
        distancia = 50
    }
    
    $('#sapo').css('margin-top', '300px')
    setTimeout(function(){ 
        $('#sapo').css('margin-top', '400px')
     }, 300);
    
    

})