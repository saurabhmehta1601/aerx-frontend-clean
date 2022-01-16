import Nav from "../components/Nav";
import Link from "next/link";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div id="welcome">
      <Nav />
      <main className="sm:py-6">{children}</main>
      <Footer />
    </div>
  );
}
