import { useContext } from "react";
import { useWindowSize } from "usehooks-ts";

// import { CommandPaletteContext } from "@/common/context/CommandPaletteContext";

import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { MENU_ITEMS } from "@/constants/items";

const Navigation = () => {
    // const { setIsOpen } = useContext(CommandPaletteContext);
    const { width } = useWindowSize();
    const isMobile = width < 480;

    const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);

    const handleOpenCommandPalette = () => {
        // setIsOpen(true);
    };

    const cn = "group-hover:-rotate-12 transition-all duration-300";

    return (
        <div>
            <Menu list={filterdMenu} />
            <div className="pt-1">
                <MenuItem
                    title={isMobile ? "Command" : "cmd + k"}
                    href="#"
                    icon=""
                    // icon={<CommandIcon className={cn} size={20} />}
                    isExternal={false}
                    onClick={() => handleOpenCommandPalette()}
                >
                    <div className="relative inline-flex items-center px-2 py-0.10 rounded-full text-[10px] font-medium bg-green-200 text-green-800 ">
                        <div className="absolute -ml-3 w-[4.9rem] rounded-full h-5 border-2 border-green-300 animate-badge-pulse"></div>
                        <span>AI Powered</span>
                    </div>
                </MenuItem>
            </div>
        </div>
    );
};

export default Navigation;
