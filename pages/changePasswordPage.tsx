import React from "react";
import type { NextPage } from 'next';
import {ChangePasswordView} from "../components/organisms/ChangePassword";

const ChangePasswordPage: NextPage = () => {
  return (
    <div className="bg-white dark:bg-[#0a0a0a]">
      <div className="min-h-screen p-4">
        <ChangePasswordView />
      </div>
    </div>
  )
}

export default ChangePasswordPage;
