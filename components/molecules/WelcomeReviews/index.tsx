import React from 'react';
import Typography from "@mui/material/Typography";
import {ReviewCard} from "../../atoms/ReviewCard";
import Trucks from '../../../public/image/trucks.png';
import Boxes from '../../../public/image/boxes.png';
import Image from "next/image";
import {ReviewButton} from "../../atoms/ReviewButton";

export const WelcomeReviews = () => {
  const reviewsData = [
    {
      id: 1,
      author: "Random Name #1",
      role: "driver",
      text: "Probably the most random thing you have ever seen! Probably the most random thing you have ever seen!"
    },
    {
      id: 2,
      author: "Random Name #2",
      role: "logistician",
      text: "Probably the most random thing you have ever seen!"
    },
    {
      id: 3,
      author: "Random Name #3",
      role: "logistician",
      text: "Probably the most random thing you have ever seen!"
    }
  ];
  const aboutData = [
    {
      id: 1,
      text: 'Сделок',
      title: '153'
    },
    {
      id: 2,
      text: 'Опыта работы',
      title: '10 лет'
    },
    {
      id: 3,
      text: 'Довольных клиентов',
      title: '3500'
    }
  ]

  return (
    <div className="flex flex-col gapy-4 lg:gap-y-16 bg-[#292929] p-4 pb-8 md:pb-10 lg:p-8 lg:pb-16 rounded-xl text-white relative">
      <Typography className="text-[#00abc2] text-xl lg:text-2xl font-semibold">
         Отзывы
      </Typography>
      <div className="lg:absolute top-8 right-0 flex justify-end">
        <Image src={Trucks} alt="tricks-img" />
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-y-4 lg:gap-y-6">
          <div className="flex flex-col lg:gap-y-4">
            <Typography className="uppercase font-medium text-3xl lg:text-6xl lg:w-1/2">
              <span className="text-[#00abc2]">JUKTE</span> ОДИН ИЗ ЛУЧШИХ И ПЕРВЫХ В <span className="text-[#00abc2]">КАЗАХСТАНЕ</span>
            </Typography>
            <Typography className="text-body lg:text-xl lg:w-2/3">
              Мы являемся профессиональными поставщиками логистических услуг и готовы предложить нашим клиентам широкий
              спектр услуг по перевозке грузов в любую точку мира. Наша компания занимается логистикой уже много лет,
              и мы гордимся своими высокими стандартами обслуживания и качеством работы.
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row items-center md:items-stretch gap-y-1 md:gap-x-4">
            {aboutData.map((card) => {
              return (
                <div key={card.id} className="flex flex-col gap-y-2 items-center p-4 md:max-w-[242px] w-full rounded-xl bg-[#00abc2]">
                  <Typography className="text-4xl font-bold">
                    {card.title}
                  </Typography>
                  <Typography className="text-2xl text-center">
                    {card.text}
                  </Typography>
                </div>
              )
            })}
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between mt-6 lg:mt-1.5 gap-y-6">
          <div className="flex flex-col md:flex-row items-stretch md:justify-between lg:justify-start gap-y-2 gap-x-4 w-full">
            {reviewsData.map((review) => {
              return (
                <ReviewCard
                  id={review.id}
                  text={review.text}
                  role={review.role}
                  author={review.author}
                />
              )
            })}
          </div>
          <div className="rounded-xl bg-[#363636] relative w-full h-[200px] md:h-[375px] lg:max-w-[646px] flex flex-col justify-between">
            <div className="px-5 pt-5 z-0">
              <div className="absolute right-0 top-0 z-10 w-[60%] lg:w-auto">
                <Image src={Boxes} alt="boxes-img" />
              </div>
              <div className="z-20 absolute">
                <p className="text-xl md:text-5xl font-semibold mb-6">Оставьте свой <br/> <span className="text-[#00abc2]">отзыв</span></p>
                <p className="text-lg md:hidden font-semibold">
                  Ваш отзыв <br/> важен для нас
                </p>
                <p className="text-xl font-semibold hidden md:block ">
                   Ваш отзыв поможет нам понять, <br/> что мы делаем хорошо, <br/> а что можно улучшить.
                </p>
              </div>
            </div>
            <ReviewButton />
          </div>
        </div>
      </div>
    </div>
  )
}
