import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Image from "next/image";
import aerxLogo from "../public/images/ae_mini.jpg";
import Menu from "./Menu";
import MobileButton from "./MobileButton";
import ChangeLanguage from "./ChangeLanguage";

export default function Nav() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { asPath } = useRouter();
  const [toggled, setToggled] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav
      className="sticky top-0 z-50 w-full px-4 sm:items-center sm:flex sm:flex-row sm:py-4 md:px-24"
      style={{ backgroundColor: "#0F0111" }}
    >
      <div className="flex flex-row items-center justify-center w-full p-2 sm:w-auto">
        <Link href={{ pathname: "/", hash: "about" }}>
          <a
            className={`${
              asPath === "/#about"
                ? "nav-item underline rounded-full p-0 m-0"
                : "nav-item no-underline rounded-full p-0 m-0"
            }`}
          >
            <div className="w-8 h-8 border-2 border-gray-900 rounded-full dark:border-gray-100 sm:h-10 sm:w-10 lg:h-16 lg:w-16">
              <Image
                src={aerxLogo}
                className="rounded-full"
                layout="responsive"
                alt="aerx logo"
                priority
                height={100}
                width={100}
              />
            </div>
          </a>
        </Link>

        <button
          aria-label="toggle dark mode"
          className="ml-4 font-semibold rounded-full sm:ml-8 dark:text-yellow-600 dark:hover:text-yellow-400 dark:bg-gray-900 hover:text-gray-600"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme === "dark" ? (
            <SunIcon className="w-5 h-5 sm:h-8 sm:w-8" />
          ) : (
            <MoonIcon className="w-5 h-5 sm:h-8 sm:w-8" />
          )}
        </button>
        <div className="block sm:hidden">
          <ChangeLanguage />
        </div>
        <MobileButton setToggled={setToggled} toggled={toggled} />
      </div>
      <Menu setToggled={setToggled} toggled={toggled} />
    </nav>
  );
}
