import React, { useState } from "react";
import "../assets/sort-bar.css";

function SortBar ({onSort, activeCreteria}) {

    const handleClick = (criteria) => {
        onSort(criteria);
    };

    return (
        <div className="sort-bar">

        <button 
            className={activeCreteria === "health" ? "active" : ""}
                onClick={() => handleClick("health")}>Sort by Health</button>

        <button
            className={activeCreteria === "damage" ? "active" : ""}
            onClick={() => handleClick("damage")}>Sort by Damage</button>



        <button
            className={activeCreteria === "armor" ? "active" : ""}
            onClick={() => handleClick("armor")}>Sort by Armor</button>

        </div>
    );
}

export default SortBar;