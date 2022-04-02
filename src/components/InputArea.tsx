import { motion } from "framer-motion";
import { ReactChild } from "react";
import Link from "next/link";
import { classNames } from "../lib/classNames";
import styled from "styled-components";

interface GradientSelectionProps {
    title: string;
    onChange?: (e: any) => any;
    placeholder: string;
    className?: string;
}

export const InputArea = ({ title, onChange, placeholder, className }: GradientSelectionProps) => {
    return (
        <div className={className}>
            <h3 className="uppercase font-bold text-zinc-700 text-xs mb-1">{title}</h3>
            <div
                className={
                    "w-56 flex flex-row !bg-opacity-20 bg-white dark:bg-zinc-900 transition-all duration-75 border-2 dark:border border-blue-600 focus-within:border-blue-400 dark:border-zinc-800 dark:focus-within:border-zinc-400 rounded-md text-left px-1"
                }
            >
                <span className="p-2 flex items-center justify-center">@</span>
                <input
                    placeholder={placeholder}
                    className={"outline-none text-left bg-transparent placeholder:text-zinc-500"}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};
