import List from '@mui/material/List';
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Divider from '@mui/material/Divider';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import React, { useCallback, useState } from "react";
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

export const DrawerMenu = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);

  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

  const linksData = [
    {
      id: 1,
      text: 'Наши преимущества',
      href: '#advantages'
    },
    {
      id: 2,
      text: 'Интересное',
      href: '#interesting'
    },
    {
      id: 3,
      text: 'О нас',
      href: '#about'
    },
    {
      id: 4,
      text: 'Отзывы',
      href: '#reviews'
    }
  ];

  const toShow = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  return (
    <>
      <IconButton
        onClick={toShow}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        PaperProps={{
          classes: {
            root: "w-2/3 rounded-l-xl"
          }
        }}
        anchor="right"
        open={showModal}
        onClose={() => {setShowModal(false);}}
      >
        <div className="p-4 flex flex-col items-start gap-y-8">
          <div className="w-full flex items-center justify-between">
            <Typography variant="h6">
              Меню
            </Typography>
            <IconButton
              className="shadow-xl bg-neutral-200"
              onClick={toShow}
            >
              <CloseIcon className="text-black" />
            </IconButton>
          </div>
          <div className="w-full">
            <List sx={style} component="nav" aria-label="mailbox folders">
              {linksData.map((link) => {
                return (
                  <div key={link.id}>
                    <ListItemButton href={link.href}>
                      <ListItemText primary={link.text} />
                    </ListItemButton>
                    <Divider />
                  </div>
                )
              })}
            </List>
          </div>
          <div className="w-full flex flex-col items-center gap-y-4 md:hidden">
            <Button variant="outlined" className="button__outlined text-lg px-6 w-full" onClick={() => {
              router.push('/login');
            }}>
              Войти
            </Button>
            <Button variant="outlined" className="button__outlined text-lg px-6 w-full" onClick={() => {
              router.push('/registration');
            }}>
              Регистрация
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  )
}
