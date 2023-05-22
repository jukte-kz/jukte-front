import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import React, { useEffect } from 'react';
import Typography from "@mui/material/Typography";
import { AboutCard } from "../../atoms/AboutCard";
import adTruck from "../../../public/image/adTruck.svg"

export const WelcomeAbout = () => {
  const data = [
    {
      number: '01',
      title: 'Профессионализм и опыт',
      description: 'Богатый опыт в онлайн логистических перевозках.',
    },
    {
      number: '02',
      title: 'Интегрированная платформа',
      description: 'Удобная и интуитивно понятная онлайн-платформа.',
    },
    {
      number: '03',
      title: 'Глобальное покрытие',
      description: 'Логистические перевозки как внутри страны, так и за рубежом.',
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="p-4 flex flex-col gap-y-4 container w-screen">
        <div className="relative flex flex-col-reverse lg:flex-row items-start">
          <div data-aos="fade-right" className="flex flex-col gap-y-4 w-full lg:w-1/2">
            <Typography className="text-[#00abc2] text-xl lg:text-2xl font-semibold">
              Наши преимущества
            </Typography>
            <Typography className="text-white text-2xl md:text-4xl lg:text-6xl font-semibold">
              ПОЧЕМУ ВЫБИРАЮТ НАС
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((item, index) => {
                return (
                  <AboutCard
                    key={index}
                    title={item.title}
                    number={item.number}
                    description={item.description}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[170px] relative md:h-[250px] lg:h-[400px] mb-8">
            <Image src={adTruck} alt="tricks-img" className="absolute -right-[25%] md:-right-0 lg:-right-[40%] bottom-0 md:max-h-[250px] lg:max-h-[400px]" data-aos="fade-left" />
          </div>
        </div>
      </div>
    </>
  )
}
