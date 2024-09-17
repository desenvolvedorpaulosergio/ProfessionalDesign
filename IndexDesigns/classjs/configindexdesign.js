function tamanhoBody(){
    if(window.innerWidth > 535){
        window.document.getElementById('config-display-opcoes').style.display = 'none'  
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
    window.document.getElementById('display-div-barra-lateral').style.display = 'none';
}