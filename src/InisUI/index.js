import { InisElement, jsx, jss } from "../Componentisation";
import { InisButtonElement } from "./InisButton/InisButton.js"
import { InisLogoElement } from "./InisLogo/InisLogo.js"
import { InisJoinMeOnTwitchElement } from "./JoinMeOnTwitch/JoinMeOnTwitch.js"
import { DonateButtonElement } from "./DonateButton/DonateButton.js"

export { jsx }
export default {
    jsx, jss,
    Element : InisElement,
    Logo: InisLogoElement,
    Button: InisButtonElement,
    JoinMeOnTwitch: InisJoinMeOnTwitchElement,
    DonateButton: DonateButtonElement
};