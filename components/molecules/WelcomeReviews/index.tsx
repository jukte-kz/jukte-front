import React from 'react';
import Typography from "@mui/material/Typography";
import Carousel from 'react-material-ui-carousel'

export const WelcomeReviews = () => {
  const items = [
    {
      name: "Random Name #1",
      role: "driver",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      role: "logistician",
      description: "Hello World!"
    },
    {
      name: "Random Name #3",
      role: "logistician",
      description: "Hello World!"
    },
    {
      name: "Random Name #4",
      role: "logistician",
      description: "Hello World!"
    }
  ];

  return (
    <div className="flex flex-col gap-y-16 bg-[#292929] p-8 rounded-3xl">
      <Typography className="text-[#00abc2] text-2xl font-semibold">
         Отзывы
      </Typography>
      <div className="w-full">
        <div className="w-1/2 flex flex-col gap-y-4">
          <Typography className="uppercase font-medium text-6xl">
            <span className="text-[#00abc2]">JUKTE</span> ОДИН ИЗ ЛУЧШИХ И ПЕРВЫХ В <span className="text-[#00abc2]">КАЗАХСТАНЕ</span>
          </Typography>
          <Typography className="font-medium text-xl">
            Мы являемся профессиональными поставщиками логистических услуг и готовы предложить нашим клиентам широкий
            спектр услуг по перевозке грузов в любую точку мира. Наша компания занимается логистикой уже много лет,
            и мы гордимся своими высокими стандартами обслуживания и качеством работы.
          </Typography>
          <div className="flex items-start gap-x-4">
            <div className="flex flex-col gap-y-2 items-center p-4 max-w-[242px] w-full">
              <Typography className="text-4xl font-bold">
                153
              </Typography>
              <Typography className="text-2xl text-center">
                Сделок
              </Typography>
            </div>
            <div className="flex flex-col gap-y-2 items-center p-4 max-w-[242px] w-full">
              <Typography className="text-4xl font-bold">
                10 лет
              </Typography>
              <Typography className="text-2xl text-center">
                Опыта работы
              </Typography>
            </div>
            <div className="flex flex-col gap-y-2 items-center p-4 max-w-[242px] w-full">
              <Typography className="text-4xl font-bold">
                3000
              </Typography>
              <Typography className="text-2xl text-center">
                Довольных клиентов
              </Typography>
            </div>
          </div>
          <div>
            <Carousel>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
