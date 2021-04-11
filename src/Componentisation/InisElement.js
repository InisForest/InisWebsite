import jss from "jss";

class InisElement extends HTMLElement {

    constructor(props) {
        super();
        this.props = props;
        if (this.props === undefined) {
            this.props = {};
            for (const name of this.getAttributeNames()) {
                const newName = this._convertAttributeName(name);
                if (newName.startsWith("on")) {
                    this.props[newName] = (...args) => eval(this.getAttribute(name));
                    continue;
                }
                this.props[newName] = this.getAttribute(name);
            }
            this.props.children = [];
            this.childNodes.forEach(child =>
                this.props.children.push(child));
        }
    }

    connectedCallback() {
        const style = document.createElement("style");
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(this.render())
        style.innerHTML = jss.createStyleSheet(this.style(), { generateId : rule => rule.key }).toString();
        this.shadowRoot.appendChild(style);
    }

    style() {
        return null;
    }

    render() {
        return <div></div>;
    }

    _convertAttributeName(name) {
        let newName = "";
        let lastCharDash = false;
        for (const char of name) {
            if (char === "-") {
                lastCharDash = true;
                continue;
            }
            if (lastCharDash) {
                lastCharDash = false;
                newName += char.toUpperCase();
                continue;
            }
            newName += char;
        }
        return newName;
    }
    
}

export { InisElement };
