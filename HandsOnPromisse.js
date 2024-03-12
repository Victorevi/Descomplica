class MinhaClasse{

    constructor(valor){
        this.valor = valor;
    }

    operacaoAssincrona(){
        return new Promise((resolve, reject) =>{

            if (typeof this.valor !== 'number') {
                reject("O valor capturado não é um número");
            }

            const resultado = this.valor * 2;

            if(resultado >= 0){
                resolve(resultado);
            }else{
                reject("O resultado é negativo.")
            }
            
        })
    }
}

let valor = "4";

const minhaClasse = new MinhaClasse(valor);
minhaClasse.operacaoAssincrona()
.then((resultado) =>{
    let resultadoFormatado = "O resultado da operação é: " + resultado;
    console.log(resultadoFormatado)
})
.catch((erro) =>{
    let resultadoFormatado = "Ocorreu um problema: " + erro;
    console.log(resultadoFormatado)
})