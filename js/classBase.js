export class Class {
    constructor(class_id, nested_object){
        this.class_id = class_id;
        this.nested_object = nested_object;
    }
}

export class Nested {
    constructor(nested_name) {
        this.nested_name = nested_name;
    }
}

export class NewClass extends Class {
    constructor(class_id, select, string, integer, radio, check, array, text_area, file, date, datetime_local, time, range, color, hidden_field){
        super(class_id);
        this.select = select;
        this.string = string;
        this.integer = integer;
        this.radio = radio;
        this.check = check;
        this.array = array;
        this.text_area = text_area;
        this.file = file;
        this.date = date;
        this.datetime_local = datetime_local;
        this.time = time;
        this.range = range;
        this.color = color;
        this.hidden_field = hidden_field;
    }
}
