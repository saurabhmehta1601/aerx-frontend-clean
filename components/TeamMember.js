import Image from "next/image";
import coder from "../public/images/true-agency-o4UhdLv5jbQ-unsplash.jpg";

export default function TeamMember() {
  return (
    <div className="flex flex-row h-[248px] bg-white">
      <div className="relative w-2/5">
        <Image src={coder} layout="fill" height={248} width={177} />
      </div>
      <div className="flex flex-col py-10 px-[30px] w-3/5">
        <h3 className="text-2xl font-bold leading-8 tracking-[0.1px] text-team-header">
          Dantsev Pavel
        </h3>
        <h6 className="text-team-content">Founder</h6>
        <p className="text-team-content">
          A classic social network is a technological platform.
        </p>
      </div>
    </div>
  );
}
