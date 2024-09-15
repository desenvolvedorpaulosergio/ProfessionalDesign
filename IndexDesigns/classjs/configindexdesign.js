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

 