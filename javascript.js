var errormsg = "alert error";

var callBackGetSuccess = function(data) {
    console.log("age donné :", data)
    var element = document.getElementById("zone_test2");
    element.innerHTML = "l'histoire est : " + data.metadata.description
    var element = document.getElementById("zone_test");
    element.innerHTML = "numéro de l'histoire : " + data.metadata.identifier
}

function buttonClickGET(){
    var url = "	https://archive.org/metadata/TheAdventuresOfTomSawyer_201303"

    $.get(url, callBackGetSuccess).done(function() {
        
    })
    .fail(function() {
        alert(errormsg);
    })
    .always(function() {
        //alert (errormsg);
    });
}