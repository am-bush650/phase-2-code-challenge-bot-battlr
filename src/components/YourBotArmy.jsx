import React from "react";
import "../assets/yourbotarmy.css";

function YourBotArmy({ yourArmy, releaseBot, dischargeBot}) {
    return(
        <div className="your-bot-army">
            {yourArmy.map(bot => (
                <div key={btoa.id} className="enlisted-bot">
                    <img src={bot.avatar_url} alt={bot.name} />
                    <h3>{bot.name}</h3>
                    <button onClick={() => releaseBot(bot)}>Release</button>
                    <button onClick={() => dischargeBot(bot)}>x</button>
                </div>
            ))}

        </div>
    );
}

export default YourBotArmy;