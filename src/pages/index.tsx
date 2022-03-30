import type { NextPage } from "next";
import Head from "next/head";
import { LinkButton } from "../components/LinkButton";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>milestone</title>
            </Head>
            <div className="w-screen h-screen flex flex-col items-center justify-center text-black">
                <h1 className="mb-2 font-extrabold text-5xl">milestone</h1>
                <h2 className="text-zinc-800 text-xl mb-6">celebrate your achievements with a shareable card</h2>
                <LinkButton href={"/"} background={"#6366f1"}>
                    Try Now
                </LinkButton>
            </div>
        </>
    );
};

export default Home;
