import { Component } from "./Component.js";

export class Form extends Component {
    constructor(parent, attributes) {
        super('form', parent, attributes)
    }

    addChildren(...children) {
        children.forEach(child => { //nas arrow functions o this "transborda" para a instancia superior
            this.getElement().appendChild(child.getElement())
        })
    }
}