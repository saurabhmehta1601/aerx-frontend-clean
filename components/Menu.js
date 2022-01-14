import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import ChangeLanguage from "./ChangeLanguage";

export default function Menu({ toggled, setToggled }) {
  const { asPath } = useRouter();
  const { t, lang } = useTranslation("common");

  return (
    <div
      className={`sm:flex sm:flex-row sm:space-x-2 ml-auto items-center  ${
        toggled ? "" : "hidden"
      }`}
    >
      <div className="hidden sm:block">
        <ChangeLanguage />
      </div>
      <div className="p-2" onClick={() => setToggled((prev) => !prev)}>
        <Link href={{ pathname: "/", hash: "welcome" }}>
          <a
            className={`${
              asPath === "/#welcome" || asPath === "/"
                ? "underline nav-item"
                : "no-underline nav-item"
            }`}
          >
            {t("navLinkHome")}
          </a>
        </Link>
      </div>
      <div className="p-2" onClick={() => setToggled((prev) => !prev)}>
        <Link href={{ pathname: "/", hash: "features" }}>
          <a
            className={`${
              asPath === "/#features"
                ? "underline nav-item"
                : "no-underline nav-item"
            }`}
          >
            {t("navLinkFeatures")}
          </a>
        </Link>
      </div>
      <div className="p-2" onClick={() => setToggled((prev) => !prev)}>
        <Link href={{ pathname: "/", hash: "aboutUs" }}>
          <a
            className={`${
              asPath === "/#aboutUs"
                ? "underline nav-item"
                : "no-underline nav-item"
            }`}
          >
            {t("navLinkAboutUs")}
          </a>
        </Link>
      </div>
    </div>
  );
}
