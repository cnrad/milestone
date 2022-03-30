import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeSelector } from "../components/ThemeSelector";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeSelector />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
