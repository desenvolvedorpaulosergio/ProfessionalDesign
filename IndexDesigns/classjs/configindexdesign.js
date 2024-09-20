function tamanhoBody(){
    if(window.innerWidth > 535){
        window.document.getElementById('config-display-opcoes').style.display = 'none'  
    }
}

function eventoDesign(){
    if(window.document.getElementById('display-div-barra-lateral').style.display == 'block'){
        window.document.getElementById('config-barra-lateral').style.animationName = "animacaoBarraLateral2"
        window.document.getElementById('config-categoria-informatica').style.display = 'none'
        window.document.getElementById('config-categoria-canva').style.display = 'none'
        setTimeout(function(){
            window.document.getElementById('display-div-barra-lateral').style.display = 'none'
        },100)
    }else{
        window.document.getElementById('config-barra-lateral').style.animationName = "animacaoBarraLateral"
        window.document.getElementById('display-div-barra-lateral').style.display = 'block'
    }
}

function eventoEquiv(){
    if(window.document.getElementById('config-display-opcoes').style.display == 'block'){
        window.document.getElementById('config-estilo-opcoes').style.animationName = "animacaoOpcoes2"
        setTimeout(function(){
            window.document.getElementById('config-display-opcoes').style.display = 'none'
        },200)
    }else{
        window.document.getElementById('config-estilo-opcoes').style.animationName = "animacaoOpcoes"
        window.document.getElementById('config-display-opcoes').style.display = 'block'
    }
}

function eventoClose(){
    window.document.getElementById('config-barra-lateral').style.animationName = "animacaoBarraLateral2"
    window.document.getElementById('config-categoria-informatica').style.display = 'none';
    window.document.getElementById('config-categoria-canva').style.display = 'none'
    setTimeout(function(){
        window.document.getElementById('config-barra-lateral').style.animationName = "animacaoBarraLateral"
        window.document.getElementById('display-div-barra-lateral').style.display = 'none';
    },200)
}

// Função-Evento Categórica de Informática

function eventoInformatica(){
    if(window.document.getElementById('config-categoria-informatica').style.display == 'block'){
        window.document.getElementById('config-categoria-informatica').style.display = 'none'
    }else{
        window.document.getElementById('config-categoria-informatica').style.display = 'block'
    }
}

// Função-Evento Categórica de Canva

function eventoCanva(){
    if(window.document.getElementById('config-categoria-canva').style.display == 'block'){
        window.document.getElementById('config-categoria-canva').style.display = 'none'
    }else{
        window.document.getElementById('config-categoria-canva').style.display = 'block'
    }
}

function eventoAvisoModal(){
    window.document.getElementById('config-display-container').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

 function EventoEnter(){
     if(window.document.getElementsByTagName('iframe')[0].srcdoc !== ""){
         window.document.getElementById('config-display-container').style.display = 'block'
         window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
     }else{
        //Configurações Enter
        alert('entrando no site...')
        window.location = 'google.com'
     }
 }

 function EventoDownload(){
    if(window.document.getElementsByTagName('iframe')[0].srcdoc !== ""){
        window.document.getElementById('config-display-container').style.display = 'block'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }else{
        window.document.getElementById('config-display-container2').style.display = 'block'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }
}

function eventoConfirmacaoPositiva(){
    alert('Executando Download...')
}

function eventoConfirmacaoNegativa(){
    window.document.getElementById('config-display-container2').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto';
}

function EventoFullScreen(){
    if(window.document.getElementsByTagName('iframe')[0].srcdoc !== ""){
        window.document.getElementById('config-display-container').style.display = 'block'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }else{
       window.location = "../resources/teste/testeimg.html"
    }
}

window.document.addEventListener('DOMContentLoaded', function(){
    if(window.document.getElementsByTagName('iframe')[0].style.srcdoc !== ""){
        window.document.querySelector('#textojs').innerHTML = 'Selecione um projeto primeiro!';
    }else{
        // Novo tópico
    }
})