function abrir(){

    //abrir carta
    var topcard = document.getElementById("topoDaCarta");

    topcard.style.top = "-150px";
    topcard.style.borderBottom = '150px solid rgb(177, 175, 175)';
    topcard.style.borderTop = 'transparent';
    topcard.style.zIndex = '1';

    //carta
    var carta = document.getElementById("carta");

    carta.style.transform = "translateY(-100px)";
}