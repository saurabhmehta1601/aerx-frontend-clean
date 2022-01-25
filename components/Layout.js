import Nav from "../components/Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div id="welcome" className="w-full px-4 md:px-0">
      <Nav />
      <main className="md:py-6">{children}</main>
      <Footer />
    </div>
  );
}
