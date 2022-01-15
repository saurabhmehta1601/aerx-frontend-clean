import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/aerx_log.png";
import facebook from "../public/images/facebook.svg";
import twitter from "../public/images/twitter.svg";
import linkedIn from "../public/images/linkedIn.svg";
import footerLogo from "../public/images/aerx_logo-removebg-preview 1.svg";
import footerLogoImg from "../public/images/aerx_logo-removebg-preview 1.jpg";

export default function Footer() {
  return (
    <footer className="flex flex-row px-[100px] py-[100px] h-[450px] bg-white">
      <div className="flex flex-col items-start w-1/3 px-5">
        <div className="relative h-[82px] w-full mb-[27px]">
          <Image src={footerLogoImg} layout="fill" />
        </div>
        <div>
          <p className="text-lg font-normal leading-9 text-brand-text">
            Made to equip their digital space by creating a more appropriate
            atmosphere for their page, community or blog.
          </p>
        </div>
      </div>
      <div className="w-1/4 px-5">
        <h5 className="text-2xl font-semibold leading-9 text-black mb-[58px] pt-[15px]">
          Sitemap
        </h5>
        <ul className="text-lg font-normal leading-9 list-disc text-brand-text marker:text-brand-social">
          <li>
            <Link href="/#welcome">
              <a className="hover:text-brand">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#features">
              <a className="hover:text-brand">Features</a>
            </Link>
          </li>
          <li>
            <Link href="/#aboutUs">
              <a className="hover:text-brand">About</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-1/4 px-5">
        <h5 className="text-2xl font-semibold leading-9 text-black mb-[58px] pt-[15px]">
          Quick Links
        </h5>
        <ul className="text-lg font-normal leading-9 list-disc text-brand-text marker:text-brand-social">
          <li>
            <Link href="#">
              <a className="hover:text-brand">COMP Module</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="hover:text-brand">VALUENGR</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="hover:text-brand">SEC Module</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-1/4 px-5">
        <h5 className="text-2xl font-semibold leading-9 text-black mb-[58px] pt-[15px]">
          Get in Tuch
        </h5>
        <div className="flex flex-row space-x-4">
          <Link href="#">
            <a className="hover:bg-brand/10 hover:py-1 hover:px-1">
              <Image src={facebook} height={30} width={30} />
            </a>
          </Link>

          <Link href="#">
            <a className="hover:bg-brand/10 hover:py-1 hover:px-1">
              <Image src={twitter} height={30} width={30} />
            </a>
          </Link>
          <Link href="#">
            <a className="hover:bg-brand/10 hover:py-1 hover:px-1">
              <Image src={linkedIn} height={30} width={30} />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
