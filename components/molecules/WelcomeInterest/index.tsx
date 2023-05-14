import {useRouter} from "next/router";
import {NewsCard} from "../../atoms/NewsCard";
import EuroIcon from '@mui/icons-material/Euro';
import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import Pagination from '@mui/material/Pagination';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const WelcomeInterest = () => {
  const router = useRouter();
  const [usd, setUsd] = useState('');
  const [eur, setEur] = useState('');

  useEffect(() => {
    fetch('https://api.apilayer.com/exchangerates_data/convert?to=KZT&from=USD&amount=1', {
      method: 'GET',
      redirect: 'follow',
      headers: {
        apikey: 'z5mN5ejro8SB212Oj3Wb8Xb5c7HVUV1t'
      }
    }).then(response => response.json()).then((r) => {
      setUsd(r.result);
    });
    fetch('https://api.apilayer.com/exchangerates_data/convert?to=KZT&from=EUR&amount=1', {
      method: 'GET',
      redirect: 'follow',
      headers: {
        apikey: 'z5mN5ejro8SB212Oj3Wb8Xb5c7HVUV1t'
      }
    }).then(response => response.json()).then((r) => {
      setEur(r.result);
    });
  });

  const newsCardData = [
    {
      id: 1,
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      title: 'Российские и белорусские перевозчики вытесняют казахстанцев',
      text: `Российские и белорусские компании вытесняют казахстанцев из международных перевозок, заявил депутат Мажилиса Болатбек Нажиметдинулы.
             Парламентарий напомнил, что в 1995 году Казахстан ратифицировал международный договор о конвенции МДП (Carnet TIR), по которому казахстанские перевозчики возят грузы в 43 страны.
             «В прошлом году 1 июля 2022 года ваше министерство в противоречие этой конвенции отдало возможность возить грузы в Казахстан и из Казахстана напрямую российским, белорусским перевозчикам, в ущерб казахстанским. В 2023 году 6 марта вы этот приказ еще раз продлили и снова ограничили возможность перевозки казахстанскими международными перевозчиками грузов. Опять-таки отдав наши грузы российским перевозчикам», – заявил депутат во время заседания мажилиса, обращаясь к министру индустрии и инфраструктурного развития Марату Карабаеву.`
    },
    {
      id: 2,
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      title: 'Высокий логистический спрос: автомобильные грузоперевозки выросли в Казахстане',
      text: `По данным биржи, количество заявок на доставку грузов автомобильным транспортом из Казахстана в другие страны выросло примерно в три раза по сравнению с аналогичным периодом прошлого года. Увеличились также и средние ставки перевозчиков: цены поднялись на 66%.
             На бирже отметили, что вырос интерес и к продукции, которую производят непосредственно в Казахстане.
             "В периоды масштабных изменений многие компании уже не могут ограничиваться работой с прежними партнерами и вынуждены искать новых грузоперевозчиков, а в современных условиях это проще всего делать на бирже. Поэтому нужно понимать: трехкратный рост спроса не означает аналогичного роста реального объема перевозок — здесь динамика гораздо скромнее", — считает директор казахстанского представительства международной биржи грузоперевозок "ATI.SU" Рената Зобова.`
    }
  ]

  return (
    <div className="flex flex-col gap-y-4">
      <Typography className="text-[#00abc2] text-xl lg:text-2xl font-semibold">
        Интересное
      </Typography>
      <div className="flex flex-col lg:flex-row items-stretch gap-4">
        <div className="flex flex-col p-4 gap-y-8 bg-[#292929] rounded-xl">
          <Typography className="text-white text-2xl lg:text-4xl font-semibold">
            Новости по грузоперевозкам
          </Typography>
          <div className="flex flex-col md:flex-row items-start justify-center gap-4">
            {newsCardData.map((card) => {
              return (
                <NewsCard
                  id={card.id}
                  img={card.img}
                  title={card.title}
                  description={card.text}
                />
              )
            })}
          </div>
          {newsCardData.length > 2 && (
            <div className="flex justify-center">
              <Pagination count={10} color="primary" />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-y-5 w-full text-white">
          <div className="flex flex-col p-4 gap-y-4 bg-[#292929] rounded-xl w-full">
            <Typography className="text-2xl lg:text-3xl font-medium">Курсы валют</Typography>
            <div className="flex flex-col gap-y-1 lg:gap-y-4">
              <div className="p-4 bg-[#363636] rounded-xl flex justify-between items-center hover:bg-[#00abc2]">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white text-[#00abc2] flex items-center justify-center rounded-full">
                    <AttachMoneyIcon />
                  </div>
                  <div className="flex flex-col">
                    <Typography variant="caption" className="uppercase font-bold">USD</Typography>
                    {usd && (
                      <Typography variant="subtitle2" className="uppercase">{usd} ₸</Typography>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-4 bg-[#363636] rounded-xl flex justify-between items-center hover:bg-[#00abc2]">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white text-[#00abc2] flex items-center justify-center rounded-full">
                    <EuroIcon />
                  </div>
                  <div className="flex flex-col">
                    <Typography variant="caption" className="uppercase font-bold">EUR</Typography>
                    {eur && (
                      <Typography variant="subtitle2" className="uppercase">{eur} ₸</Typography>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 gap-y-4 bg-[#292929] rounded-xl w-full">
            <Typography className="text-2xl lg:text-3xl font-medium">Статьи грузоперевозок</Typography>
            <div className="flex flex-col gap-y-1">
              <div className="p-4 bg-[#363636] hover:bg-[#00abc2] flex items-center justify-between rounded-t-xl cursor-pointer">
                <Typography variant="body1">
                  Интересная статья
                </Typography>
                <ArrowForwardIosIcon />
              </div>
              <div className="p-4 bg-[#363636] hover:bg-[#00abc2] flex items-center justify-between cursor-pointer">
                <Typography variant="body1">
                  Интересная статья
                </Typography>
                <ArrowForwardIosIcon />
              </div>
              <div className="p-4 bg-[#363636] hover:bg-[#00abc2] flex items-center justify-between rounded-b-xl cursor-pointer">
                <Typography variant="body1">
                  Интересная статья
                </Typography>
                <ArrowForwardIosIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
