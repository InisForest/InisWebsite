import "regenerator-runtime/runtime";
import 'twitch-stream-embed';

import "./Componentisation";
import "./InisUI";

document.addEventListener("DOMContentLoaded", () => {
    
    const liveStream = document.getElementById("live-stream");
    const clipStream = document.getElementById("clip-stream");
    
    liveStream.addEventListener("twitch-stream.online", () => {
        // twitchEmbed.embed.setVideo("TalentedAttractiveOtterNomNom-wMStXQ8bk5J4_wOn");
        console.log("Online!");
        liveStream.style.display = "block";
        clipStream.style.display = "none";
    });
    
    liveStream.addEventListener("twitch-stream.offline", () => {
        // twitchEmbed.embed.setVideo("TalentedAttractiveOtterNomNom-wMStXQ8bk5J4_wOn");
        console.log("Offline!");
        clipStream.style.display = "block";
        liveStream.style.display = "none";
    });
})