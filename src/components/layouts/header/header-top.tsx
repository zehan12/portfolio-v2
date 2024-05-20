'use client'
import { ThemeToggle } from "@/components/common/theme-toggle";
import Tooltip from "@/components/elements/Tooltip";
import Image from "@/components/elements/Image"
import { MENU_ITEMS } from "@/constants/items";
import clsx from "clsx";
import { VerifiedIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Profile from "@/components/sidebar/Profile";

const HeaderTop = () => {
    const [showMenu, setShowMenu] = useState(false);

    const router = useRouter();

    const menus = MENU_ITEMS.filter(
        (item) => item.isShow && item.title !== "Home"
    );
    return (
        <header>
            <div className="hidden lg:flex gap-5 items-center justify-between py-8 mx-8">
                <div className="flex items-center gap-5">
                    <Image
                        src={"https://avatars.githubusercontent.com/u/73664886?s=400&u=b4640ee6fcf6bdb55f455d2b1ec8d91a330f9b04&v=4"}
                        alt="avatar"
                        width={40}
                        height={40}
                        rounded="rounded-full"
                        className="lg:hover:scale-105 border-2 border-neutral-400 dark:border-neutral-600 rotate-3"
                    />
                    {!showMenu && (
                        <div className="flex items-center gap-3">
                            <Link href="/" passHref>
                                <h2 className="flex-grow text-lg lg:text-xl font-sora font-medium">
                                    Zehan Khan
                                </h2>
                            </Link>
                            <Tooltip title="Verified">
                                <VerifiedIcon
                                    size={18}
                                    className="text-blue-400"
                                    data-aos="flip-right"
                                />
                            </Tooltip>
                        </div>
                    )}
                </div>

                <div className="flex justify-between items-center gap-5">
                    {showMenu && (
                        <div
                            className="flex gap-6 items-center"
                            data-aos="flip-up"
                        >
                            {menus.map((menu, index) => (
                                <Link
                                    key={index}
                                    href={menu.href}
                                    passHref
                                    className={clsx(
                                        "text-neutral-700 hover:text-neutral-800 dark:text-neutral-400 hover:dark:text-neutral-100",
                                        router?.pathname === menu?.href &&
                                            "!text-neutral-800 dark:!text-neutral-100"
                                    )}
                                >
                                    <div>{menu.title}</div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {!showMenu && (
                        <>
                            <ThemeToggle />
                            {/* <CommandIcon
                                onClick={() => setIsOpen(true)}
                                className="cursor-pointer"
                                size={20}
                            /> */}
                        </>
                    )}

                    <button
                        className="flex items-center gap-2 dark:bg-neutral-900 backdrop-blur border dark:border-neutral-700 rounded-md p-2"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        {/* {showMenu ? (
                            <CloseIcon size={18} />
                        ) : (
                            <MenuIcon size={18} />
                        )} */}
                    </button>
                </div>
            </div>
            <div className="block lg:hidden">
                <Profile />
            </div>
        </header>
    );
};

export default HeaderTop;