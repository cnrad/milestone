import { motion } from "framer-motion";
import { ReactChild } from "react";
import Link from "next/link";
import { classNames } from "../lib/classNames";
import styled from "styled-components";

interface GradientButtonProps {
    href: string;
    background?: string | undefined;
    onClick?: () => any;
    className?: string;
    children?: ReactChild;
}

export const GradientButton = ({ onClick, href, background, className, children }: GradientButtonProps) => {
    return (
        <div
            className={classNames(
                className ? className : "",
                "invert dark:invert-0 font-semibold text-base cursor-pointer"
            )}
        >
            <Link href={href}>
                <ButtonBg>
                    <Container background={background} onClick={onClick} className="px-7 py-3">
                        {children}
                    </Container>
                </ButtonBg>
            </Link>
        </div>
    );
};

const Container = styled(motion.div)<{ background: string | undefined }>`
    position: relative;
    line-height: 1rem;
    background: ${({ background }) => (background ? background : "#000")};
    padding: 1rem 1.25rem;
    color: #fff;
    border-radius: 0.5rem;
    text-align: center;
    white-space: nowrap;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 0.35rem;
        border: 2px solid transparent;
        background: linear-gradient(45deg, #be123c, #6b21a8, #3730a3) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
    }
`;

const ButtonBg = styled(motion.div)`
    position: relative;

    &:hover {
        &:before {
            filter: blur(18px);
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
        filter: blur(12px);
        border-radius: 6px;
        opacity: 0.6;
        background: conic-gradient(
            from 147.14deg at 50% 50%,
            #0294fe -55.68deg,
            #be123c 113.23deg,
            #9b4dff 195deg,
            #3730a3 304.32deg,
            #ff2136 473.23deg
        );
    }
`;
