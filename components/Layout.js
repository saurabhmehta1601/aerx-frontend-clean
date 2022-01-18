import Nav from "../components/Nav";
import Link from "next/link";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div id="welcome" className="px-4 sm:px-0 w-min sm:w-full">
      <Nav />
      <main className="sm:py-6">{children}</main>
      <Footer />
    </div>
  );
}
