import { InisElement, jsx } from "../../Componentisation";
import style from "./JoinMeOnTwitch.css";

class InisJoinMeOnTwitchElement extends InisElement {

    constructor(props) {
        super(props);
    }

    style() {
        return style;
    }

    render() {
      return <div className="join-me-on-twitch">
        <span className="join-me-on-twitch__text">Join me on </span>
        <span className="join-me-on-twitch__buttons">
          <inis-button className="join-me-on-twitch__button" href="https://twitch.tv/inis_chan">
            <img className="join-me-on-twitch__logo" src="assets/twitch.svg" alt="twitch" />
          </inis-button>
          !
          <img className="join-me-on-twitch__heart" src="assets/heart.svg" alt="heart" />
        </span>
      </div>;
    }

}

customElements.define("join-me-on-twitch", InisJoinMeOnTwitchElement);
export { InisJoinMeOnTwitchElement }
