let pessoa = {
    nome: "vitor",
    canal: "CFB Cursos",
    curso: "JavaScript",
    aulas: {
        aula01: "Introdução",
        aula02: "Variáveis",
        aula03: "Condicional"
    }
}
let string_pessoa = ['{"nome":"vitor","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}']

let s_json_pessoa = JSON.stringify(pessoa) // Converte objeto em string JSON
let o_json_pessoa = JSON.parse(string_pessoa) // Converte string JSON em objeto

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)

