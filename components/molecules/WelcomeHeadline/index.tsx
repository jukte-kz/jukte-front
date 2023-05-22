import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export const WelcomeHeadline = () => {
  const router = useRouter();

  return(
    <>
      <div className="flex flex-col md:flex-row items-stretch justify-between w-screen container px-4 gap-y-4 w-full md:px-0">
        <div>
          <p className="uppercase font-bold text-3xl md:text-4xl lg:text-7xl text-white">
            МЫ МОЖЕМ <span className="text-[#00abc2]">ДОСТАВИТЬ</span> В <br className="hidden md:block"/> ЛЮБУЮ ТОЧКУ <span className="text-[#00abc2]">МИРА</span>.
          </p>
        </div>
        <div className="rounded-xl bg-[#292929] p-4 flex flex-col justify-between gap-y-4 lg:gap-y-6 max-w-[384px]">
          <Typography className="text-white text-lg md:text-xl ">
            Самый быстрый и простой
            способ управлять
            международными перевозками
          </Typography>
          <Button
            variant="contained"
            className="rounded-full capitalize bg-[#00abc2] text-white hover:shadow-current hover:shadow py-3"
            endIcon={
              <ArrowForwardIosIcon />
            }
            onClick={() => {
              router.push('/registration')
            }}
          >
            <Typography variant="button">
              Регистрация
            </Typography>
          </Button>
        </div>
      </div>
    </>
  )
}
