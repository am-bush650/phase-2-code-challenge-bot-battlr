import React from "react";
import "../assets/bot-card.css"

function BotCard({ bot, enlistBot, onBotClick }) { //define the botCard component with props

    const handleClick = () => { //define a function to handle clicks on the botcard
        if (onBotClick) { //check if the onBotClICK FUNCTION IS PROVIDED
            onBotClick(bot);//call the onBotClick function with the bot data
        }
    };

    return(
        <div className="bot-card" onClick={handleClick}>
{/*render a div for the bot card and attach the handleclick function to the onclick event */}
            <img src={bot.avatar_url} alt={bot.name} />{/* display the bots avatar using the avatar_url property*/}
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>{/* display the bots health using the health property */}
            <p>Damage: {bot.damage}</p>{/*display the bots damage usung the damage property */}
            <p>Armour: {bot.armor}</p>
            <button onClick={(e) => {e.stopPropagation(); enlistBot(bot);}}>Enlist Bot</button>
            {/*render a button to enlist the bot */}

        </div>
    );
}

export default BotCard;





