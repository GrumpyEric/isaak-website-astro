import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowDown, FaCalendarPlus } from "react-icons/fa6";
import { Button } from "@mui/material";

export const IndexPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.defaults({
      ease: "sine",
      duration: 0.5,
    });

    gsap.to(".titleimage", {
      opacity: -1,
      scrollTrigger: {
        trigger: ".textsection",
        scrub: true,
      },
    });

    gsap.to(".arrow", {
      opacity: -1,
      scrollTrigger: {
        trigger: ".textsection",
        scrub: true,
        end: "top center",
      },
    });

    gsap.fromTo(
      ".text1",
      {
        scrollTrigger: {
          trigger: ".text1",
          scrub: true,
          // markers: true,
        },
        x: "-50vb",
        opacity: -1,
      },
      {
        scrollTrigger: {
          trigger: ".text1",
          scrub: true,
          end: "top center",
          // markers: true,
        },
        x: 0,
        opacity: 1,
      },
    );

    gsap.fromTo(
      ".image2",
      {
        scrollTrigger: {
          trigger: ".image2",
          scrub: true,
          // markers: true,
        },
        x: "-50vb",
        opacity: -1,
      },
      {
        scrollTrigger: {
          trigger: ".image2",
          scrub: true,
          end: "top center",
          // markers: true,
        },
        x: 0,
        opacity: 1,
      },
    );

    gsap.fromTo(
      ".text2",
      {
        scrollTrigger: {
          trigger: ".text2",
          scrub: true,
          // markers: true,
        },
        x: "-50vb",
        opacity: -1,
      },
      {
        scrollTrigger: {
          trigger: ".text2",
          scrub: true,
          end: "top center",
          // markers: true,
        },
        x: 0,
        opacity: 1,
      },
    );
  });

  return (
    <main>
      <div className="desktop:h-[calc(100dvh-8vb)] mobile:h-[calc(100svh-7.5vb)] desktop:top-[8vb] mobile:top-[7.5vb] desktop:mb-[8vb] mobile:mb-[7.5vb] relative text-center titleimage">
        <p className="peer absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 font-osaka text-text text-[8vb] font-medium text-opacity-75 transition duration-300 ease-in-out hover:scale-125 hover:text-opacity-100 hover:text-accent hover:animate-pulse mb-6 z-10 cursor-pointer title">
          Isekku
        </p>

        <p className="absolute whitespace-nowrap bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 mobile:pt-[8vb] desktop:pt-[10vb] desktop-lg:pt-[10vb] text-text text-[3vb] font-medium invisible transition duration-300 ease-in-out peer-hover:visible title">
          Music and Lifestyle
        </p>

        <img
          alt="Isekku sitting on a tree"
          src="/images/isaak-wide-focused.webp"
          loading="lazy"
          className="w-full h-full transition opacity-90 duration-300 ease-in-out peer-hover:opacity-25 object-cover isekku"
        />
        <FaArrowDown
          className="absolute text-5xl text-text bottom-8 left-0 right-0 m-auto animate-bounce arrow hover:cursor-pointer"
          // onClick={() => console.log("clicked")}
          // onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
          onClick={() =>
            document
              .getElementById("textsection")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>

      <div
        id="textsection"
        className="container mx-auto px-8 py-16 textsection"
      >
        <div
          id="text1"
          className="flex flex-col flex-1 desktop:h-[25dvh] mobile:h-[50svh] mobile:gap-10 justify-center items-center text1"
        >
          <p className="desktop-lg:text-5xl desktop:text-3xl mobile:text-3xl text-center">
            Hi, I am Isaak, a.k.a. <b className="text-accent">Isekku</b>!
          </p>
          <p className="desktop-lg:text-5xl desktop:text-3xl mobile:text-3xl text-center">
            Welcome to my website, where you can take a look at my life and
            music.
          </p>
          <a
            // appointment button
            className="flex items-center gap-2 rounded-md p-2 text-[2vb] text-white bg-text desktop:hidden"
            href=""
          >
            <FaCalendarPlus />
            Schedule appointment now!
          </a>
        </div>

        <div className="flex flex-1 flex-row desktop:h-[75dvh] mobile:h-[50svh] image2">
          <img
            alt="Isekku sketch"
            src="/images/Isekku.webp"
            width={2048}
            height={2048}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col flex-1 desktop:h-[25dvh] mobile:h-[50svh] mobile:gap-10 justify-center items-center text2">
          <p className="desktop-lg:text-5xl desktop:text-3xl mobile:text-3xl text-center">
            I do music and social media.
          </p>
          <p className="desktop-lg:text-5xl desktop:text-3xl mobile:text-3xl text-center">
            My goal: becoming a full-time artist!
          </p>
        </div>
      </div>
    </main>
  );
};
