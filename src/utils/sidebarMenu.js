import AboutIcon from "@/assets/About";
import HomeBtn from "@/assets/HomeBtn";
import NotificationIcon from "@/assets/NotificationIcon";

export const sidebarMenu = [
  {
    icon: HomeBtn,
    iconLabel: "Home",
    href: "/dashboard",
  },
  {
    icon: NotificationIcon,
    iconLabel: "Notifications",
    href: "/notifications",
  },
  {
    icon: AboutIcon,
    iconLabel: "About Us",
    href: "/about",
  },
];
