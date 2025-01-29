import React, { useState, useEffect } from "react";
import axios from "axios";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import SortBar from "./components/SortBar";
import BotSpecs from "./components/BotSpecs";
import "./App.css";
import "./index.css";


function App() {

  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [activeCreteria, setActiveCriteria] = useState(null);


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
    setActiveCriteria(criteria);
  };

  const handleBotClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleBack = () => {
    setSelectedBot(null);
  };



  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <sortBar onSort={handleSort} activeCreteria={activeCreteria} />
      
      <YourBotArmy yourArmy={yourArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onEnlist={enlistBot}
          onBack={handleBack}/>

      ) : (

      <BotCollection bots={bots} enlistBot={enlistBot} />

      )}

    </div>
    
  );
}




export default App;
