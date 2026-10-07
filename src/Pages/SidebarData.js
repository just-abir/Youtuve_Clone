import {
  ArrowDownToLine,
  CircleQuestionMark,
  CircleUserRound,
  Clock,
  Flag,
  Gamepad2,
  History,
  House,
  ListVideo,
  MessageSquareWarning,
  Music,
  PlaySquare,
  Settings,
  Trophy,
} from "lucide-react";
export const menuItems = [
  { icon: House, text: "Home", path: "/" },
  { icon: PlaySquare, text: "Shorts", path: "/history" },
];

export const subscriptions = [
  { icon: CircleUserRound, text: "Elias Hossain", path: "/subscription" },
  { icon: CircleUserRound, text: "Dram Biker", path: "/subscription" },
  { icon: CircleUserRound, text: "CodeCamp", path: "/subscription" },
  { icon: CircleUserRound, text: "AlFursat", path: "/subscription" },
  { icon: CircleUserRound, text: "Elias Hossain", path: "/subscription" },
];

export const youItems = [
  { icon: History, text: "History", path: "/history" },
  { icon: ListVideo, text: "Playlist", path: "/history" },
  { icon: ArrowDownToLine, text: "Download", path: "/history" },
  { icon: Clock, text: "Watch History", path: "/history" },
];

export const exploreItems = [
  { icon: Music, text: "Music", path: "/history" },
  { icon: Gamepad2, text: "Gaming", path: "/history" },
  { icon: Trophy, text: "Sports", path: "/history" },
];

export const moreInfoItems = [
  { icon: Settings, text: "Settings", path: "/history" },
  { icon: Flag, text: "Report History", path: "/history" },
  { icon: CircleQuestionMark, text: "Help", path: "/history" },
  { icon: MessageSquareWarning, text: "Send Feedback", path: "/history" },
];