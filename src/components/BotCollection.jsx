import React from "react";
import BotCard from "./BotCard";
import "../assets/bot-collection.css"

function BotCollection ({ bots, enlistBot, handleBotClick }) {

    return (
        <div className="bot-collection">{/*render to contain the bot cards */}
            {bots.map(bot => (//map over the bots array to render a bot card for each bot

                <BotCard 
                key={bot.id}// set a unique key for each bot using the bot's id
                bot={bot} //pass the bot object as prop to the botcard
                enlistBot={enlistBot}//pass the enlistbot function as a prop to botcard
                onBotClick={handleBotClick}/>//pass the onbotclick function as a prop to botcard
            ))}

        </div>
    );
}

export default BotCollection;