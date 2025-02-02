import React, { useState } from "react";
import "../assets/botspecs.css";


function BotSpecs({bot, onEnlist, onBack}) {//define the botspecs component with props: bot, onenlist and onback

    //render a div with a classname to contain the bots details
    return (
        <div className="bot-specs">
            <img src={bot.avatar_url} alt={bot.name} />
            <h2>{bot.name}</h2>
            <p><strong>Health:</strong>{bot.health}</p>
            <p><strong>Damage:</strong>{bot.damage}</p>
            <p><strong>Armor:</strong>{bot.armor}</p>
            <p><strong>Class:</strong>{bot.bot_class}</p>
            
            <div className="bot-specs-buttons">
                <button onClick={onBack}>Go Back</button>
                {/*render a button to go back to the bot list */}
                <button onClick={() => onEnlist(bot)}>Enlist</button>
                {/*a button to enlist the bot */}

            </div>

        </div>
    );
}

export default BotSpecs;