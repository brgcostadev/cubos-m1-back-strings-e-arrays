const comentario = "Essa CoVid  é muito !";

const frase = comentario.toLowerCase().includes("covid" || "pandemia")


if (frase) {
    console.log("Comentário bloqueado por conter palavras proibidas")
} else {
    console.log("Comentário autorizado")
}

