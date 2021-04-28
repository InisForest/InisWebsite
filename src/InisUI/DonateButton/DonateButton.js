import { InisElement, jsx } from "../../Componentisation";
import style from "./DonateButton.css";

class DonateButtonElement extends InisElement {

    constructor(props) {
        super(props);
    }

    style() {
        return style;
    }

    render() {
        return <div className="donate-button">
        <inis-button href="https://streamlabs.com/inis_chan/tip">
          <span className="donate-button__text">Donate</span>
          <img className="donate-button__heart" alt="" src="/assets/inis-heart.png" />
        </inis-button>
      </div>;
    }

}

customElements.define("donate-button", DonateButtonElement);
export { DonateButtonElement }
