import "regenerator-runtime/runtime";
import 'twitch-stream-embed';

import "./Componentisation";
import "./InisUI";

document.addEventListener("DOMContentLoaded", () => {
    const twitchEmbed = document.querySelector(".twitch-embed");
    twitchEmbed.addEventListener("twitch-stream.offline", () => {
        twitchEmbed.embed.setVideo("984880580");
        console.log("Offline!");
    });
})