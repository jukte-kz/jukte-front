import React from 'react';
import Typography from "@mui/material/Typography";
import { AboutCard } from "../../atoms/AboutCard";

export const WelcomeAbout = () => {
  const data = [
    {
      number: '01',
      title: 'Профессионализм и опыт',
      description: 'Мы имеем богатый опыт в области онлайн логистических перевозок, что позволяет нам обеспечивать высококачественные услуги и эффективно управлять доставками.'
    },
    {
      number: '02',
      title: 'Интегрированная платформа',
      description: 'Мы предлагаем удобную и интуитивно понятную онлайн-платформу, которая позволяет нашим клиентам легко заказывать перевозки, отслеживать грузы и получать актуальную информацию о состоянии доставок в режиме реального времени.'
    },
    {
      number: '03',
      title: 'Глобальное покрытие',
      description: 'Мы осуществляем логистические перевозки как внутри страны, так и за рубежом. Благодаря нашим партнерам и расширенной сети, мы обеспечиваем глобальное покрытие и способны доставить грузы в любую точку мира.'
    },
    {
      number: '04',
      title: 'Гибкие решения',
      description: 'Мы понимаем, что каждый клиент имеет уникальные потребности, поэтому мы предлагаем гибкие решения, которые максимально соответствуют требованиям каждого заказчика. '
    },
    {
      number: '05',
      title: 'Надежность и безопасность',
      description: 'Безопасность грузов и надежность доставки - наши главные приоритеты. Мы работаем только с надежными партнерами, имеющими проверенные репутации, и следим за тем, чтобы грузы доставлялись вовремя и в сохранности.'
    },
    {
      number: '06',
      title: 'Прозрачность и конкурентные цены',
      description: 'Мы ценим доверие наших клиентов, поэтому предлагаем полную прозрачность в отношении стоимости и процесса доставки. Наши цены конкурентоспособны на рынке, и мы стараемся предоставить нашим клиентам наилучшее соотношение цены и качества.'
    },
  ];

  return (
    <>
      <div className="p-4 lg:p-8 bg-[#292929] rounded-xl flex flex-col gap-y-4">
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
    </>
  )
}
