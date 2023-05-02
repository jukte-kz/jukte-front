import React from "react";
import { useRouter } from "next/router";
import { WelcomeNav } from "../../molecules/WelcomeNav";
import { WelcomeHeadline } from "../../molecules/WelcomeHeadline";
import { WelcomeAbout } from "../../molecules/WelcomeAbout";
import { WelcomeInterest } from "../../molecules/WelcomeInterest";
import { WelcomeReviews } from "../../molecules/WelcomeReviews";

export const WelcomeView = () => {
  const router = useRouter();

  return (
    <div className="w-full px-8 flex flex-col gap-y-9">
      <WelcomeNav />
      <WelcomeHeadline />
      <WelcomeAbout />
      <WelcomeInterest />
      <WelcomeReviews />
    </div>
  )
};
