import { motion } from "framer-motion";
import { ReactChild } from "react";
import Link from "next/link";
import styled from "styled-components";

interface DropdownProps {
    title: string;
    onChange?: (e: any) => any;
    options: string[];
    className?: string;
}

export const DropdownLight = ({ title, onChange, options, className }: DropdownProps) => {
    return (
        <div className={className}>
            <h3 className="uppercase font-bold text-black text-xs mb-1">{title}</h3>
            <div
                className={
                    "w-56 flex flex-row bg-zinc-100 bg-opacity-50 transition-all duration-75 border-2 border-blue-500 dark:border-zinc-700 rounded-md text-left px-1"
                }
            >
                <select
                    placeholder={"Select your milestone..."}
                    className="py-2 px-1 w-full outline-none bg-transparent"
                >
                    {options.map(e => (
                        <option>{e}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};
