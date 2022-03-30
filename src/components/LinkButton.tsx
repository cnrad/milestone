import { motion } from "framer-motion";
import { ReactChild } from "react";
import Link from "next/link";
import { classNames } from "../lib/classNames";

interface LinkButtonProps {
    href: string;
    background: string;
    onClick?: () => any;
    children?: ReactChild;
}

export const LinkButton = ({ onClick, href, background, children }: LinkButtonProps) => {
    return (
        <Link href={href}>
            <motion.div
                className="cursor-pointer font-semibold text-base text-white select-none px-7 py-3 flex items-center justify-center rounded-lg"
                onClick={onClick}
                style={{ background: background, boxShadow: `0 10px 30px -5px ${background}` }}
                whileHover={{ filter: "brightness(85%)" }}
            >
                {children}
            </motion.div>
        </Link>
    );
};
