import { Component } from "./Component.js";

export class Label extends Component {
    constructor(text, parent, attributes) {
        super('label', parent, Object.assign({}, attributes, { textContent: text }))
    }
}