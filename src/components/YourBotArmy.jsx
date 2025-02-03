import React from "react";
import "../assets/yourbotarmy.css";

function YourBotArmy({ yourArmy, releaseBot, dischargeBot}) { // YourBotArmy component displays the bots in the user's army
    return(
        <div className="your-bot-army"> {/*container for the enlisted bots */}
            {yourArmy.map(bot => (//Loop through each bot in the army
                <div key={bot.id} className="enlisted-bot">
                    <img src={bot.avatar_url} alt={bot.name} />
                    <h3>{bot.name}</h3>
                    <button onClick={() => releaseBot(bot)}>Release</button> {/*button to release the bot */}
                    <button onClick={() => dischargeBot(bot)}>x</button> {/*button to delete the bot */}
                </div>
            ))}

        </div>
    );
}

export default YourBotArmy;