import React from "react";
import type { NextPage } from 'next'
import { LoginView } from "../components/organisms/Login";

const Login: NextPage = () => {
  return (
    <div className="bg-white">
      <div className="min-h-screen p-4">
        <LoginView />
      </div>
    </div>
  )
}

export default Login;
