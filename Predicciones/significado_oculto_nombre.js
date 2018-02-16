//significado_oculto_nombre.js
function lanzar_ajax() {
    alert( "HAhah" );
    var ajax;
    ajax = new XMLHttpRequest();
    if ( ajax ) {
        if ( ajax.readyState == 4 ) {
            var main = document.getElementsByTagName( 'main' )[ 0 ];
            main.innerHTML = '' + ajax.responseText;
        }
        var url = 'significado_nombre.html';
        ajax.open( 'GET', url );
        ajax.send();
    } else {
        alert( "Tu Navegador no soporta este test" );
    }
}

function cargar() {
    var enlace_p = document.getElementsByTagName( 'p' )[ 0 ];
    enlace_p.addEventListener( 'click', lanzar_ajax, false );
}
window.addEventListener( 'load', cargar, false );
