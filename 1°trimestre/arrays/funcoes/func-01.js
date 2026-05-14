// funções podem ou não receber parãmetros
// são blocos reaproveitaveis 

function dizOla(){
    console.log("olá")

}
function dizOlaPessoa(nome){
    if(typeof nome !== "string"){
    console.error("por favor, digite um valor de texto!")
    }else{
    console.log(nome + "diz,olá")
    }
}
     dizOla()
     dizOlaPessoa("timóteo")
     dizOlaPessoa("paulo")
     dizOlaPessoa(1234)