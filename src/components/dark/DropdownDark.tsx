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

export const DropdownDark = ({ title, onChange, options, className }: DropdownProps) => {
    return (
        <div className={className}>
            <h3 className="uppercase font-bold text-zinc-700 text-xs mb-1">{title}</h3>
            <div
                className={
                    "w-56 flex flex-row bg-zinc-900 !bg-opacity-20 transition-all duration-75 border border-zinc-800 rounded-md text-left px-1"
                }
            >
                <select
                    placeholder={"Select your milestone..."}
                    className="py-2 px-1 w-full outline-none bg-transparent text-white"
                >
                    {options.map(e => (
                        <option>{e}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};
