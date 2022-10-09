export function SendError(Message: string) {
    error(Message);

    return;
}

export function IsStringPlayer(Input: string): Player | undefined {
    let FoundPlayer: Player | undefined;

    game.GetService("Players").GetPlayers().forEach((Player, i) => {
        if (Player.Name.lower().find(Input)[0] !== undefined || Player.DisplayName.lower().find(Input)[0] !== undefined) {
            FoundPlayer = Player;
        }
    });

    return FoundPlayer;
}

function M10Add0(I: number) {
    if (I < 10) {
        return "0" + I
    } else {
        return I;
    }
}

export function GetDate() {
    const time = os.time();

    const Date = os.date("*t", time);

    return M10Add0(Date.hour) + ":" + M10Add0(Date.min) + " " + M10Add0(Date.day) + "/" + M10Add0(Date.month) + "/" + Date.year;
}

export function JoinArgsFromIndex(Arr: Array<string>, Index: number) {
    if (Index > Arr.size() || Index < 0) {
        error("???");

        return;
    }

    let Filtered: Array<string> = [];

    let ci = 0;

    for (let i = Index; i < Arr.size(); i++) {
        Filtered.insert(ci, Arr[i]);
        
        ci++;
    } // filter the elements from index to size for .join();

    return Filtered.join(" ");
}