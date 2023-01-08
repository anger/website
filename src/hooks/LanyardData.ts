import { useLanyardWS } from "use-lanyard";

const discord_id = "931661645766344795";

export function LanyardData() {
    const activity = useLanyardWS(discord_id);
    return activity;
}