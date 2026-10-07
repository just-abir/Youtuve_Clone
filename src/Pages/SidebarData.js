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
  { icon: PlaySquare, text: "Shorts", path: "/" },
];

export const subscriptions = [
  { icon: CircleUserRound, text: "Elias Hossain", path: "/" },
  { icon: CircleUserRound, text: "Dram Biker", path: "/" },
  { icon: CircleUserRound, text: "CodeCamp", path: "/" },
  { icon: CircleUserRound, text: "AlFursat", path: "/" },
  { icon: CircleUserRound, text: "Elias Hossain", path: "/" },
];

export const youItems = [
  { icon: History, text: "History", path: "/" },
  { icon: ListVideo, text: "Playlist", path: "/" },
  { icon: ArrowDownToLine, text: "Download", path: "/" },
  { icon: Clock, text: "Watch History", path: "/" },
];

export const exploreItems = [
  { icon: Music, text: "Music", path: "/" },
  { icon: Gamepad2, text: "Gaming", path: "/" },
  { icon: Trophy, text: "Sports", path: "/" },
];

export const moreInfoItems = [
  { icon: Settings, text: "Settings", path: "/" },
  { icon: Flag, text: "Report History", path: "/" },
  { icon: CircleQuestionMark, text: "Help", path: "/" },
  { icon: MessageSquareWarning, text: "Send Feedback", path: "/" },
];
