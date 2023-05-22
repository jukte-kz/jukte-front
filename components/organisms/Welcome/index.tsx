import React from "react";
import { useRouter } from "next/router";
import { WelcomeNav } from "../../molecules/WelcomeNav";
import { WelcomeHeadline } from "../../molecules/WelcomeHeadline";
import { WelcomeAbout } from "../../molecules/WelcomeAbout";
import { WelcomeInterest } from "../../molecules/WelcomeInterest";
import { WelcomeReviews } from "../../molecules/WelcomeReviews";
import {WelcomeFooter} from "../../molecules/WelcomeFooter";

export const WelcomeView = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full px-4 lg:px-8 items-center flex flex-col gap-y-9 relative overflow-x-hidden">
        <div id="navbar">
          <WelcomeNav />
        </div>
        <div id="advantages">
          <WelcomeHeadline />
        </div>
        <div id="about">
          <WelcomeAbout />
        </div>
        <div id="interesting">
          <WelcomeInterest />
        </div>
        <div id="reviews">
          <WelcomeReviews />
        </div>
      </div>
      <div id="footer" className="mt-9">
        <WelcomeFooter />
      </div>
    </>
  )
};
