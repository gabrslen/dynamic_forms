
export class Classe {
    constructor(id_classe, objeto_aninhado){
        this.id_classe = id_classe
        this.objeto_aninhado = objeto_aninhado
    }
}

export class Aninhada {
    constructor(nome_aninhada) {
        this.nome_aninhada = nome_aninhada
    }
}

export class NovaClasse extends Classe {
    constructor(id_classe, select, string, inteiro, radio, check, list, texto_longo, arquivo, data, data_hora_local, hora, faixa, cor, campo_oculto){
        super(id_classe)
        this.select = select
        this.string = string
        this.inteiro = inteiro
        this.radio = radio
        this.check = check
        this.list = list
        this.texto_longo = texto_longo
        this.arquivo = arquivo
        this.data = data
        this.data_hora_local = data_hora_local
        this.hora = hora
        this.faixa = faixa
        this.cor = cor
        this.campo_oculto = campo_oculto
    }
}

