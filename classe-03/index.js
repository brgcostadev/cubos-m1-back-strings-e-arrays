const texto = "Aprenda programar do zero na Cubos Academy";

const urlAmigavel = texto.toLowerCase().split(" ").join("-");

// regExp
// const urlAmigavel = texto.replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[- ]+/g, "-");

console.log(urlAmigavel)