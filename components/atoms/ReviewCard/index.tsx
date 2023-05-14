import React from 'react';
import { ReviewCardProps } from "./type";
import Typography from "@mui/material/Typography";

export const ReviewCard = ({id, text, author, role}: ReviewCardProps) => {
  return (
    <div id={`reviewCard-${id}`} className="rounded-xl justify-between text-black bg-white p-4 max-w-full md:max-w-[224px] flex flex-col gap-y-4">
      <Typography className="text-base">
        {text}
      </Typography>
      <div className="text-[#00abc2]">
        <Typography className="font-semibold text-lg">
          {author}
        </Typography>
        <Typography className="font-light text-base">
          {role}
        </Typography>
      </div>
    </div>
  )
}
