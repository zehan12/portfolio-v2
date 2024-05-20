import { ReactNode } from "react";

export type MenuItemProps = {
    title: string;
    href: string;
    icon: string;
    isShow?: boolean;
    isExternal: boolean;
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
    eventName?: string;
    hideIcon?: boolean;
    type?: string;
};
