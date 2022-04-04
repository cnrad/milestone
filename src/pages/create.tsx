import type { NextPage } from "next";
import Head from "next/head";
import { LinkButton } from "../components/light/LinkButton";
import { GradientButton } from "../components/dark/GradientButton";
import { useState } from "react";
import { GradientSelection } from "../components/dark/GradientSelection";
import { AnimatePresence, motion } from "framer-motion";
import { InputArea } from "../components/InputArea";
import { DropdownDark } from "../components/dark/DropdownDark";
import { DropdownLight } from "../components/light/DropdownLight";
const Home: NextPage = () => {
    const [tabState, setTabState] = useState<"twitter" | "github">("twitter");
    const [twitterUsername, setTwitterUsername] = useState<string>("");
    const [githubUsername, setGithubUsername] = useState<string>("");
    const [milestoneCount, setMilestoneCount] = useState<string>("");

    return (
        <>
            <Head>
                <title>create your milestone</title>
            </Head>
            <div className="w-screen h-screen flex flex-row gap-24 items-center justify-center text-black dark:text-white bg-[#fafbfc] dark:bg-[#01010b]">
                <motion.div
                    key="createPage"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.5 }}
                    transition={{ duration: 0.3, ease: [0, 0.75, 0.6, 1] }}
                    className="flex flex-col w-1/3"
                >
                    <h1 className="mb-6 font-extrabold text-4xl select-none">create your milestone</h1>

                    <div className="flex flex-row gap-4 mb-8">
                        <GradientSelection
                            selected={tabState === "twitter"}
                            color1={"#2942ff"}
                            color2={"#28abfc"}
                            onClick={() => setTabState("twitter")}
                        >
                            Twitter
                        </GradientSelection>

                        <GradientSelection
                            selected={tabState === "github"}
                            color1={"#b318f0"}
                            color2={"#4b18f2"}
                            onClick={() => setTabState("github")}
                        >
                            GitHub
                        </GradientSelection>
                    </div>

                    <AnimatePresence exitBeforeEnter>
                        {tabState === "twitter" && (
                            <motion.div
                                key="twitter"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: [0, 0.75, 0.6, 1] }}
                            >
                                <InputArea
                                    title={"Username"}
                                    placeholder={"username"}
                                    onChange={(e: any) => setTwitterUsername(e.target.value)}
                                    className="mb-4"
                                    leftContent={"@"}
                                />
                                <DropdownDark
                                    title="Milestone type"
                                    options={["Tweets", "Followers"]}
                                    className="hidden dark:block mb-4"
                                />
                                <DropdownLight
                                    title="Milestone type"
                                    options={["Tweets", "Followers"]}
                                    className="dark:hidden mb-4"
                                />
                                <InputArea
                                    title={"Milestone Count"}
                                    placeholder={"number"}
                                    onChange={(e: any) => setMilestoneCount(e.target.value)}
                                />
                            </motion.div>
                        )}
                        {tabState === "github" && (
                            <motion.div
                                key="github"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: [0, 0.75, 0.6, 1] }}
                            >
                                <InputArea
                                    title={"Username"}
                                    placeholder={"username/repo"}
                                    onChange={(e: any) => setGithubUsername(e.target.value)}
                                    className="mb-4"
                                    leftContent={"@"}
                                />
                                <DropdownDark
                                    title="Milestone type"
                                    options={["Followers", "Stars"]}
                                    className="hidden dark:block mb-4"
                                />
                                <DropdownLight
                                    title="Milestone type"
                                    options={["Followers", "Stars"]}
                                    className="dark:hidden mb-4"
                                />
                                <InputArea
                                    title={"Milestone Count"}
                                    placeholder={"number"}
                                    onChange={(e: any) => setMilestoneCount(e.target.value)}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <LinkButton href={"/"} background={"#6366f1"} className="dark:hidden max-w-[13rem] mt-24">
                        Share
                    </LinkButton>
                    <GradientButton href={"/"} background={"#01010b"} className="hidden dark:block max-w-[13rem] mt-24">
                        Share
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
