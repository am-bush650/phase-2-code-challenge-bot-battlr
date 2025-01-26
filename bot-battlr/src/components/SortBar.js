import React from "react";
import "./sort-bar.css";

function SortBar ({onSort}) {
    return (
        <div className="sort-bar">
            <button onClick={() => onSort("health")}>Sort by Health</button>
            <button onClick={() => onSort("damage")}>Sort by Damage</button>
            <button onClick={() => onSort("armour")}>Sort by Armour</button>

        </div>
    );
}

export default SortBar;