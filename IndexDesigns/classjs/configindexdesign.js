function EventoEnter(){
    let displayContainer = window.document.getElementById('config-display-container')
    if(window.document.getElementById('config-iframe').style.src === ""){
        displayContainer.style.display = 'block'
    }else{
        //Download Arquivo
        alert('Acessando Site....')
    }
}

 function EventoDownload(){
     let displayContainer = window.document.getElementById('config-display-container')
     if(window.document.getElementById('config-iframe').style.src === ""){
         displayContainer.style.display = 'block'
     }else{
         //Download Arquivo
         alert('Download Arquivo')
     }
 }

 function EventoFullScreen(){
     let displayContainer = window.document.getElementById('config-display-container')
     if(window.document.getElementById('config-iframe').style.src === ""){
         displayContainer.style.display = 'block'
     }else{
         //Modo Full-Screen
         alert('Modo Full-Screen')
     }
 }

function equiv(){
    if(window.document.getElementById('config-options-display').style.display == "block"){
        window.document.getElementById('config-options-display').style.display = "none";
    }else{
        window.document.getElementById('config-options-display').style.display = "block";
    }
}

function tamanhoBody(){
    if(window.innerWidth > 660){
        window.document.getElementById('config-options-display').style.display = 'none'
    }

    if(window.innerWidth <= 790 && window.innerWidth <= 660){
        window.document.getElementById('config-iframe').srcdoc = 
        "<br> <br> <br> <br>" +
        "<h1 style='text-align:center; font-size: 40px; color: #AFAFAF;'> Selecione meus Projetos Criativos<br> para Visualizá-los! </h1> " +
        "<p style='text-align:center; font-size: 20px; color: #AFAFAF; font-family: arial;'> Precione a opção de <ins>designs</ins>.</p>"

        window.document.getElementById('display-continer-projetos').style.display = "none"

    }else{
        window.document.getElementById('config-iframe').srcdoc = 
        "<br> <br> <br> <br>" +
        "<h1 style='text-align:center; font-size: 50px; color: #AFAFAF;'> Selecione meus Projetos Criativos<br> para Visualizá-los! </h1> " +
        "<p style='text-align:center; font-size: 25px; color: #AFAFAF; font-family: arial;'> Precione a opção de <ins>designs</ins>.</p>"
    }
}

function design(){
    if(window.document.getElementById('display-continer-projetos').style.display == "block"){
        window.document.getElementById('display-continer-projetos').style.display = "none"
    }else{
        window.document.getElementById('display-continer-projetos').style.display = "block"
    }
}

function EventoClose(){
    if(window.document.getElementById('display-continer-projetos').style.display == "block"){
        window.document.getElementById('display-continer-projetos').style.display = "none"
    }
}