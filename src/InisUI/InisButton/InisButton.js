import { InisElement, jsx } from "../../Componentisation";
import style from "./InisButton.css";

class InisButtonElement extends InisElement {

    constructor(props) {
        super(props);
    }

    style() {
        return style;
    }

    render() {
        return <a className={"inis-button " + (this.props.className || "")} href={this.props.href} onclick={this.props.onClick}>
            <span className="inis_button__shadow"></span>
            <span className="inis-button__content">
                {this.props.children}
            </span>
        </a>;
    }

}

customElements.define("inis-button", InisButtonElement);
export { InisButtonElement }
