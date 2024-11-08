export const class_dict = {
    Classe: {
        hasSubmitButton: false,
        fields: {
            id_classe: {
                type: 'input',
                inputType: 'number',
                placeholder: 'Class id'
            },
            objeto_aninhado: {
                type: 'class',
                className: 'Aninhada'
            },
        }
    },
    Aninhada: {
        hasSubmitButton: false,
        fields: {
            nome_aninhada: {
                type: 'input',
                placeholder: 'Classe Aninhada'
            }
        }
    },
    NovaClasse: {
        hasSubmitButton: false,
        inherits: 'Classe',
        fields: {
            select: {
                type: 'select',
                options: ['opção1', 'opção2', 'opção3']
            },
            string: {
                type: 'input',
                placeholder: 'Digite o placeholder'
            },
            inteiro: {
                type: 'input',
                inputType: 'number',
                placeholder: 'Digite o placeholder'
            },
            radio: {
                type: 'radio',
                options: ['opção1', 'opção2', 'opção3']
            },
            check: {
                type: 'checkbox'
            },
            list: {
                type: 'array',
                placeholder: 'Digite o placeholder'
            },
            texto_longo: {
                type: 'textarea',
                placeholder: 'Digite o placeholder'
            },
            arquivo: {
                type: 'file',
            },
            data: {
                type: 'date'
            },
            data_hora_local: {
                type: 'datetime-local'
            },
            hora: {
                type: 'time'
            },
            faixa: {
                type: 'range',
                min: 0,
                max: 100
            },
            cor: {
                type: 'color'
            },
            campo_oculto: {
                type: 'hidden',
                value: 'valor_oculto'
            }
        }
    }
}
