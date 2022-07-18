const cpf = "12345678900";
const cnpj = "12345678000100";
let cpfFormat = ""
let cnpjFormat = ""

if (cpf.length == 11) {
    formataCPF(cpf)
} else {
    console.log("CPF Inválido")
}

if (cnpj.length == 14) {
    formataCNPJ(cnpj)
} else {
    console.log("CNPJ Inválido")
}

function formataCPF(cpf) {
    for (let i = 0; i < cpf.length; i++) {
        if (i === 3 || i === 6) {
            cpfFormat += "."
        }
        if (i === 9) {
            cpfFormat += "-"
        }

        cpfFormat += cpf[i]
    }
    console.log(cpfFormat)

    // Jeito enxuto
    // console.log(cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"))
}

function formataCNPJ(cnpj) {
    for (let i = 0; i < cnpj.length; i++) {
        if (i === 2 || i === 5) {
            cnpjFormat += "."
        }
        if (i === 8) {
            cnpjFormat += "/"
        }
        if (i === 12) {
            cnpjFormat += "-"
        }

        cnpjFormat += cnpj[i]
    }
    console.log(cnpjFormat)

    // Jeito enxuto
    // console.log(cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"))
}