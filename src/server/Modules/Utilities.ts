export function SendError(Message: string) {
    error(Message);

    return;
}

export function IsStringPlayer(Input: string): Player | undefined {
    let FoundPlayer: Player | undefined;

    game.GetService("Players").GetPlayers().forEach((Player, i) => {
        if (Player.Name.find(Input)[0] !== undefined || Player.DisplayName.find(Input)[0] !== undefined) {
            FoundPlayer = Player;
        }
    });

    return FoundPlayer;
}