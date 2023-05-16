import React from "react";
import type { NextPage } from 'next'
import { MainView } from "../components/organisms/Main";

const Main: NextPage = () => {

  return (
    <div className="bg-white dark:bg-[#0a0a0a]">
      <div className="min-h-screen py-4">
        <MainView />
      </div>
    </div>
  )
}

export default Main;
