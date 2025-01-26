import React from "react";
import "../assets/bot-card.css"

function BotCard({ bot, enlistBot}) {
    return(
        <div className="bot-card" onClick={() => enlistBot(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>{bot.catchphrase}</p>
            <p>health: {bot.health}</p>
            <p>damage: {bot.damage}</p>
            <p>armour: {bot.armour}</p>

        </div>
    );
}

export default BotCard;





