import React from 'react';
import { AboutCardProps } from "./type";
import styles from './index.module.scss';
import Typography from "@mui/material/Typography";

export const AboutCard = ({number, title, description}: AboutCardProps) => {
  return (
    <div className={`${styles.aboutCard} rounded-xl p-4 flex flex-col gap-y-2 lg:gap-y-4`}>
      <Typography className="font-bold text-2xl md:text-3xl text-white">
        {number}
      </Typography>
      <Typography className={`${styles.title} font-semibold text-lg md:text-xl`}>
        {title}
      </Typography>
      <Typography className="font-medium text-base text-white">
        {description}
      </Typography>
    </div>
  )
}
