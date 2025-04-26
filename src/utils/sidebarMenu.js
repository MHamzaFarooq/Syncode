import AboutIcon from "@/assets/About";
import AssignmentSVG from "@/assets/Assignment";
import CoursesSVG from "@/assets/CoursesSVG";
import HomeBtn from "@/assets/HomeBtn";
import NotificationIcon from "@/assets/NotificationIcon";
import RecorderSVG from "@/assets/Recorder";

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

export const sidebarMenuAdmin = [
  {
    icon: HomeBtn,
    iconLabel: "Home",
    href: "/admin",
  },
  {
    icon: RecorderSVG,
    iconLabel: "Recorder",
    href: "/record",
  },
  {
    icon: AssignmentSVG,
    iconLabel: "Assignments",
    href: "/add-assignment",
  },
  {
    icon: CoursesSVG,
    iconLabel: "Courses",
    href: "/courses",
  },
];
