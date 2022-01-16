import Image from "next/image";
import keyboard from "../public/images/photo-1555421689-491a97ff2040.jpeg";
import pairProgrammers from "../public/images/photo-1638913665258-ddd2bceafb30.jpeg";
import exchangeValues from "../public/images/icon-park-outline_exchange-four.svg";
import monetizationBlogging from "../public/images/akar-icons_money.svg";
import servicesConstruct from "../public/images/uit_create-dashboard.svg";

export default function FeaturesSection() {
  return (
    <div className="" id="features">
      <div className="flex flex-row space-x-10 px-[100px] py-[150px]">
        <div className="flex flex-col space-y-2">
          <div className="rounded-full p-5 bg-brand-gray w-[100px] h-[100px] flex items-center content-center">
            <Image
              src={monetizationBlogging}
              height={100}
              width={100}
              className="rounded-3xl"
            />
          </div>
          <h2 className="text-2xl font-bold leading-9">
            Content monetization and Blogging
          </h2>
          <p className="font-normal leading-9 text-brand-text">
            Create, publish and monetize your content with Aerx
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="rounded-full p-5 bg-brand-gray w-[100px] h-[100px] flex items-center content-center">
            <Image
              src={exchangeValues}
              height={100}
              width={100}
              className="rounded-3xl"
            />
          </div>
          <h2 className="text-2xl font-bold leading-9">
            Communicate and exchange values
          </h2>
          <p className="font-normal leading-9 text-brand-text">
            Communicate and exchange values with Aerx
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="rounded-full p-5 bg-brand-gray w-[100px] h-[100px] flex items-center content-center">
            <Image
              src={servicesConstruct}
              height={100}
              width={100}
              className="rounded-3xl"
            />
          </div>
          <h2 className="text-2xl font-bold leading-9">
            Construct and create services
          </h2>
          <p className="font-normal leading-9 text-brand-text">
            Create and construct your services with Aerx
          </p>
        </div>
      </div>
      <div className="space-y-[156px]">
        <div className="flex flex-row">
          <div className="w-1/2">
            <Image src={keyboard} layout="responsive" />
          </div>
          <div className="px-[100px] space-y-[26px] w-1/2">
            <h2 className="text-4xl font-semibold leading-9">
              Content monetization Blogging with COMP Module
            </h2>
            <p className="font-normal leading-9 text-brand-text">
              In aerx, data on published content will be stored in the
              blockchain (smart contracts store text, images/videos and their
              sources in the blockchain), and the AI algorithm will find
              duplicate content, analyze it, determine the original source and
              link all other duplicate publications to it.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="w-1/2">
            <Image src={pairProgrammers} layout="responsive" />
          </div>
          <div className="px-[100px] space-y-[26px] w-1/2">
            <h2 className="text-4xl font-semibold leading-9">
              Communicate and exchange values with (VALUENGR)
            </h2>
            <p className="font-normal leading-9 text-brand-text">
              With VALUENGR, it will be possible to communicate, make
              payments,exchange and purchase/sale of digitized tangible assets,
              and without any intermediaries and without leaving the chat.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2">
            <Image src={keyboard} layout="responsive" />
          </div>
          <div className="px-[100px] space-y-[26px] w-1/2">
            <h2 className="text-4xl font-semibold leading-9">
              Construct and create services with SEC Module
            </h2>
            <p className="font-normal leading-9 text-brand-text">
              Due to the built-in payment system and the versatility of SEC,
              sellers will be able to open full-fledged online stores inside the
              platform, so they will not have to create additional sites with
              storefronts and connected acquiring and redirect buyers there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
