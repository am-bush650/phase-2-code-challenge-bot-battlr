import React, { useState, useEffect } from "react";
import axios from "axios";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";
import "./index.css";


function App() {

  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = useState([]);


  useEffect(() => {
    axios.get("https://bots-si0g.onrender.com/bots")
      .then(r => setBots(r.data))
      .catch(error => console.error(error));
  }, []);

  const enlistBot = (bot) => {
    if (!yourArmy.find(b => b.id === bot.id)) {
      setYourArmy([...yourArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    setYourArmy(yourArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    axios.delete(`https://bots-si0g.onrender.com/bots/${bot.id}`)
      .then(() => {
        setBots(bots.filter(b => b.id !== bot.id));
        releaseBot(bot);
      })
      .catch(error => console.error(error));
  };

  const handleSort = (criteria) => {
    const sortedBots = [...bots].sort((a, b) => b[criteria] - a[criteria]);
    setBots(sortedBots);
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <sortBar onSort={handleSort} />
      
      <YourBotArmy yourArmy={yourArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} />

    </div>
    
  );
}




export default App;
