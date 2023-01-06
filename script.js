//acessorios>>>

var acessorios = document.querySelector(".acessorios");
var selecao = document.getElementsByClassName("selecao")[1];
var vAcessorios = ["Capa","Escudo", "Tiara", "Laço"];
function setAcessorios() {
    acessorios.InnerHTML = "";
    vAcessorios.forEach(function(item) {
        var option = document.createElement("option");
        option.text = item;
        option.value = item;
        acessorios.add(option);
    });
}

function addAcessorio() {  
var tam = selecao.options.length;
    if(tam>2){
    alert("Não é possivel adicionar mais de 2 acessórios")
}
else{
    var option = document.createElement("option");
    option.text = acessorios.value;
    option.value = acessorios.value;
    acessorios.options[acessorios.selectedIndex].remove();
    selecao.add(option);
}
}
function removeAcessorio() {
    var option = document.createElement("option");
    option.text = selecao.value;
    option.value = selecao.value;
    acessorios.add(option);
    selecao.options[selecao.selectedIndex].remove();
}

//poderes 
var poder= document.querySelector(".poderes");
var selecao2 = document.querySelector(".selecao");
var vPoder = ["Super visão", "Agilidade sobre-humana","Fator de cura","Congelamento", "Voar","Imortalidade"];

function setPoder() {
    poder.InnerHTML = "";
    vPoder.forEach(function(item) {
        var option = document.createElement("option");
        option.text = item;
        option.value = item;
        poder.add(option);
    });
}

function addPoder() {  
    var tam= selecao2.options.length;
    if(tam>2){
    alert("Não é possivel adicionar mais poderes")
}
else{
    var option = document.createElement("option");
    option.text = poder.value;
    option.value = poder.value;
    poder.options[poder.selectedIndex].remove();
    selecao2.add(option);
}
}
function removePoder() {
    var option = document.createElement("option");
    option.text = selecao2.value;
    option.value = selecao2.value;
    poder.add(option);
    selecao2.options[selecao2.selectedIndex].remove();
}

var arq = document.getElementById("img-input");

//Mudar fundo

function fundoCor() {
    var select= document.getElementById('fundoCor');
    var cor = select.options[select.selectedIndex].value;
    if(cor=='dark'){
        document.getElementById("card").style.backgroundColor= 'black';
        document.getElementById("card").style.color= 'white';
    console.log(cor);}
 
    else if(cor=='ligth'){
        document.getElementById("card").style.backgroundColor= 'white';
        document.getElementById("card").style.color= 'black';
        console.log(cor);}
}

//Gera o card
function gerar(){
    if (arq.value == null){
        console.log("tem arquivo");
    
    }
    else{
        console.log("Não tem")
       
        document.getElementById("card").style.display="flex" ;
       
var acess = "";
var pod="";
 var opAce = selecao.options; 
 var opPode= selecao2.options;
 var nom=document.getElementById("nome").value;
 document.getElementById("nomeCard").innerHTML= nom; 

    for (let i = 0; i < opAce.length; i++) {
        acess +=  opAce[i].value + ", ";

    document.getElementById("acessoriosCard").innerHTML="Acessórios: " + acess; 
        
    }
    for (let i = 0; i < opPode.length; i++) {
        pod +=  opPode[i].value + ", ";
 
    }
    document.getElementById("poderCard").innerHTML="Poderes: " + pod; 
    }

}


//carregar imagem
function carregarImagem(){
    if(this.files && this.files[0]){
        var file = new FileReader();// tem arquivo seiecionadl
        file.onload = function(e){
            document.getElementById("preview").src = e.target.result;
        }
       file.readAsDataURL(this.files[0])
    }
}

var nome = document.querySelector("#nome");

function generoPersonagem(){
        var opcao = document.querySelector('input[name="opcoes"]:checked').value;
        console.log("selecionado " + opcao);
        document.getElementById('generoCard').innerHTML = "Genero "+opcao;
        if(opcao == null){
            console.log("Genero não selecionado");
            document.getElementById('generoCard').innerHTML = "Genero: não definido ";
        }
    
}
//validação
function validar(){
var tam1= selecao.options.length;
var tam2= selecao2.options.length;
if(tam1==""  || tam2==""|| nome.value ==""){
    alert("Não foi possivel gerar o card, cheque se todos os campos foram preenchidos")}
else{
    gerar()
}
 
}


acessorios.addEventListener("dblclick", addAcessorio);
selecao.addEventListener("dblclick", removeAcessorio);
setAcessorios();

poder.addEventListener("dblclick", addPoder);
selecao2.addEventListener("dblclick", removePoder);
setPoder();
var botaoGera = document.getElementById("gerar") ;
botaoGera.addEventListener("click", validar);
botaoGera.addEventListener("click",generoPersonagem);
botaoGera.addEventListener("click",fundoCor);
botaoGera.addEventListener("click",validar);
arq.addEventListener("change", carregarImagem);



