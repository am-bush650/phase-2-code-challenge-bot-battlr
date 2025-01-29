import React from "react";
import "../assets/bot-card.css"

function BotCard({ bot, enlistBot, onBotClick }) {
    const handleClick = () => {
        if (onBotClick) {
            onBotClick(bot);
        }
    };

    return(
        <div className="bot-card" onClick={handleClick}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armour: {bot.armor}</p>
            <button onClick={(e) => {e.stopPropagation(); enlistBot(bot);}}>Enlist Bot</button>

        </div>
    );
}

export default BotCard;





