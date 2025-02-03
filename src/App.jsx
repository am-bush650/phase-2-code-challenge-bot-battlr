import React, { useState, useEffect } from "react";
import axios from "axios";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import "./App.css";
import "./index.css";

function App() {
    const [bots, setBots] = useState([]); // Stores the list of all bots fetched from the API
    const [yourArmy, setYourArmy] = useState([]); // Stores the list of bots enlisted in the user's army
    const [selectedBot, setSelectedBot] = useState(null); // Stores the currently selected bot for detailed view
    const [error, setError] = useState(""); // Stores error messages

    useEffect(() => {
        axios.get("https://bots-si0g.onrender.com/bots") // Fetch bot data from the API
            .then(r => setBots(r.data)) // Update the bots state with fetched data
            .catch(error => {
                console.error(error);
                setError("Failed to fetch bots. Please try again later.");
            });
    }, []); // The empty dependency array ensures this effect runs only once when the component mounts

    const enlistBot = (bot) => {
        if (!yourArmy.find(b => b.id === bot.id)) { // Check if the bot is already in the army
            setYourArmy([...yourArmy, bot]); // Add the bot to the army if it's not already there
        }
    };

    const releaseBot = (bot) => {
        setYourArmy(yourArmy.filter(b => b.id !== bot.id)); // Remove the bot from the army
    };

    const dischargeBot = (bot) => {
        axios.delete(`https://bots-si0g.onrender.com/bots/${bot.id}`) // Delete the bot from the server
            .then(() => {
                setBots(bots.filter(b => b.id !== bot.id)); // Remove the bot from the bots list
                releaseBot(bot); // Remove the bot from the user's army
            })
            .catch(error => {
                console.error(error);
                setError("Failed to discharge bot. Please try again later.");
            });
    };


    const handleBotClick = (bot) => {
        setSelectedBot(bot); // Set the selectedBot state to the clicked bot
    };

    const handleBack = () => {
        setSelectedBot(null); // Clear the selectedBot state
    };

    return (
        <div className="App">
            <h1>Bot Battlr</h1>
            {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error messages */}

       <div className="parent-container">     
        <div className="main-container">
            <YourBotArmy yourArmy={yourArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} /> {/* Render the YourBotArmy component */}
            {selectedBot ? ( // Conditional rendering based on selectedBot
                <BotSpecs
                    bot={selectedBot}
                    onEnlist={enlistBot}
                    onBack={handleBack}
                />
            ) : (
                <BotCollection bots={bots} enlistBot={enlistBot} handleBotClick={handleBotClick} />
            )}
        </div>
    </div>
    </div>
    );
}

export default App;