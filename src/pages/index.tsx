import type { NextPage } from "next";
import Head from "next/head";
import { LinkButton } from "../components/LinkButton";
import { GradientButton } from "../components/GradientButton";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>milestone</title>
            </Head>
            <div className="w-screen h-screen flex flex-row gap-24 items-center justify-center text-black dark:text-white bg-[#fafbfc] dark:bg-[#01010b]">
                <div className="flex flex-col">
                    <h1 className="mb-2 font-extrabold text-5xl">milestone</h1>
                    <h2 className="text-zinc-800 dark:text-zinc-300 text-xl mb-10">
                        celebrate your achievements with a shareable card
                    </h2>

                    <LinkButton href={"/"} background={"#6366f1"} className="dark:hidden max-w-[13rem]">
                        Create Your Own
                    </LinkButton>
                    <GradientButton href={"/"} background={"#01010b"} className="hidden dark:block max-w-[13rem]">
                        Create Your Own
                    </GradientButton>
                </div>

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
