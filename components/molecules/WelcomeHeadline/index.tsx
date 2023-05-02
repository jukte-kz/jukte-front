import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export const WelcomeHeadline = () => {
  const router = useRouter();

  return(
    <>
      <div className="flex items-start justify-between">
        <Typography variant="h1" className="uppercase font-bold text-8xl">
          МЫ МОЖЕМ <span className="text-[#00abc2]">ДОСТАВИТЬ</span> В ЛЮБУЮ ТОЧКУ <span className="text-[#00abc2]">МИРА</span>.
        </Typography>
        <div className="rounded-3xl dark:bg-[#292929] p-4 flex flex-col gap-y-6 max-w-[384px]">
          <Typography>
            Самый быстрый и простой
            способ управлять
            международными перевозками
          </Typography>
          <Button
            variant="contained"
            className="button__contained"
            endIcon={
              <ArrowForwardIosIcon />
            }
            onClick={() => {
              router.push('/login')
            }}
          >
            Войти
          </Button>
        </div>
      </div>
    </>
  )
}
