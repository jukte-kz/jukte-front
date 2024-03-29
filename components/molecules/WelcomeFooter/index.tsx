import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import Divider from "@mui/material/Divider";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";
import AOS from "aos";
import 'aos/dist/aos.css';

export const WelcomeFooter = () => {
  const router = useRouter();

  const linksData = [
    {
      id: 1,
      text: 'Наши преимущества',
      href: '#advantages'
    },
    {
      id: 3,
      text: 'Интересное',
      href: '#interesting'
    },
    {
      id: 4,
      text: 'О нас',
      href: '#about'
    },
    {
      id: 5,
      text: 'Отзывы',
      href: '#reviews'
    }
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="bg-[#292929] rounded-t-xl px-4 py-8 lg:px-16 lg:py-12 w-screen flex flex-col items-center">
      <div className="w-full container">
        <div data-aos="fade-down" className="flex flex-col md:flex-row items-stretch justify-between gap-4">
          <div>
            <p className="uppercase font-bold text-2xl md:text-5xl lg:text-7xl text-white">
              ПОЗВОЛЬТЕ НАМ <span className="text-[#00abc2]">ДОСТАВИТЬ</span> ВАШУ <span className="text-[#00abc2]">ПОСЫЛКУ</span> В ПУНКТ НАЗНАЧЕНИЯ.
            </p>
          </div>
          <div className="rounded-xl bg-[#1D1D1D] p-4 flex flex-col justify-between gap-y-8 lg:gap-y-6 max-w-[384px]">
            <Typography className="text-white text-lg md:text-xl ">
              Самый быстрый и простой
              способ управлять
              международными перевозками
            </Typography>
            <div className="flex flex-col gap-y-3">
              <Button
                variant="contained"
                className="rounded-full capitalize bg-[#00abc2] text-white hover:shadow-current hover:shadow py-3"
                endIcon={
                  <ArrowForwardIosIcon />
                }
                onClick={() => {
                  router.push('/login')
                }}
              >
                <Typography variant="button">
                  Войти
                </Typography>
              </Button>
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
        </div>
        <Divider className="w-full border-white my-8" />
        <div data-aos="fade-up" className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex flex-col gap-y-8">
            <div>
              <svg viewBox="0 0 176 45" className="h-[24px] md:h-[32px] lg:w-[112px] lg:h-[32px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3074 44.812C11.3301 44.812 8.62344 44.3093 6.18744 43.304C3.7901 42.26 1.79877 40.7713 0.213436 38.838L6.47744 31.414C7.5601 32.806 8.68144 33.8693 9.84144 34.604C11.0014 35.3 12.2194 35.648 13.4954 35.648C16.8981 35.648 18.5994 33.676 18.5994 29.732V12.274H4.56344V3.4H29.9674V29.036C29.9674 34.3333 28.6334 38.2967 25.9654 40.926C23.2974 43.5167 19.4114 44.812 14.3074 44.812ZM50.6206 44.522C48.0686 44.522 45.7679 44.0193 43.7186 43.014C41.7079 42.0087 40.1226 40.4427 38.9626 38.316C37.8413 36.1507 37.2806 33.4247 37.2806 30.138V12.564H48.3006V28.34C48.3006 30.776 48.7453 32.516 49.6346 33.56C50.5626 34.604 51.8579 35.126 53.5206 35.126C54.6033 35.126 55.5893 34.8747 56.4786 34.372C57.3679 33.8693 58.0833 33.0767 58.6246 31.994C59.1659 30.8727 59.4366 29.442 59.4366 27.702V12.564H70.4566V44H59.9586V35.126L61.9886 37.62C60.9059 39.94 59.3399 41.68 57.2906 42.84C55.2413 43.9613 53.0179 44.522 50.6206 44.522ZM86.9188 38.2L87.2088 25.034L100.027 12.564H113.077L98.8668 27.238L93.2408 31.762L86.9188 38.2ZM77.7548 44V0.963997H88.7748V44H77.7548ZM100.839 44L91.2108 31.936L98.0548 23.468L114.179 44H100.839ZM131.753 44.522C127.731 44.522 124.599 43.536 122.357 41.564C120.114 39.5533 118.993 36.5373 118.993 32.516V5.546H130.013V32.4C130.013 33.5213 130.322 34.4107 130.941 35.068C131.559 35.6867 132.352 35.996 133.319 35.996C134.633 35.996 135.755 35.6673 136.683 35.01L139.409 42.724C138.481 43.3427 137.34 43.7873 135.987 44.058C134.633 44.3673 133.222 44.522 131.753 44.522ZM114.411 21.96V13.724H137.205V21.96H114.411ZM159.424 44.522C155.712 44.522 152.464 43.826 149.68 42.434C146.934 41.0033 144.788 39.07 143.242 36.634C141.734 34.1593 140.98 31.356 140.98 28.224C140.98 25.092 141.714 22.308 143.184 19.872C144.692 17.3973 146.76 15.4833 149.39 14.13C152.019 12.738 154.977 12.042 158.264 12.042C161.357 12.042 164.18 12.68 166.732 13.956C169.284 15.1933 171.314 17.03 172.822 19.466C174.33 21.902 175.084 24.86 175.084 28.34C175.084 28.7267 175.064 29.1713 175.026 29.674C174.987 30.1767 174.948 30.6407 174.91 31.066H150.028V25.266H169.052L164.876 26.89C164.914 25.4593 164.644 24.222 164.064 23.178C163.522 22.134 162.749 21.322 161.744 20.742C160.777 20.162 159.636 19.872 158.322 19.872C157.007 19.872 155.847 20.162 154.842 20.742C153.875 21.322 153.121 22.1533 152.58 23.236C152.038 24.28 151.768 25.5173 151.768 26.948V28.63C151.768 30.1767 152.077 31.5107 152.696 32.632C153.353 33.7533 154.281 34.6233 155.48 35.242C156.678 35.822 158.109 36.112 159.772 36.112C161.318 36.112 162.633 35.8993 163.716 35.474C164.837 35.01 165.939 34.314 167.022 33.386L172.822 39.418C171.314 41.0807 169.458 42.3567 167.254 43.246C165.05 44.0967 162.44 44.522 159.424 44.522Z" fill="#00ABC2"/>
              </svg>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-white flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="flex flex-col gap-y-4 md:gap-y-6 items-start">
                  <div className="flex flex-col gap-y-1">
                    <p className="font-semibold text-base">Адрес:</p>
                    <p className="text-sm">г.Алматы, улица Сатпаева 29д</p>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p>Контакты:</p>
                    <a href="tel:+77770842824" className="underline text-sm hover:text-[#00abc2]">+7-777-084-28-24</a>
                    <a href="mailto:kanat.jukte@gmail.com" className="underline text-sm hover:text-[#00abc2]">kanat.jukte@gmail.com</a>
                  </div>
                </div>
                <div className="flex flex-col gap-y-4 md:gap-y-6 items-start">
                  <div className="flex flex-col gap-y-1">
                    <p className="font-semibold text-base">Адрес:</p>
                    {linksData.map((link) => {
                      return (
                        <Link key={link.id} href={link.href} className="no-underline hover:underline hover:text-[#00abc2] text-sm">
                          {link.text}
                        </Link>
                      )
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="font-semibold text-base">Мы в соц сетях:</p>
                  <div className="flex gap-x-2">
                    <a href="https://api.whatsapp.com/send?phone=77770842824" target="_blank" className="underline text-sm hover:text-[#00abc2]">
                      <WhatsAppIcon className="h-[24px] w-[24px]" />
                    </a>
                    <a href="https://t.me/jukte" target="_blank" className="underline text-sm hover:text-[#00abc2]">
                      <TelegramIcon className="h-[24px] w-[24px]" />
                    </a>
                    <a href="https://www.instagram.com/jukte.kz.k/" target="_blank" className="underline text-sm hover:text-[#00abc2]">
                      <InstagramIcon className="h-[24px] w-[24px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <iframe
            className="rounded-xl w-full mt-8 lg:mt-0 lg:w-1/3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.673356513865!2d76.9116044!3d43.237307699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883692e11891a33%3A0x7731f6531a13f17e!2z0YPQu9C40YbQsCDQodCw0YLQv9Cw0LXQstCwIDI5INC0LCDQkNC70LzQsNGC0YsgMDUwMDAw!5e0!3m2!1sru!2skz!4v1684275066856!5m2!1sru!2skz"
            width="600" height="250" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <Divider className="w-full border-white my-8" />
        <div className="flex flex-col md:flex-row gap-4 md:px-10 md:items-center md:justify-between text-white">
          <p className="text-sm">Jukte.kz™. 2023 All right reserved.</p>
          <div>
            <a href="/docs/law.pdf" className="underline font-bold text-sm" target="_blank">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
