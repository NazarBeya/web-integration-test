import { Quests, Adventure, Leaderboard, Shop, Club, Notifications } from "@/desingSystem"

const ActiveColor = "#262C3A";
const InActiveColor = "#84F7D8";

export const navigationsArr = [
    { id: 1, label: "Quests" , isActive: true, iconActive: Quests(ActiveColor),iconInactive: Quests(InActiveColor)},
    { id: 2, label: "Adventure" , isActive: false, iconActive: Adventure(ActiveColor),iconInactive: Adventure(InActiveColor)},
    { id: 3, label: "Leaderboard" , isActive: false, iconActive: Leaderboard(ActiveColor),iconInactive: Leaderboard(InActiveColor)},
    { id: 4, label: "Shop" , isActive: false, iconActive: Shop(ActiveColor),iconInactive: Shop(InActiveColor)},
    { id: 5, label: "Club" , isActive: false, iconActive: Club(ActiveColor),iconInactive: Club(InActiveColor)},
    { id: 6, label: "Notifications" , isActive: false, iconActive: Notifications(ActiveColor),iconInactive: Notifications(InActiveColor)},
]