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

// Função-Evento Categórica de Word

function eventoWord(){
    if(window.document.getElementById('config-categoria-word').style.display == 'block'){
        window.document.getElementById('config-categoria-word').style.display = 'none'
    }else{
        window.document.getElementById('config-categoria-word').style.display = 'block'
    }
}

function eventoAvisoModal(){
    window.document.getElementById('config-display-container').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

function eventoAvisoModal2(){
    window.document.getElementById('config-display-container5').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

// Função-Evento Categórica de Excel

function eventoExcel(){
    if(window.document.getElementById('config-categoria-excel').style.display == 'block'){
        window.document.getElementById('config-categoria-excel').style.display = 'none'
    }else{
        window.document.getElementById('config-categoria-excel').style.display = 'block'
    }
}

// Função-Evento Categórica de Gimp

window.document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('config-categoria-gimp').style.display = 'none'
})

function eventoGimp(){
    if(window.document.getElementById('config-categoria-gimp').style.display == 'block'){
        window.document.getElementById('config-categoria-gimp').style.display = 'none'
    }else{
        window.document.getElementById('config-categoria-gimp').style.display = 'block'
    }
}

 function EventoEnter(){
    if(window.document.getElementsByTagName('iframe')[0].src.endsWith('conexao.html')){
        window.document.getElementById('config-display-container').style.display = 'block'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    } /*Inserindo Link de Projetos (Ps.Marques)*/
    else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('pizzaria-rapidista.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalProjectsHTMLCSSandJS/ProjectsHTMLCSSJS/ThematicSystems/PizzariaRapidista/classhtml/index.html#"
    }else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('evidence-ti.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalDesign/IndexDesigns/connectionpages/evidence-ti.html"
    }else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('formulas-geometricas.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalProjectsHTMLCSSandJS/ProjectsHTMLCSSJS/Tables/tableformula/classhtml/index.html"
    }else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('desafio-vocabulario.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProjetosTestes/DesafioVocabulario/classehtml/"
    }
    else{
        window.document.getElementById('config-display-container5').style.display = 'block'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }
 }

 function EventoDownload(){
    if(window.document.getElementsByTagName('iframe')[0].src.endsWith('conexao.html')){
        window.document.getElementById('config-display-container').style.display = 'block'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('sistema-financeiro.html')){
        window.document.getElementById('config-display-container5').style.display = 'block'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }
    else{
        window.document.getElementById('config-display-container2').style.display = 'block'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }
}

function eventoConfirmacaoPositiva(){
    // Condições de Instalação de Arquivo (.zip)
    if(window.document.getElementsByTagName('iframe')[0].src.endsWith('pizzaria-rapidista.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalDesign/ProjectsCanva/Layouts/pizzaria.zip"
    }else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('evidence-ti.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalDesign/Evidence-TI/evidence-tijip.zip"
    }else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('tabela-cronograma-semanal.html') || window.document.getElementsByTagName('iframe')[0].src.endsWith('formulas-geometricas.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalDesign/ProjectsCanva/Tabelas/modelos-tabelas.zip"
    }else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('desafio-vocabulario.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalDesign/ProjectsWord/tables/desafio-vocabul%C3%A1rio.zip"
    }else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('sinopse.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalDesign/ProjectsCanva/Cartazes/sinopse.zip"
    }else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('curriculo.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalDesign/ProjectsCanva/Cartazes/curriculo.zip"
    }else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('ficha-emprego.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalDesign/ProjectsWord/tables/ficha-emprego.zip"
    }else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('panfleto-taxista.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalDesign/ProjectsCanva/Cartazes/panfleto-taxista.zip"
    }else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('panettone.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalDesign/ProjectsCanva/Cartazes/pannetone.zip"
    }else if(window.document.getElementsByTagName('iframe')[0].src.endsWith('objetivos.html')){
        window.location = "https://desenvolvedorpaulosergio.github.io/ProfessionalDesign/ProjectsWord/tables/design-objetivos.zip"
    }
    else{
        window.document.getElementById('config-display-container2').style.display = 'block'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }
    setTimeout(function(){
        window.document.getElementById('config-display-container2').style.display = 'none'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
    },1500)
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

// Configurações JavaScript de Conexão-Iframe: Categoria: Informática

function evidenciasInformatica(){
    document.getElementsByTagName('iframe')[0].src='../connectionpages/evidence-ti.html'
    document.getElementsByTagName('iframe')[1].src='../connectionpages/evidence-ti.html'
    window.document.getElementById('textojs').innerHTML = "<p id='textojs'>Os prints apresentado são resultantes aos cursos que fiz no decorrer do ano de 2024</p>"
}

// Configurações JavaScript de Conexão-Iframe: Categoria: Canva -- [Cartazes]

function eventoTaxista(){
    document.getElementsByTagName('iframe')[0].src='../connectionpages/panfleto-taxista.html'
    document.getElementsByTagName('iframe')[1].src='../connectionpages/panfleto-taxista.html'
    window.document.getElementById('textojs').innerHTML = "<p id='textojs'>Esse panfleto de taxista tem como propósito de ajudar uma pessoa próxima que me pediu para fazer o serviço.</p>"
}


// Configurações JavaScript de Conexão-Iframe: Categoria: Canva -- [Layout]

function pizzariaRapidista(){
    document.getElementsByTagName('iframe')[0].src='../connectionpages/pizzaria-rapidista.html'
    document.getElementsByTagName('iframe')[1].src='../connectionpages/pizzaria-rapidista.html'
    window.document.getElementById('textojs').innerHTML = "<p id='textojs'>PizzariaRapidista: O nome é referente ao objetivo vínculo de serem feitos os atendimento e  as entregas de maneira rápida e eficaz. Logo, o termo “PizzariaRapidista” adere em um sentido de rápido atendimento(pedido-pidista), assim como a produção e a entrega da pizza(rapidista)</p>"
}

// Configurações JavaScript de Conexão-Iframe: Categoria: Canva -- [Tabelas]
function cronogramaSemanal(){
    document.getElementsByTagName('iframe')[0].src='../connectionpages/tabela-cronograma-semanal.html'
    document.getElementsByTagName('iframe')[1].src='../connectionpages/tabela-cronograma-semanal.html'
    window.document.getElementById('textojs').innerHTML = "<p id='textojs'>O projeto <q>tabela-cronograma-semanal</q> tem como objetivo preestabelecer um cronograma já preparado para a criação.</p>"
}

function formulasGeometricas(){
    document.getElementsByTagName('iframe')[0].src='../connectionpages/formulas-geometricas.html'
    document.getElementsByTagName('iframe')[1].src='../connectionpages/formulas-geometricas.html'
    window.document.getElementById('textojs').innerHTML = "<p id='textojs'>O projeto <q>fórmulas-geométricas</q> tem como objetivo preestabelecer de memorizar o mais rápido possível as fórmulas para o ENEM. ;)</p>"
}

window.document.addEventListener('DOMContentLoaded', function(){
    setInterval(function(){
        window.document.getElementById('config-display-container4').style.display = 'none'
    }, 1500)
})

// Configurações JavaScript de Conexão-Iframe: Categoria: Canva -- [Cartazes]

function eventoSinopse(){
    document.getElementsByTagName('iframe')[0].src='../connectionpages/sinopse.html'
    document.getElementsByTagName('iframe')[1].src='../connectionpages/sinopse.html'
    window.document.getElementById('textojs').innerHTML = "Criado por mim, desenvolvi essa sinopse para resumir os livros lidos cujo objetivo era de aumentar o meu repertório."
}

function eventoCurriculo(){
    document.getElementsByTagName('iframe')[0].src='../connectionpages/curriculo.html'
    document.getElementsByTagName('iframe')[1].src='../connectionpages/curriculo.html'
    window.document.getElementById('textojs').innerHTML = "Eu criei esse diploma baseado nas cores, cujos aspectos representam a área tecnológica."
}

function eventoPanettone(){
    document.getElementsByTagName('iframe')[0].src='../connectionpages/panettone.html'
    document.getElementsByTagName('iframe')[1].src='../connectionpages/panettone.html'
    window.document.getElementById('textojs').innerHTML = "O projeto apresentado tem como objetivo de diversificar os meus designs, apenas."
}

// Configurações JavaScript de Conexão-Iframe: Categoria: Word -- [Tabelas]

function desafioVocabulario(){
    document.getElementsByTagName('iframe')[0].src='../connectionpages/desafio-vocabulario.html'
    document.getElementsByTagName('iframe')[1].src='../connectionpages/desafio-vocabulario.html'
    window.document.getElementById('textojs').innerHTML = "<p id='textojs'>O projeto <q>desafio-vocabulário</q> tem como objetivo de usá-lo para memorizá-lo.</p>"
}

function fichaEmprego(){
    document.getElementsByTagName('iframe')[0].src='../connectionpages/ficha-emprego.html'
    document.getElementsByTagName('iframe')[1].src='../connectionpages/ficha-emprego.html'
    window.document.getElementById('textojs').innerHTML = "<p id='textojs'>Nada a declarar!!!</p>"
}

function metasObjetivos(){
    document.getElementsByTagName('iframe')[0].src='../connectionpages/objetivos.html'
    document.getElementsByTagName('iframe')[1].src='../connectionpages/objetivos.html'
    window.document.getElementById('textojs').innerHTML = "<p id='textojs'>Desenvolvi esse mini-projeto para orzanizar as minhas metas de 2025</p>"
}

// Configurações JavaScript de Conexão-Iframe: Categoria: Excel

function desafioSistemaFinanceiro1(){
    document.getElementsByTagName('iframe')[0].src='../connectionpages/sistema-financeiro.html'
    document.getElementsByTagName('iframe')[1].src='../connectionpages/sistema-financeiro.html'
    window.document.getElementById('textojs').innerHTML = "<p id='textojs'>Esse é o meu próprio sistema que desfruto não só para economizar, como também estudar os investimentos.</p>"
}

// Configurações JavaScript de Conexão-Iframe: Categoria: Gimp

function eventoProjetoGimp(){
    document.getElementsByTagName('iframe')[0].src='../connectionpages/projetos-gimp.html'
    document.getElementsByTagName('iframe')[1].src='../connectionpages/projetos-gimp.html'
    window.document.getElementById('textojs').innerHTML = "<p id='textojs'>Esses são os meus projetos criados no gimp.</p>"
}