import React from 'react';
import Typography from "@mui/material/Typography";
import { AboutCard } from "../../atoms/AboutCard";

export const WelcomeAbout = () => {
  const data = [
    {
      number: '01',
      title: 'Быстрая перевозка',
      description: 'Доставим в кратчайшие сроки без переплат'
    },
    {
      number: '02',
      title: 'Быстрая перевозка',
      description: 'Доставим в кратчайшие сроки без переплат'
    },
    {
      number: '03',
      title: 'Быстрая перевозка',
      description: 'Доставим в кратчайшие сроки без переплат'
    },
    {
      number: '04',
      title: 'Быстрая перевозка',
      description: 'Доставим в кратчайшие сроки без переплат'
    },
    {
      number: '05',
      title: 'Быстрая перевозка',
      description: 'Доставим в кратчайшие сроки без переплат'
    },
    {
      number: '06',
      title: 'Быстрая перевозка',
      description: 'Доставим в кратчайшие сроки без переплат'
    },
  ];

  return (
    <>
      <div className="p-8 bg-[#292929] rounded-3xl flex flex-col gap-y-4">
        <Typography className="text-[#00abc2] text-2xl font-semibold">
          О нас
        </Typography>
        <Typography className="text-white text-6xl font-semibold">
          ПОЧЕМУ ВЫБИРАЮТ НАС
        </Typography>
        <div className="grid grid-cols-3 gap-4">
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
    </>
  )
}
