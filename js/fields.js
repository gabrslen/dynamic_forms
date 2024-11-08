import * as cb from './classBase.js';
import { class_dict } from './classDicts.js';
export const dict = linkClassesToDict(class_dict)

export function switchFields(className, isRoot = true) {
    const classConfig = dict[className];

    if (!classConfig) {
        console.error(`Classe ${className} não encontrada no dicionário.`);
        return;
    }

    if (classConfig.inherits) {
        switchFields(classConfig.inherits, false);
    }

    const fields = classConfig.fields;

    Object.keys(fields).forEach(fieldName => {
        const fieldConfig = fields[fieldName]

        switch (fieldConfig.type) {
            case 'select':
                createSelectField()
                break
            case 'checkbox':
                createCheckboxField()
                break
            case 'input':
                createInputField()
                break
            case 'array':
                createArrayField()
                break
            case 'radio':
                createRadioField()
                break
            case 'textarea':
                createTextareaField()
                break
            case 'file':
                createFileField()
                break
            case 'date':
                createDateField()
                break
            case 'datetime-local':
                createDateTimeLocalField()
                break
            case 'time':
                createTimeField()
                break
            case 'range':
                createRangeField()
                break
            case 'color':
                createColorField()
                break
            case 'hidden':
                createHiddenField()
                break
            case 'class':
                createFields()
                break
            default:
                console.error(`Tipo de campo não reconhecido: ${fieldConfig.type}`)
        }
    })
}


function linkClassesToDict(dict) {
    Object.keys(dict).forEach(className => {
        try {
            dict[className].class = cb[className];
            if (!dict[className].class) throw new Error();
        } catch (error) {
            console.error(`Erro ao vincular a classe ${className}: Classe não encontrada em classBase.js`);
        }
    });
    return dict;
  }

function createSelectField(){
    console.log('createSelectField')
}
function createCheckboxField(){
    console.log('createCheckboxField')
}
function createInputField(){
    console.log('createInputField')
}
function createArrayField(){
    console.log('createArrayField')
}
function createRadioField(){
    console.log('createRadioField')
}
function createTextareaField(){
    console.log('createTextareaField')
}
function createFileField(){
    console.log('createFileField')
}
function createDateField(){
    console.log('createDateField')
}
function createDateTimeLocalField(){
    console.log('createDateTimeLocalField')
}
function createTimeField(){
    console.log('createTimeField')
}
function createRangeField(){
    console.log('createRangeField')
}
function createColorField(){
    console.log('createColorField')
}
function createHiddenField(){
    console.log('createHiddenField')
}
