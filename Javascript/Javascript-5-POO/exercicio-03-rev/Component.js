export class Component {
    #element = null

    constructor(tag, parent, attributes) {
        this.tag = tag
        this.parent = parent
        this.attributes = attributes
        this.build()
    }

    build() {
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.attributes)
        return this
    }

    getElement() {
        return this.#element
    }

    render() {
        if (this.parent instanceof Component) {
            this.parent.getElement().append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
        return this
    }
}