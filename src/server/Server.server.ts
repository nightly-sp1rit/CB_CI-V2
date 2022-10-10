import { CommandParser } from "./Modules/Commands";

const Players = game.GetService("Players");

const Parser = new CommandParser();

Players.PlayerAdded.Connect((Player) => {
    Player.Chatted.Connect((Message) => {

        Parser.Parse(Player, Message);
    });
});

game.BindToClose(() => { task.wait(3) });