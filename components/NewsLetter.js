import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

export default function Subscribe({ className, ...rest }) {
  const { t, lang } = useTranslation("common");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");

  async function subscribe(e) {
    e.preventDefault();

    setState("LOADING");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: email }),
      });

      const { success, message } = await res.json();

      setState({ success, message });
      setEmail("");
      if (!success) {
        throw new Error(message);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  }

  return (
    <form
      className={`${className} flex flex-col items-center w-[750px]`}
      onSubmit={subscribe}
      {...rest}
    >
      <h2 className="my-0 text-4xl font-semibold leading-[65px] text-center">
        {t("subscribeTitle")}
      </h2>

      <div className="relative w-[445px] my-4">
        <input
          className={"w-full rounded-[5px] h-11 bg-white px-4 text-brand"}
          autoComplete="email"
          type="email"
          placeholder={t("subscribeInputPlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={
            "absolute flex items-center justify-center px-3 h-9 font-bold capitalize rounded-r-sm shadow-lg right-1 top-1 sm:w-28 hover:bg-brand/50 bg-brand"
          }
          type="submit"
          value={
            state === "LOADING"
              ? t("subscribeInputSubmitLoading")
              : t("subscribeInputSubmitText")
          }
        />
      </div>

      <p className={""}>{state?.success ? t("subscribeSuccessMessage") : ""}</p>

      <p className={"text-red-500"}>
        {state?.success === false ? t("subscribeErrorMessage") : ""}
      </p>
    </form>
  );
}
