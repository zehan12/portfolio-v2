import clsx from "clsx";
import Link from "next/link";

import Image from "../elements/Image";
import Tooltip from "../elements/Tooltip";
import { VerifiedIcon } from "lucide-react";

interface ProfileHeaderProps {
    expandMenu: boolean;
    imageSize: number;
    isScrolled?: boolean;
}

const ProfileHeader = ({ expandMenu, imageSize }: ProfileHeaderProps) => {
    return (
        <div
            className={clsx(
                "flex items-center lg:items-start gap-4 lg:gap-0.5 flex-grow lg:flex-col w-full",
                expandMenu && "flex-col !items-start"
            )}
        >
            <Image
                src={"https://avatars.githubusercontent.com/u/73664886?s=400&u=b4640ee6fcf6bdb55f455d2b1ec8d91a330f9b04&v=4"}
                alt="Zehan Khan"
                width={expandMenu ? 80 : imageSize}
                height={expandMenu ? 80 : imageSize}
                rounded="rounded-full"
                className="lg:hover:scale-105 border-2 border-neutral-400 dark:border-neutral-600 rotate-3"
            />
            <div className="flex gap-2 items-center mt-1 lg:mt-4">
                <Link href="/" passHref>
                    <h2 className="flex-grow text-lg lg:text-xl font-sora font-medium">
                        Zehan Khan
                    </h2>
                </Link>
                <Tooltip title="Verified">
                    <VerifiedIcon size={18} className="text-blue-400" />
                </Tooltip>
            </div>
            <div className="hidden lg:flex text-sm font-sora text-neutral-600 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 transition-all duration-300">
                @zehan12
            </div>
        </div>
    );
};

export default ProfileHeader;
