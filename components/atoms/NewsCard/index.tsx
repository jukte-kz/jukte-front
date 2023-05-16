import React, {useCallback, useState} from 'react';
import { NewsCardProps } from "./type";
import styles from './index.module.scss';
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import {DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import BadgeIcon from "@mui/icons-material/Badge";
import PhoneInput from "react-phone-input-2";
import Dialog from "@mui/material/Dialog";

export const NewsCard = ({id, img, title, description}: NewsCardProps) => {
  const [show, setShow] = useState<boolean>(false);

  const toShow = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <>
      <Card
        id={`newsCard-${id}`}
        classes={{
          root: 'max-w-[350px] lg:max-w-[442px]'
        }}
      >
        <CardActionArea onClick={toShow}>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography component="div" className="text-white mb-4 text-lg font-semibold">
              {title}
            </Typography>
            <Typography className="text-white text-base">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        onClose={toShow}
        open={show}
        fullWidth={true}
        maxWidth="md"
      >
        <div className="flex flex-col gap-4 p-4 md:p-8 bg-[#080808]">
          <div className="flex justify-between items-start">
            <Typography component="div" className="text-white mb-4 text-lg font-semibold">
              {title}
            </Typography>
            <div onClick={toShow} className="flex items-center gap-x-2 cursor-pointer">
              <IconButton
                className="shadow-xl bg-neutral-200"
              >
                <CloseIcon className="text-black" />
              </IconButton>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <CardMedia
              component="img"
              height="140"
              image={img}
              alt="green iguana"
            />
            <Typography className="text-white text-base">
              {description}
            </Typography>
          </div>
        </div>
      </Dialog>
    </>
  )
}
