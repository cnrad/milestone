import { motion } from "framer-motion";
import { ReactChild } from "react";
import Link from "next/link";
import { classNames } from "../../lib/classNames";
import styled from "styled-components";

interface GradientSelectionProps {
    background?: string | undefined;
    onClick?: () => any;
    className?: string;
    children?: ReactChild;
    color1: string;
    color2: string;
    selected: boolean;
}

export const GradientSelection = ({
    onClick,
    background,
    className,
    children,
    color1,
    color2,
    selected,
}: GradientSelectionProps) => {
    return (
        <div
            className={classNames(
                className ? className : "",
                "invert dark:invert-0 font-semibold text-base cursor-pointer"
            )}
        >
            <ButtonBg color1={color1} color2={color2}>
                <Container
                    color1={color1}
                    color2={color2}
                    background={selected ? `linear-gradient(30deg, ${color1}, ${color2})` : background}
                    onClick={onClick}
                    className="select-none"
                >
                    {children}
                </Container>
            </ButtonBg>
        </div>
    );
};

const Container = styled(motion.div)<{ background: string | undefined; color1: string; color2: string }>`
    position: relative;
    line-height: 1rem;
    background: ${({ background }) => background ?? "#10101b"};
    padding: 1rem 1.25rem;
    color: #fff;
    border-radius: 0.35rem;
    text-align: center;
    white-space: nowrap;
    padding: 0.75rem 2rem;
    transition: all 0.1s ease-in-out;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 0.35rem;
        border: 2px solid transparent;
        background: linear-gradient(45deg, ${({ color1 }) => color1}, ${({ color2 }) => color2}) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
    }
`;

const ButtonBg = styled(motion.div)<{ color1: string; color2: string }>`
    position: relative;

    &:hover {
        &:before {
            filter: blur(14px);
        }
    }

    &:before {
        transition: all 0.2s ease-in-out;
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 0;
        filter: blur(8px);
        border-radius: 6px;
        opacity: 0.6;
        background: conic-gradient(
            from 147.14deg at 50% 50%,
            ${({ color1 }) => color1} -55.68deg,
            ${({ color1 }) => color1} 113.23deg,
            #9b4dff 195deg,
            ${({ color2 }) => color2} 304.32deg,
            ${({ color2 }) => color2} 473.23deg
        );
    }
`;
