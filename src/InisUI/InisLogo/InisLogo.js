import { InisElement, jsx } from "../../Componentisation";

class InisLogoElement extends InisElement {

    constructor(props) {
        super(props);
    }

    style() {
        return null;
    }

    render() {
        return <img className="inis-logo" alt="Inis" src="/assets/logo.svg" />;
    }

}

customElements.define("inis-logo", InisLogoElement);
export { InisLogoElement }
