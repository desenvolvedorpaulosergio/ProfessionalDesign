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
    if(window.document.getElementsByTagName('iframe')[0].src.endsWith('conexao.html')){
        window.document.getElementById('config-display-container').style.display = 'block'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    } /*Inserindo Link de Projetos (Ps.Marques)*/
    else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('pizzaria-rapidista.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalProjectsHTMLCSSandJS/ProjectsHTMLCSSJS/ThematicSystems/PizzariaRapidista/classhtml/index.html#"
    }
 }

 function EventoDownload(){
    if(window.document.getElementsByTagName('iframe')[0].src.endsWith('conexao.html')){
        window.document.getElementById('config-display-container').style.display = 'block'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }else{
        window.document.getElementById('config-display-container2').style.display = 'block'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }
}

function eventoConfirmacaoPositiva(){
    // Condições de Instalação de Arquivo (.zip)
    if(window.document.getElementsByTagName('iframe')[0].src.endsWith('pizzaria-rapidista.html')){
       window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalDesign/ProjectsCanva/Layouts/pizzaria.zip"
    }
}

function eventoConfirmacaoNegativa(){
    window.document.getElementById('config-display-container2').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto';
}

function EventoFullScreen(){
    if(window.document.getElementsByTagName('iframe')[0].src.endsWith('conexao.html')){
        window.document.getElementById('config-display-container').style.display = 'block'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }else{
        //Modal FullScreen
        window.document.getElementById('config-display-container3').style.display = 'block'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }
}

window.document.addEventListener('DOMContentLoaded', function(){
    if(window.document.getElementsByTagName('iframe')[0].src.endsWith('conexao.html')){
        window.document.querySelector('#textojs').innerHTML = 'Selecione um projeto primeiro!';
    }else{
        // Novo tópico
    }
})

function eventoClose2(){
    window.document.getElementById('config-display-container3').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto';
}

//Configurações JavaScript de Outra Classe
//Nova Função Aprendida: endsWith('') => verifica se uma string termina com o valor especificado.
window.document.addEventListener('DOMContentLoaded', function(){
    if(window.document.getElementById('config-imgs').src.endsWith('message-design.jpg')){
        window.document.getElementById('config-imgs').style.height = '99dvh'
    }else{
        window.document.getElementById('config-imgs').style.height = 'auto'
    }
})

// Configurações JavaScript de Conexão-Iframe: Categoria: Layout
function pizzariaRapidista(){
    document.getElementsByTagName('iframe')[0].src='../connectionpages/pizzaria-rapidista.html'
    document.getElementsByTagName('iframe')[1].src='../connectionpages/pizzaria-rapidista.html'
    window.document.getElementById('textojs').innerHTML = "<p id='textojs'>PizzariaRapidista: O nome é referente ao objetivo vínculo de serem feitos os atendimento e  as entregas de maneira rápida e eficaz. Logo, o termo “PizzariaRapidista” adere em um sentido de rápido atendimento(pedido-pidista), assim como a produção e a entrega da pizza(rapidista)</p>"
}
