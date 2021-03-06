﻿export class xVisualProperty {
    /**
    * @name xVisualProperty
    * @constructor
    * @classdesc Visual model describing property of the object
    * @param {object} [values] - Object which can be used to initialize content of the object. It can be also used to create shallow copy of the object.
    */
    constructor(values: any) {
        if (typeof (values) == 'object') {
            for (var a in values) {
                this[a] = values[a];
            }
        }
    }

    /** @member {string} xVisualProperty#name - name might be translated if you specify a language and culture in {@link xBrowser xBrowser} constructor */
    public name: string = '';
    /** @member {string} xVisualProperty#value - string containing eventually units*/
    public value: string = '';
    /** @member {string} xVisualProperty#id - original name from COBie before any transformation*/
    public id: string = '';
}

