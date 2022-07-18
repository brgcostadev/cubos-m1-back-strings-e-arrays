let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

let idFormat = identificador.padStart(6, "0") //resolucao 1
console.log(idFormat)

let nomeFormat = nome.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase()
})
console.log(nomeFormat)

let emailFormat = email.trim()
console.log(emailFormat)

let tagsFormat = tags.join(", ")
console.log(tagsFormat)

