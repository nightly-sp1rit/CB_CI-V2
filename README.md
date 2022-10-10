# CB_CI V2

This is the Second Installment of the Commands Module known as CB_CI

```bash
git clone https://github.com/ilie-alessandro/CB_CI-V2.git
```

Please take note that this project runs on a **roblox-ts** Game Project and you will need the following tools to implement
the module in your game if there's no Release version available at the moment:

- **Roblox Studio** (`latest`)
- **Node.js**
- **Rojo** (Installed on both your pc and Roblox Studio as a plugin)

To install roblox-ts follow the instructions given on https://roblox-ts.com/

---

## Commands

| Command Name | Syntax | Description |
|--------------|--------|-------------|
| /log | /log {Message: string} | Logs / Prints a Message to the Output (FILTERED) |
| /time | /time {ClockTime: number} | Sets the current ClockTime of the Server |
| /reset | /reset {(optional) Player: string} | Resets your or other's characters |
| /kick | /kick {Player: string} {(optional) Reason: string} | Kicks a Player optionally giving a reason |
| /ignite | /ignite {(optional) Player: string} | Ignite yourself or others |
| /barbecue | /barbecue {(optional) Player: string} | Smoke yourself or others |
| /sparkles | /sparkles {(optional) Player: string} | Turn yourself or others into a glitter bomb |
| /zombify | /zombify {(optional) Player: string} | Turn into a Zombie |

Player is found by matching the Input to the NAME or DISPLAYNAME of a Player
## Customizing

Command Effects along with all settings for the Module are fully customizable and the Settings object (CommandGlobals) can be found in [Globals.ts](https://github.com/ilie-alessandro/CB_CI-V2/blob/master/src/server/Modules/Globals.ts)

## Contributing

Feel free to copy, share, edit the repository as much as you want. If you have any ideas or fix for specific code just make an issue and I'll review it once I'm available to!

