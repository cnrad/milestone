import type { NextPage } from "next";
import Head from "next/head";
import { LinkButton } from "../components/LinkButton";
import { GradientButton } from "../components/GradientButton";
import { motion } from "framer-motion";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>milestone</title>
            </Head>
            <div className="w-screen h-screen flex flex-row gap-24 items-center justify-center text-black dark:text-white bg-[#fafbfc] dark:bg-[#01010b]">
                <motion.div
                    key="indexPage"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.5 }}
                    transition={{ duration: 0.3, ease: [0, 0.75, 0.6, 1] }}
                    className="flex flex-col"
                >
                    <h1 className="mb-2 font-extrabold text-5xl select-none">milestone</h1>
                    <h2 className="text-zinc-800 dark:text-zinc-300 text-xl mb-10 select-none">
                        celebrate your achievements with a shareable card
                    </h2>

                    <LinkButton href={"/create"} background={"#6366f1"} className="dark:hidden max-w-[13rem]">
                        Create Your Own
                    </LinkButton>
                    <GradientButton href={"/create"} background={"#01010b"} className="hidden dark:block max-w-[13rem]">
                        Create Your Own
                    </GradientButton>
                </motion.div>

                <div className="flex flex-col">
                    <div className="flex items-center justify-center w-[30rem] h-[15rem] rounded-xl mb-8 border border-zinc-100 dark:border-zinc-800">
                        card
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
