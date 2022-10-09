import { CommandParser } from "./Modules/Commands";

const Players = game.GetService("Players");

Players.PlayerAdded.Connect((Player) => {
    Player.Chatted.Connect((Message) => {
        const NewParser = new CommandParser();

        NewParser.Parse(Player, Message);
    });
});