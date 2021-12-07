let catalogo = [
    {
    codigo: 1,
    titulo: 'Velozes e furiosos 7',
    duracao: 2.30,
    atores: ['Paul Walker', 'Vin Diesel'],
    anoDeLancamento:2015,
    emCartaz:true,
},
{
    codigo: 2,
    titulo: 'Velozes e furiosos 5',
    duracao: 2.40,
    atores: ['Paul Walker', 'Vin Diesel'],
    anoDeLancamento:2012,
    emCartaz:false,
}
 ]
catalogo.push({
    codigo: 3,
    titulo: 'Velozes e furiosos 8',
    duracao: 2.40,
    atores: ['Paul Walker', 'Vin Diesel'],
    anoDeLancamento:2019,
    emCartaz:false,
})
function adicionarFilme (filme){
   catalogo.push(filme)
   return catalogo
}
let filme = {
codigo: 123457,
    titulo: 'Velozes e furiosos 5',
    duracao: 2.40,
    atores: ['Paul Walker', 'Vin Diesel'],
    anoDeLancamento:2011,
    emCartaz:false,
}
//console.log(adicionarFilme(filme))

function buscarFilme(codigo){
    for (let index = 0; index < catalogo.length; index++) {
        const filme = catalogo[index];
        console.log(filme.codigo)
        if(filme.codigo == codigo){
            return filme
        }else{
           
        }
    }
    return 'nao encontrei'
}
let resultadoBuscarFilme = buscarFilme(2)
console.log(resultadoBuscarFilme)

function alterarStatusEmCartaz(codigo){
    let resultado = buscarFilme(codigo)
    resultado.emCartaz == true ? true : false
    if(resultado.emCartaz){
        resultado.emCartaz = false
    } else {
        resultado.emCartaz = true
    }
    return resultado
}
//alterarStatusEmCartaz(1)

//let resultado = JSON.stringify(catalogo)
//console.log(resultado)




function listarTodosOsFilmes(){
    for (let index = 0; index < catalogo.length; index++) {
        const filme = catalogo[index];
        console.log('Filme: ' + filme.titulo + '' + ' Ano: '+ filme.anoDeLancamento)
        
    }
}
//listarTodosOsFilmes()

function listarFilmesEmCartaz(){
    for (let index = 0; index < catalogo.length; index++) {
        const filme = catalogo[index];
        if(filme.emCartaz){
            console.log('Em cartaz ' + filme.titulo)
        }
        
    }
}
//listarFilmesEmCartaz()
    function alterarStatusEmCartazCallBack(codigo, callback) {

        let resultado = callback(codigo)
    
        if (resultado.emCartaz) {
    
            resultado.emCartaz = false
    
        } else {
            resultado.emCartaz = true
        }
        return resultado
    
    
    }
    
    let resultadoCallback = alterarStatusEmCartazCallBack(2, buscarFilme)
    console.log(resultadoCallback)
    

