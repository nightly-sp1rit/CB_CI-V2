import { CommandGlobals } from "./Globals";
import { GetDate, GetPlayerCharacter, IsStringPlayer, JoinArgsFromIndex, SendError } from "./Utilities";

const NEWLINE = "\n";

const Players = game.GetService("Players");
const Lighting = game.GetService("Lighting");
const TweenService = game.GetService("TweenService");

export class CommandParser {
    public Parse(Sender: Player, Message: string) {
        if (Message.sub(0, 1) === CommandGlobals.Prefix) {
            const EntireCommand = Message.sub(2, Message.size());
            const Args = EntireCommand.split(" ");

            if (Args[0] !== undefined) {
                switch(Args[0]) {
                    case "log":
                        if (Args[1] === undefined) {
                            SendError("Log Message unspecified");
                        }

                        print(Args[1]);

                        break;
                    case "kick":
                        if (Args[1] !== undefined) {
                            const Player: Player | undefined = IsStringPlayer(Args[1]);

                            if (Player === undefined) {
                                SendError("Player specified in /kick was not found!");

                                return;
                            }

                            const IPlayer = Player as Player;

                            if (CommandGlobals.AllowSelfKick === false && Player === Sender) {
                                SendError("You're not allowed to kick yourself!");

                                return;
                            }

                            if (Args[2] === undefined || Args[2].size() < 3) {
                                IPlayer.Kick(CommandGlobals.KickMessageB + " No Reason was specified\n" + GetDate());
                            } else {
                                IPlayer.Kick(CommandGlobals.KickMessageB + " Reason: " + JoinArgsFromIndex(Args, 2) + ". " + GetDate());
                            }
                        } else {
                            SendError("Please specify a Player when running /kick! Argument 2 was not found");

                            return;
                        }

                        break;
                    
                    // Utilities

                    case "time":
                        if (Args[1] === undefined) {
                            SendError("Please Specify the time you want to be set as !");

                            return;
                        }

                        const Number = tonumber(Args[1]);

                        if (Number === undefined) {
                            SendError("Time argument must be a NUMBER");

                            return;
                        }

                        Lighting.ClockTime = Number;

                        break;

                    // Cosmetics

                    case "ignite":
                        if (Args[1] === undefined) {
                            const Character = GetPlayerCharacter(Sender);
                            const HumanoidRootPart = Character.WaitForChild("HumanoidRootPart") as BasePart;

                            const FindResult = HumanoidRootPart.FindFirstChildOfClass("Fire");

                            if (FindResult === undefined) {
                                // Fire doesn't exist
                                
                                const NewFire = new Instance("Fire");

                                NewFire.Parent = HumanoidRootPart;
                            } else {
                                FindResult.Destroy();
                            }
                        }

                        break;
                    case "barbecue":
                        if (Args[1] === undefined) {
                            const Character = GetPlayerCharacter(Sender);
                            const HumanoidRootPart = Character.WaitForChild("HumanoidRootPart") as BasePart;

                            const FindResult = HumanoidRootPart.FindFirstChildOfClass("Smoke");

                            if (FindResult === undefined) {
                                const NewSmoke = new Instance("Smoke");

                                NewSmoke.Parent = HumanoidRootPart;
                            } else {
                                FindResult.Destroy();
                            }
                        }

                        break;
                }
            }
        }
    }
}