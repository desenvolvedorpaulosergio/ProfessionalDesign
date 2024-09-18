function tamanhoBody(){
    if(window.innerWidth > 535){
        window.document.getElementById('config-display-opcoes').style.display = 'none'  
    }
}

function eventoDesign(){
    if(window.document.getElementById('display-div-barra-lateral').style.display == 'block'){
        window.document.getElementById('display-div-barra-lateral').style.display = 'none'
    }else{
        window.document.getElementById('display-div-barra-lateral').style.display = 'block'
    }
}

function eventoEquiv(){
    if(window.document.getElementById('config-display-opcoes').style.display == 'block'){
        window.document.getElementById('config-display-opcoes').style.display = 'none'
    }else{
        window.document.getElementById('config-display-opcoes').style.display = 'block'
    }
}

function eventoClose(){
    window.document.getElementById('config-barra-lateral').style.animationName = "animacaoBarraLateral2"
    setTimeout(function(){
        window.document.getElementById('config-barra-lateral').style.animationName = "animacaoBarraLateral"
        window.document.getElementById('display-div-barra-lateral').style.display = 'none';
    },300)
}