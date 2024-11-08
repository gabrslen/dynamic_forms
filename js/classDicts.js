export const class_dict = {
    Class: {
        hasSubmitButton: false,
        fields: {
            class_id: {
                type: 'input',
                inputType: 'number',
                placeholder: 'Class ID'
            },
            nested_object: {
                type: 'class',
                className: 'Nested'
            },
        }
    },
    Nested: {
        hasSubmitButton: false,
        fields: {
            nested_name: {
                type: 'input',
                placeholder: 'Nested Class'
            }
        }
    },
    NewClass: {
        hasSubmitButton: false,
        inherits: 'Class',
        fields: {
            select: {
                type: 'select',
                options: ['option1', 'option2', 'option3']
            },
            string: {
                type: 'input',
                placeholder: 'Enter placeholder'
            },
            integer: {
                type: 'input',
                inputType: 'number',
                placeholder: 'Enter placeholder'
            },
            radio: {
                type: 'radio',
                options: ['option1', 'option2', 'option3']
            },
            check: {
                type: 'checkbox'
            },
            array: {
                type: 'array',
                placeholder: 'Enter placeholder'
            },
            text_area: {
                type: 'textarea',
                placeholder: 'Enter placeholder'
            },
            file: {
                type: 'file',
            },
            date: {
                type: 'date'
            },
            datetime_local: {
                type: 'datetime-local'
            },
            time: {
                type: 'time'
            },
            range: {
                type: 'range',
                min: 0,
                max: 100
            },
            color: {
                type: 'color'
            },
            hidden_field: {
                type: 'hidden',
                value: 'hidden_value'
            }
        }
    }
}

