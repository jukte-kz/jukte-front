import React from "react";
import type { NextPage } from 'next'
import { RegistrationView } from "../components/organisms/Registration";

const Registration: NextPage = () => {

  return (
    <div className="bg-white">
      <div className="min-h-screen py-4">
        <RegistrationView />
      </div>
    </div>
  )
}

export default Registration;
