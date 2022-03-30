import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

export const ThemeSelector = (props: any) => {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        let theme = localStorage.getItem("theme") as string;

        if (typeof localStorage.getItem("theme") !== "string") {
            window.matchMedia("(prefers-color-scheme: dark)").matches ? setTheme("dark") : setTheme("light");
            localStorage.setItem("theme", theme);
        } else {
            setTheme(theme);
            theme === "dark" ? document.querySelector("html")?.classList.add("dark") : null;
        }
    }, []);

    const changeTheme = () => {
        if (theme === "light") {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
            document.querySelector("html")?.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
            document.querySelector("html")?.classList.remove("dark");
        }
    };

    return (
        <div
            className="transition-all duration-150 p-3 fixed right-0 top-0 mr-6 mt-6 cursor-pointer dark:text-white text-black rounded-md bg-opacity-0 hover:bg-opacity-25 bg-slate-400"
            onClick={changeTheme}
        >
            {theme === "light" ? (
                <MoonIcon className="text-black w-6 h-6" />
            ) : (
                <SunIcon className="text-white w-6 h-6" />
            )}
        </div>
    );
};
