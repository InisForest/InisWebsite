import { InisElement, jsx } from "../Componentisation";

class InisButtonElement extends InisElement {

    constructor(props) {
        super(props);
    }

    style() {
        return {
            "inis-button": {
                "background-color": "green"
            }
        }
    }

    render() {
        return <div className="inis-button">
            <button onclick={this.props.onClick}>
                {this.props.children}
            </button>
        </div>;
    }

}

customElements.define("inis-button", InisButtonElement);
export { InisButtonElement }
