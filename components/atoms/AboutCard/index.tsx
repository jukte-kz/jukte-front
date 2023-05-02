import React from 'react';
import { AboutCardProps } from "./type";
import Typography from "@mui/material/Typography";

export const AboutCard = ({number, title, description}: AboutCardProps) => {
  return (
    <div className="rounded-3xl bg-[#363636] hover:bg-[#00abc2] p-8 flex flex-col gap-y-4">
      <Typography variant="h4" className="font-medium text-4xl">
        {number}
      </Typography>
      <Typography variant="h5" className="font-medium text-3xl">
        {title}
      </Typography>
      <Typography variant="body1" className="font-medium text-xl">
        {description}
      </Typography>
    </div>
  )
}
