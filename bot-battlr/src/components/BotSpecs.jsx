import React from "react";
import "../assets/botspecs.css";


function BotSpecs({bot, onEnlist, onBack}) {
    return (
        <div className="bot-specs">
            <img src={bot.avatar_url} alt={bot.name} />
            <h2>{bot.name}</h2>
            <p><strong>Health:</strong>{bot.health}</p>
            <p><strong>Damage:</strong>{bot.damage}</p>
            <p><strong>Armor:</strong>{bot.armor}</p>
            <p><strong>Class:</strong>{bot.bot_class}</p>
            <p><strong>Catchphrase:</strong>{bot.catchphrase}</p>
            <div className="bot-specs-buttons">
                <button onClick={onBack}>Go Back</button>
                <button onClick={() => onEnlist(bot)}>Enlist</button>

            </div>

        </div>
    );
}

export default BotSpecs;