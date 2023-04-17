import type { NextPage } from 'next'
import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme, PaletteMode } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CssBaseline from '@mui/material/CssBaseline';
import { WelcomeView } from "../components/organisms/Welcome";
import { motion } from "framer-motion"
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [theme , setTheme] = useState<PaletteMode>('light');
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(darkMode ? 'dark' : 'light');
    }
  }, [theme]);

  useEffect(() => {
    let token;
    token = localStorage.getItem('jukteAccessToken');
    if (token) {
      router.push('/main');
    } else {
      setLoading(false);
    }
  });

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  const darkTheme = createTheme({
    palette: {
      mode: `${theme}`,
    },
  });

  return (
    <div className="bg-white dark:bg-[#0a0a0a]">
      <ThemeProvider theme={darkTheme}>
        <div className="min-h-screen py-4">
          <CssBaseline />
          <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear' }}
            className=""
          >
            {loading ? (
              <div className="w-full h-screen flex justify-center items-center">
                <CircularProgress />
              </div>
              ) : (
              <WelcomeView />
            )}
          </motion.main>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Home;
