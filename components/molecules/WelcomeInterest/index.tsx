import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Pagination from '@mui/material/Pagination';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EuroIcon from '@mui/icons-material/Euro';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const WelcomeInterest = () => {
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

  return (
    <div className="flex flex-col gap-y-4 p-8">
      <Typography className="text-[#00abc2] text-2xl font-semibold">
        Интересное
      </Typography>
      <div className="flex items-start gap-x-4">
        <div className="flex flex-col p-4 gap-y-8 bg-[#292929] rounded-3xl">
          <Typography variant="h4" className="font-medium text-4xl">
            Новости по грузоперевозкам
          </Typography>
          <div className="flex items-center gap-4">
            <Card sx={{ maxWidth: 442 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 442 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="flex justify-center">
            <Pagination count={10} color="primary" />
          </div>
        </div>
        <div className="flex flex-col gap-y-5 w-full">
          <div className="flex flex-col p-4 gap-y-4 bg-[#292929] rounded-3xl w-full">
            <Typography className="text-3xl font-medium">Курсы валют</Typography>
            <div className="p-4 bg-[#363636] rounded-xl flex justify-between items-center hover:bg-[#00abc2]">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white text-[#00abc2] flex items-center justify-center rounded-full">
                  <AttachMoneyIcon />
                </div>
                <div className="flex flex-col">
                  <Typography variant="caption" className="uppercase font-medium">USD</Typography>
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
                  <Typography variant="caption" className="uppercase font-medium">EUR</Typography>
                  {eur && (
                    <Typography variant="subtitle2" className="uppercase">{eur} ₸</Typography>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 gap-y-4 bg-[#292929] rounded-3xl w-full">
            <Typography className="text-3xl font-medium">Статьи грузоперевозок</Typography>
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
