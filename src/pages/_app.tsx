import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeSelector } from "../components/ThemeSelector";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeSelector />
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />
            </AnimatePresence>
        </>
    );
}

export default MyApp;
