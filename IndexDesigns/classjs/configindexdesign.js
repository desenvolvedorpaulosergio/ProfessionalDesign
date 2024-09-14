function EventoEnter(){
    let displayContainer = window.document.getElementById('config-display-container')
    if(window.document.getElementById('config-iframe').style.src === " "){
        displayContainer.style.display = 'block'
    }else{
        //Direcionamento LINK
        alert('Direcionamento LINK')
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalProjectsHTMLCSSandJS/ProjectsHTMLCSSJS/ThematicSystems/PizzariaRapidista/classhtml/index.html";
    }
}
