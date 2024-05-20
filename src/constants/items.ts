import { MenuItemProps } from "@/types/menu"
import { HomeIcon } from "lucide-react"

export const MENU_ITEMS: MenuItemProps[] = [
    {
        title: "Home",
        href: "/",
        icon: "",
        isShow: true,
        isExternal: false,
        eventName: "Pages: Home",
        type: "Pages",
    },
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: "",
        isShow: true,
        isExternal: false,
        eventName: "Pages: Dashboard",
        type: "Pages",
    },
    {
        title: "Projects",
        href: "/projects",
        icon: "",
        isShow: true,
        isExternal: false,
        eventName: "Pages: Projects",
        type: "Pages",
    },
    {
        title: "About",
        href: "/about",
        icon: "",
        isShow: true,
        isExternal: false,
        eventName: "Pages: About",
        type: "Pages",
    },
    {
        title: "Contact",
        href: "/contact",
        icon: "",
        isShow: true,
        isExternal: false,
        eventName: "Pages: Contact",
        type: "Pages",
    },
];
