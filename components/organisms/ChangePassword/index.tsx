import React, {useCallback, useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LoadingButton from "@mui/lab/LoadingButton";
import PasswordIcon from "@mui/icons-material/Password";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import WarningIcon from "@mui/icons-material/Warning";

export const ChangePasswordView = () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [iin, setIin] = useState<string>('');
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onChangeIin = useCallback((event: React.ChangeEvent< HTMLInputElement>) => {
    setIin(event.target.value);
  }, []);

  const onChangePassword = useCallback((event: React.ChangeEvent< HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const toChangePassword = async (iin: string, newPassword: string) => {
    setErrMessage('');
    setLoading(true);
    const response = await fetch(`https://api.jukte.kz/user/changePassword/${iin}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        newPassword: newPassword
      })
    });
    const result = await response.json();
    if (response.ok) {
      setLoading(false);
      setSuccessModal(true);
    } else if (result.message === 'User not found') {
      setErrMessage('Такого пользователя не существует');
      setLoading(false);
      setSuccessModal(false);
    } else {
      setLoading(false);
      setSuccessModal(false);
    }
  };

  useEffect(() => {
    if (iin && password.length === 6) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [iin, password]);

  return (
    <div className="w-full">
      <div>
        <div className="mb-6 flex items-center relative">
          <Fab variant='circular' size="small" className="bg-white dark:bg-[#232323] dark:shadow-none" href="/login">
            <ArrowBackIcon className="fill-[#0a0a0a] dark:fill-white" />
          </Fab>
          <div className="absolute w-full flex justify-center">
            <svg width="112" height="24" viewBox="0 0 176 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3074 44.812C11.3301 44.812 8.62344 44.3093 6.18744 43.304C3.7901 42.26 1.79877 40.7713 0.213436 38.838L6.47744 31.414C7.5601 32.806 8.68144 33.8693 9.84144 34.604C11.0014 35.3 12.2194 35.648 13.4954 35.648C16.8981 35.648 18.5994 33.676 18.5994 29.732V12.274H4.56344V3.4H29.9674V29.036C29.9674 34.3333 28.6334 38.2967 25.9654 40.926C23.2974 43.5167 19.4114 44.812 14.3074 44.812ZM50.6206 44.522C48.0686 44.522 45.7679 44.0193 43.7186 43.014C41.7079 42.0087 40.1226 40.4427 38.9626 38.316C37.8413 36.1507 37.2806 33.4247 37.2806 30.138V12.564H48.3006V28.34C48.3006 30.776 48.7453 32.516 49.6346 33.56C50.5626 34.604 51.8579 35.126 53.5206 35.126C54.6033 35.126 55.5893 34.8747 56.4786 34.372C57.3679 33.8693 58.0833 33.0767 58.6246 31.994C59.1659 30.8727 59.4366 29.442 59.4366 27.702V12.564H70.4566V44H59.9586V35.126L61.9886 37.62C60.9059 39.94 59.3399 41.68 57.2906 42.84C55.2413 43.9613 53.0179 44.522 50.6206 44.522ZM86.9188 38.2L87.2088 25.034L100.027 12.564H113.077L98.8668 27.238L93.2408 31.762L86.9188 38.2ZM77.7548 44V0.963997H88.7748V44H77.7548ZM100.839 44L91.2108 31.936L98.0548 23.468L114.179 44H100.839ZM131.753 44.522C127.731 44.522 124.599 43.536 122.357 41.564C120.114 39.5533 118.993 36.5373 118.993 32.516V5.546H130.013V32.4C130.013 33.5213 130.322 34.4107 130.941 35.068C131.559 35.6867 132.352 35.996 133.319 35.996C134.633 35.996 135.755 35.6673 136.683 35.01L139.409 42.724C138.481 43.3427 137.34 43.7873 135.987 44.058C134.633 44.3673 133.222 44.522 131.753 44.522ZM114.411 21.96V13.724H137.205V21.96H114.411ZM159.424 44.522C155.712 44.522 152.464 43.826 149.68 42.434C146.934 41.0033 144.788 39.07 143.242 36.634C141.734 34.1593 140.98 31.356 140.98 28.224C140.98 25.092 141.714 22.308 143.184 19.872C144.692 17.3973 146.76 15.4833 149.39 14.13C152.019 12.738 154.977 12.042 158.264 12.042C161.357 12.042 164.18 12.68 166.732 13.956C169.284 15.1933 171.314 17.03 172.822 19.466C174.33 21.902 175.084 24.86 175.084 28.34C175.084 28.7267 175.064 29.1713 175.026 29.674C174.987 30.1767 174.948 30.6407 174.91 31.066H150.028V25.266H169.052L164.876 26.89C164.914 25.4593 164.644 24.222 164.064 23.178C163.522 22.134 162.749 21.322 161.744 20.742C160.777 20.162 159.636 19.872 158.322 19.872C157.007 19.872 155.847 20.162 154.842 20.742C153.875 21.322 153.121 22.1533 152.58 23.236C152.038 24.28 151.768 25.5173 151.768 26.948V28.63C151.768 30.1767 152.077 31.5107 152.696 32.632C153.353 33.7533 154.281 34.6233 155.48 35.242C156.678 35.822 158.109 36.112 159.772 36.112C161.318 36.112 162.633 35.8993 163.716 35.474C164.837 35.01 165.939 34.314 167.022 33.386L172.822 39.418C171.314 41.0807 169.458 42.3567 167.254 43.246C165.05 44.0967 162.44 44.522 159.424 44.522Z" fill="#00ABC2"/>
            </svg>
          </div>
        </div>
        <Typography variant="h5" className="mb-4 text-black dark:text-white">
          Восстановление пароля
        </Typography>
        <Typography variant="body1" className="mb-8">
          Для того что бы восстановить пароль вам необходимо ввести ИИН
        </Typography>
        <TextField
          fullWidth
          label="Введите ИИН"
          value={iin}
          onChange={onChangeIin}
          helperText="Для нерезидентов Казахстана вводить номер документа"
          InputProps={{
            inputMode: 'decimal',
            startAdornment: (
              <InputAdornment position="start">
                <AssignmentIndIcon />
              </InputAdornment>
            ),
            type: 'tel'
          }}
          variant="outlined"
        />
        <TextField
          fullWidth
          className="mt-8"
          label="Придумайте 6-значный пин-код"
          type={showPassword ? 'tel' : 'password'}
          onChange={onChangePassword}
          value={password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          inputProps={{
            maxLength: 6
          }}
        />
        {errMessage && (
          <div className="flex items-center mt-4 gap-2">
            <WarningIcon className="fill-red-600" />
            <Typography variant="body1" className="text-red-600">
              { errMessage }
            </Typography>
          </div>
        )}
        <LoadingButton
          loading={loading}
          disabled={disabled}
          variant="contained"
          className={loading ?
            'w-full bg-[#00abc2] mt-8 text-white disabled:bg-[#e0e0e0] disabled:text-[#e0e0e0] dark:disabled:bg-[#232323] dark:disabled:text-[#232323]' :
            'w-full bg-[#00abc2] mt-8 text-white disabled:bg-[#e0e0e0] dark:disabled:bg-[#232323] dark:disabled:text-[#626262]'}
          onClick={() => {
            toChangePassword(iin, password);
          }}
        >
          Обновить пароль
        </LoadingButton>
      </div>
      <Dialog
        open={successModal}
        onClose={() => {
          setSuccessModal(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Typography variant="h6" className='text-center'>Пароль успешно обновлен</Typography>
          <div className="success-animation mt-4 mb-6">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
          <Button
            variant="outlined"
            className="mt-4 w-full text-[#00abc2] border-[#00abc2] disabled:border-[#e0e0e0] disabled:bg-[#e0e0e0] disabled:text-[#e0e0e0] dark:disabled:bg-[#232323] dark:disabled:text-[#232323]"
            fullWidth
            href="/login"
          >
            Войти в аккаунт
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
