"use client";

import { useEffect, useState } from "react";

import Button from "@/components/Button";
import { cn } from "@/lib/client";
import Image from "next/image";
import Bubble from "@/components/Bubble";

const initIcon = {
  renderIconIndex: 0,
  group1: [
    `/images/icons/icon_1.svg`,
    "/images/icons/icon_2.svg",
    "/images/icons/icon_3.svg",
    "/images/icons/icon_4.svg",
  ],
  group2: [
    `/images/icons/icon_5.svg`,
    "/images/icons/icon_6.svg",
    "/images/icons/icon_7.svg",
  ],
  group3: [
    "/images/icons/icon_8.svg",
    "/images/icons/icon_9.svg",
    "/images/icons/icon_10.svg",
  ],
  group4: [
    "/images/icons/icon_11.svg",
    "/images/icons/icon_12.svg",
    "/images/icons/icon_13.svg",
  ],
  group5: [
    "/images/icons/icon_14.svg",
    "/images/icons/icon_15.svg",
    "/images/icons/icon_16.svg",
  ],
};

type IconProps = {
  [key in `group${number}`]: string[];
} & {
  renderIconIndex: number;
};

export default function Home() {
  const [icon, setIcon] = useState<IconProps>(initIcon);

  useEffect(() => {
    const timer = setInterval(() => {
      setIcon((prev) => ({
        ...prev,
        renderIconIndex: (prev.renderIconIndex + 1) % prev.group1.length,
      }));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="flex flex-row items-center justify-between min-h-screen py-24">
      <section className="px-4 mx-auto md:container md:px-6">
        <div className="grid grid-cols-4 grid-rows-8 md:grid-cols-8">
          {/* TEXT CONTENT */}
          <div
            className={cn(
              "flex flex-col items-center justify-center space-y-10",
              "col-start-1 col-end-5 sm:col-end-8 row-[1] row-end-9"
            )}
          >
            <h1 className="text-2xl text-center text-white uppercase md:text-8xl">
              The most accurate and reliable api for blockchain data
            </h1>
            <p className="md:max-w-[50%] text-2xl font-light text-center text-white">
              Real-time, enriched blockchain data for 6 million+ tokens & 1
              billion NFTs on 57 networks
            </p>

            <div className="flex items-center justify-center space-x-4">
              {/* GET STARTED BUTTON */}
              <Button className="pr-8 text-black bg-lime-300 hover:bg-lime-400">
                <div className="flex flex-col items-center justify-center p-4 mr-4 bg-black rounded-md size-12">
                  {/* left */}
                  <div className="absolute transform -translate-x-[0.3rem] bg-lime-300 aspect-square size-[0.3rem]" />
                  {/* top */}
                  <div className="absolute transform -translate-y-[0.3rem] bg-lime-300 aspect-square size-[0.3rem]" />
                  {/* right */}
                  <div className="absolute transform translate-x-[0.3rem] bg-lime-300 aspect-square size-[0.3rem]" />
                  {/* bottom */}
                  <div className="absolute transform translate-y-[0.3rem] bg-lime-300 aspect-square size-[0.3rem]" />
                </div>
                Get started
              </Button>

              {/* SCROLL TO DISCOVER BUTTON */}
              <Button className="h-full px-8 bg-gray-800 hover:bg-gray-700">
                Scroll to discover
              </Button>
            </div>
          </div>

          <Image
            width={200}
            height={200}
            src="/images/icons/codex.png"
            alt="Codex icon"
            objectFit="cover"
            objectPosition="center"
            sizes="(min-width: 1024px) 315px, 197px"
            className="col-span-1 col-start-4 row-[1] row-end-8"
          />

          {/* BUBBLE */}
          {/* TOP LEFT ICON */}
          <Bubble
            className="w-24 h-24 col-[2] sm:col-[3] row-[1]"
            key="top-left-icon"
            content={
              <Image
                src={icon.group1[icon.renderIconIndex % icon.group1.length]}
                alt="Blockchain"
                width={48}
                height={48}
              />
            }
          />

          {/* TOP RIGHT ICON */}
          <Bubble
            className="w-24 h-24 col-[3] sm:col-[6] row-[2]"
            key="top-right-icon"
            content={
              <Image
                src={icon.group2[icon.renderIconIndex % icon.group2.length]}
                alt="Blockchain"
                width={48}
                height={48}
              />
            }
          />

          {/* CENTER LEFT ICON */}
          <Bubble
            className="w-24 h-24 col-[1] row-[4]"
            key="center-left-icon"
            content={
              <Image
                src={icon.group3[icon.renderIconIndex % icon.group3.length]}
                alt="Blockchain"
                width={48}
                height={48}
              />
            }
          />

          {/* CENTER RIGHT ICON */}
          <Bubble
            className="w-24 h-24 col-[4] sm:col-[7] row-[4]"
            key="center-right-icon"
            content={
              <Image
                src={icon.group4[icon.renderIconIndex % icon.group4.length]}
                alt="Blockchain"
                width={48}
                height={48}
              />
            }
          />

          {/* BOTTOM LEFT ICON */}
          <Bubble
            className="w-24 h-24 col-[2] row-[5]"
            key="bottom-left-icon"
            content={
              <Image
                src={icon.group5[icon.renderIconIndex % icon.group5.length]}
                alt="Blockchain"
                width={48}
                height={48}
              />
            }
          />
        </div>
      </section>
    </main>
  );
}
