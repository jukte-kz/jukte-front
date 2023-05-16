import type { NextPage } from 'next'
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { WelcomeView } from "../components/organisms/Welcome";

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    let token;
    token = localStorage.getItem('jukteAccessToken');
    if (token) {
      router.push('/main');
    } else {
      setLoading(false);
    }
  });

  return (
    <div className="bg-[#070809]">
      <div className="min-h-screen">
        {loading ? (
          <div className="w-full h-screen flex justify-center items-center">
            <CircularProgress />
          </div>
        ) : (
          <WelcomeView />
        )}
      </div>
    </div>
  )
}

export default Home;
