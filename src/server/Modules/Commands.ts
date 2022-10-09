import { CommandGlobals } from "./Globals";
import { IsStringPlayer, SendError } from "./Utilities";


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
                            }
                        } else {
                            SendError("Please specify a Player when running /kick! Argument 2 was not found");
                        }

                        break;
                }
            }
        }
    }
}