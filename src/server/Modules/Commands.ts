import { CommandGlobals } from "./Globals";
import { GetDate, GetPlayerCharacter, IsStringPlayer, JoinArgsFromIndex, SendError } from "./Utilities";

const NEWLINE = "\n";

const Players = game.GetService("Players");
const Lighting = game.GetService("Lighting");
const TweenService = game.GetService("TweenService");
const TeleportService = game.GetService("TeleportService");

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

                    case "reset":
                        if (Args[1] === undefined) {
                            Sender.LoadCharacter();
                        } else {
                            const Player: Player | undefined = IsStringPlayer(Args[1]);

                            if (Player === undefined) {
                                SendError("Player specified in last run command was not found!");

                                return;
                            }

                            const IPlayer = Player as Player;
                            
                            IPlayer.LoadCharacter();
                        }

                        break;
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

                                NewFire.Color = CommandGlobals.FireEffect.Color;
                                NewFire.Heat = CommandGlobals.FireEffect.Heat;
                                NewFire.SecondaryColor = CommandGlobals.FireEffect.SecondaryColor;
                                NewFire.Size = CommandGlobals.FireEffect.Size;
                                NewFire.TimeScale = CommandGlobals.FireEffect.TimeScale;

                                NewFire.Parent = HumanoidRootPart;
                            } else {
                                FindResult.Destroy();
                            }
                        } else {
                            const Player: Player | undefined = IsStringPlayer(Args[1]);

                            if (Player === undefined) {
                                SendError("Player specified in last run command was not found!");

                                return;
                            }

                            const IPlayer = Player as Player;
                            const Character = GetPlayerCharacter(IPlayer);
                            
                            const HumanoidRootPart = Character.WaitForChild("HumanoidRootPart") as BasePart;

                            const FindResult = HumanoidRootPart.FindFirstChildOfClass("Fire");

                            if (FindResult === undefined) {
                                const NewFire = new Instance("Fire");

                                NewFire.Color = CommandGlobals.FireEffect.Color;
                                NewFire.Heat = CommandGlobals.FireEffect.Heat;
                                NewFire.SecondaryColor = CommandGlobals.FireEffect.SecondaryColor;
                                NewFire.Size = CommandGlobals.FireEffect.Size;
                                NewFire.TimeScale = CommandGlobals.FireEffect.TimeScale;

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

                                NewSmoke.Color = CommandGlobals.SmokeEffect.Color;
                                NewSmoke.Opacity = CommandGlobals.SmokeEffect.Opacity;
                                NewSmoke.RiseVelocity = CommandGlobals.SmokeEffect.RiseVelocity;
                                NewSmoke.Size = CommandGlobals.SmokeEffect.Size;
                                NewSmoke.TimeScale = CommandGlobals.SmokeEffect.TimeScale;

                                NewSmoke.Parent = HumanoidRootPart;
                            } else {
                                FindResult.Destroy();
                            }
                        } else {
                            const Player: Player | undefined = IsStringPlayer(Args[1]);

                            if (Player === undefined) {
                                SendError("Player specified in last run command was not found!");

                                return;
                            }

                            const IPlayer = Player as Player;
                            const Character = GetPlayerCharacter(IPlayer);
                            
                            const HumanoidRootPart = Character.WaitForChild("HumanoidRootPart") as BasePart;

                            const FindResult = HumanoidRootPart.FindFirstChildOfClass("Smoke");

                            if (FindResult === undefined) {
                                const NewSmoke = new Instance("Smoke");

                                NewSmoke.Color = CommandGlobals.SmokeEffect.Color;
                                NewSmoke.Opacity = CommandGlobals.SmokeEffect.Opacity;
                                NewSmoke.RiseVelocity = CommandGlobals.SmokeEffect.RiseVelocity;
                                NewSmoke.Size = CommandGlobals.SmokeEffect.Size;
                                NewSmoke.TimeScale = CommandGlobals.SmokeEffect.TimeScale;

                                NewSmoke.Parent = HumanoidRootPart;
                            } else {
                                FindResult.Destroy();
                            }
                        }

                        break;
                    case "sparkles":
                        if (Args[1] === undefined) {
                            const Character = GetPlayerCharacter(Sender);
                            const HumanoidRootPart = Character.WaitForChild("HumanoidRootPart") as BasePart;

                            const FindResult = HumanoidRootPart.FindFirstChildOfClass("Sparkles");

                            if (FindResult === undefined) {
                                const NewSparkles = new Instance("Sparkles");

                                NewSparkles.SparkleColor = CommandGlobals.SparklesEffect.SparkleColor;
                                NewSparkles.TimeScale = CommandGlobals.SparklesEffect.TimeScale;

                                NewSparkles.Parent = HumanoidRootPart;
                            } else {
                                FindResult.Destroy();
                            }
                        } else {
                            const Player: Player | undefined = IsStringPlayer(Args[1]);

                            if (Player === undefined) {
                                SendError("Player specified in last run command was not found!");

                                return;
                            }

                            const IPlayer = Player as Player;
                            const Character = GetPlayerCharacter(IPlayer);
                            
                            const HumanoidRootPart = Character.WaitForChild("HumanoidRootPart") as BasePart;

                            const FindResult = HumanoidRootPart.FindFirstChildOfClass("Sparkles");

                            if (FindResult === undefined) {
                                const NewSparkles = new Instance("Sparkles");

                                NewSparkles.SparkleColor = CommandGlobals.SparklesEffect.SparkleColor;
                                NewSparkles.TimeScale = CommandGlobals.SparklesEffect.TimeScale;

                                NewSparkles.Parent = HumanoidRootPart;
                            } else {
                                FindResult.Destroy();
                            }
                        }

                        break;
                    case "zombify":
                        if (Args[1] === undefined) {
                            const Character = GetPlayerCharacter(Sender);
                            const Humanoid = Character.WaitForChild("Humanoid") as Humanoid;

                            const ZombieDescription = new Instance("HumanoidDescription");

                            ZombieDescription.Face = CommandGlobals.ZombieMorph.FaceID;
                            ZombieDescription.HeadColor = CommandGlobals.ZombieMorph.ArmsColor3;

                            ZombieDescription.LeftArmColor = CommandGlobals.ZombieMorph.ArmsColor3;
                            ZombieDescription.RightArmColor = CommandGlobals.ZombieMorph.ArmsColor3;

                            ZombieDescription.LeftLegColor = CommandGlobals.ZombieMorph.TorsoAndLegColor3;
                            ZombieDescription.RightLegColor = CommandGlobals.ZombieMorph.TorsoAndLegColor3;
                            ZombieDescription.TorsoColor = CommandGlobals.ZombieMorph.TorsoAndLegColor3;

                            Humanoid.ApplyDescription(ZombieDescription);
                        } else {
                            const Player: Player | undefined = IsStringPlayer(Args[1]);

                            if (Player === undefined) {
                                SendError("Player specified in /zombify was not found!");

                                return;
                            }

                            const IPlayer = Player as Player;
                            const Character = GetPlayerCharacter(IPlayer);

                            const Humanoid = Character.WaitForChild("Humanoid") as Humanoid;

                            const ZombieDescription = new Instance("HumanoidDescription");

                            ZombieDescription.Face = CommandGlobals.ZombieMorph.FaceID;
                            ZombieDescription.HeadColor = CommandGlobals.ZombieMorph.ArmsColor3;

                            ZombieDescription.LeftArmColor = CommandGlobals.ZombieMorph.ArmsColor3;
                            ZombieDescription.RightArmColor = CommandGlobals.ZombieMorph.ArmsColor3;

                            ZombieDescription.LeftLegColor = CommandGlobals.ZombieMorph.TorsoAndLegColor3;
                            ZombieDescription.RightLegColor = CommandGlobals.ZombieMorph.TorsoAndLegColor3;
                            ZombieDescription.TorsoColor = CommandGlobals.ZombieMorph.TorsoAndLegColor3;

                            Humanoid.ApplyDescription(ZombieDescription);
                        }

                        break;
                }
            }
        }
    }
}