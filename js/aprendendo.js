let pessoaDefault ={
    nome:"cleide",
    idade: "22",
    profissao: "jovem aprendiz ti"
}
let nomes = ['ana', 'pedro', 'jose']
let pessoas = [
    {
        nome:"ana",
        idade: "22",
        profissao: "jovem aprendiz ti"
    },
    {
        nome:"pedro",
        idade: "22",
        profissao: "jovem aprendiz administrativo"
    },
    {
        nome:"jose",
        idade: "22",
        profissao: "jovem aprendiz contabil"
    }
];

function imprimirPessoa(pessoa){
    console.log("imprimindo sem arrays")
    console.log("Nome: " + pessoa.nome);
    console.log("Idade: " + pessoa.idade);
    console.log("Profissao: " + pessoa.profissao);
}

function addPessoa(pessoa){
    pessoas.push(pessoa)
}

function imprimirPessoas(){
    console.log("IMPRIMINDO NOME DE FUNCIONARIOS")
    pessoas.forEach(pessoa => {
        console.log("NOME " + pessoa.nome)
    });

}
console.log(pessoas)

addPessoa({
    nome: "amanda",
    idade:"20", 
    profissao: "database admin"
})

imprimirPessoas();
// console.log(nomes)
// console.log(nomes[0])

// console.log(pessoas)

// imprimirPessoa(pessoaDefault);
// console.log("-----")
// imprimirPessoa({
//     nome:"jessica",
//     idade: "33",
//     profissao: "administrativo"
// })
