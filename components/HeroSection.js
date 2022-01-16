import Image from "next/image";
import heroImage from "../public/images/undraw_developer_activity_re_39tg.svg";
import heroAnimation from "../public/images/animation_500_kycpvvj8 1.svg";
export default function HeroSection() {
  return (
    <section
      className="flex flex-col sm:flex-row sm:h-[850px] sm:-mt-[145px]"
      id="welcome"
    >
      <div className="flex flex-col w-full sm:w-1/2 sm:px-[100px] sm:pt-[200px] sm:space-y-9">
        <h1 className="font-semibold text-[64px] leading-[85px]">
          Welcome to <span className="text-brand">Aerx</span> modular social
          Network
        </h1>
        <p className="font-normal leading-9 text-brand-text">
          Made to equip their digital space by creating a more appropriate
          atmosphere for their page, community or blog. In other words, make
          her/him more authentic.
        </p>
        <button className="px-[73px] py-6 btn btn-brand w-fit font-medium leading-[27px]">
          Get Started
        </button>
      </div>
      <div className="sm:w-1/2 sm:h-full sm:p-20 sm:pt-36 bg-brand/10 rounded-bl-4xl">
        <Image src={heroImage} layout="responsive" height={400} width={400} />
      </div>
    </section>
  );
}
