import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import ChangeLanguage from "./ChangeLanguage";

export default function Menu({ toggled, setToggled }) {
  const { asPath } = useRouter();
  const { t, lang } = useTranslation("common");

  return (
    <div
      className={`sm:ml-[142px] sm:flex sm:items-center sm:w-full ${
        toggled ? "" : "hidden"
      }`}
    >
      <div className="p-2" onClick={() => setToggled((prev) => !prev)}>
        <Link href={{ pathname: "/", hash: "welcome" }}>
          <a
            className={`${
              asPath === "/#welcome" || asPath === "/" || asPath === "/#"
                ? "no-underline font-bold nav-item"
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
                ? "no-underline font-bold nav-item"
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
                ? "no-underline font-bold nav-item"
                : "no-underline nav-item"
            }`}
          >
            {t("navLinkAboutUs")}
          </a>
        </Link>
      </div>

      <div className="hidden sm:block">
        <ChangeLanguage />
      </div>
      <div className="p-2 ml-auto" onClick={() => setToggled((prev) => !prev)}>
        <Link href={{ pathname: "/", hash: "login" }}>
          <a className="btn-login">{t("navLinkLogin")}</a>
        </Link>
      </div>
    </div>
  );
}
