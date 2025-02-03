# BOT BATTLR

Bot battlr is a react based web application where users can browse a collection of bots, enlist them into their army and view detailed bot specifications and manage their army.

The app fetches bot data from an external api and allows users to enlist , release and discharge bots.

# Features

-fetches bot data from an api

-provides detailed bot specifications upon selection

-enebles users to release bots back to the collection

-supports permanently discharging bots from the server

-allows users to enlist bots into their personal army


# Tech used

-React (useState, UseEffect)

-Axios (for Api requests) [learn more..](https://axios-http.com/docs/intro)

-CSS for styling

# Components

**App**

-manages state for bots, user army slected bots and errors

-fetches bots from API on mount

-handles bot enlistment, release and discharge


**YourBotArmy**

-displays enlisted bots

-provides buttons to release or permanently discharge bots

**BotSpecs**

-displays detailed information about a selected bot

-allows users to enlist the bot or return to the main list


**BotCollection**

-displays all available bots

-allows users to click on a bot to view details or enlist directly

**BotCard**

-displays a bot avatar name, health, damage and armour

-handles click events for viewing details or enlisting

**How to use**

-click on a bot to view its details

-press enlist to add a bot to your army

-press release to remove a bot from your army

-press x to permamnently delete a bot from the server

-view enlisted bots in the your army section


**Future improvements**

-implement filtering (sorting) by bot class

-add search functionality

-improve UI/UX with a better layout