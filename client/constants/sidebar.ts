import {
  LayoutDashboard,
  Upload,
  History,
  Settings,
  Folder,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Workspace",
    href: "/",
    icon: LayoutDashboard,          
  },
  {
    title: "Import CSV",
    href: "/import",
    icon: Upload,
  },
  {
    title: "History",
    href: "/history",
    icon: History,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const bottomItems = [];