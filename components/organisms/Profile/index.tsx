import React, {useEffect, useState} from 'react';
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { UserInfoProps } from "../Main/types/UserInfo";

export const Profile = () => {
  const [userInfo, setUserInfo] = useState<UserInfoProps>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      let token;
      token = localStorage.getItem('jukteAccessToken');
      if (token) {
        const response = await fetch('https://api.jukte.kz/user/info', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            token: token.toString()
          },
        });
        if (response.ok) {
          setLoading(false);
        } else {
          setLoading(false);
        }
        return await response.json();
      }
    };

    getUser().then(r => {
      setUserInfo(r);
    });
  }, []);

  return (
    <div className="w-full px-4 mt-4 text-black">
      {loading ? (
        <div>
          <Skeleton animation="wave" variant="rounded" height={32} className="" />
          <Skeleton animation="wave" variant="rounded" height={308} className="mt-4" />
          <Skeleton animation="wave" variant="rounded" height={244} className="mt-4" />
        </div>
      ) : (userInfo && (
          <>
            <div className="flex items-center">
              <Typography variant="h6">
                Мой профиль
              </Typography>
            </div>
            <Paper className="mt-4 p-4">
              <Typography variant="subtitle1" className="font-bold">
                Личный данные
              </Typography>
              <ul className="flex flex-col gap-4 mt-2">
                <li>
                  <TextField
                    id="standard-basic"
                    fullWidth
                    variant="standard"
                    label="ИИН"
                    value={userInfo.iin}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </li>
                <li>
                  <TextField
                    id="standard-basic"
                    fullWidth
                    variant="standard"
                    label="Имя"
                    value={userInfo.name}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </li>
                <li>
                  <TextField
                    id="standard-basic"
                    fullWidth
                    variant="standard"
                    label="Фамилия"
                    value={userInfo.surname}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </li>
                <li>
                  <TextField
                    id="standard-basic"
                    fullWidth
                    variant="standard"
                    label="Номер телефона"
                    value={userInfo.phone}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </li>
              </ul>
            </Paper>
          </>
        )
      )}
    </div>
  )
}
