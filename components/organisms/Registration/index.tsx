import React, {useCallback, useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Checkbox from '@mui/material/Checkbox';
import TextField from "@mui/material/TextField";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeIcon from '@mui/icons-material/Badge';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from "@mui/material/InputAdornment";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PasswordIcon from "@mui/icons-material/Password";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WarningIcon from '@mui/icons-material/Warning';
// @ts-ignore
import InputMask from 'react-input-mask';
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

export const RegistrationView = () => {
  const [phone, setPhone] = useState<string>('');
  const [iin, setIin] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [role, setRole] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [afterBiometriaView, setAfterBiometriaView] = useState<boolean>(false);
  const [supportModal, setSupportModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>('');
  const [randomOtp, setRandomOtp] = useState<string>('');
  const [showOtp, setShowOtp] = useState(false);
  const [otpCounter, setOtpCounter] = useState<number>(60);
  const [resentOtp, setResentOtp] = useState(false);
  const [errMessage, setErrMessage] = useState<string>('');
  const [errMessageOtp, setErrMessageOtp] = useState<string>('');
  const apiKey = 'kzaf5ccca10bc38a352dd68acafdf67b9f100ef92471a59672a249c347a6082317103d';

  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onChangePhone = useCallback((event: React.ChangeEvent< HTMLInputElement>) => {
    setPhone(event.target.value.replace(/(-)|\+|\(|\)|(_)/g, ''));
  }, []);

  const onChangeIin = useCallback((event: React.ChangeEvent< HTMLInputElement>) => {
    setIin(event.target.value);
  }, []);

  const onChangeName = useCallback((event: React.ChangeEvent< HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const onChangeSurname = useCallback((event: React.ChangeEvent< HTMLInputElement>) => {
    setSurname(event.target.value);
  }, []);

  const onChangePassword = useCallback((event: React.ChangeEvent< HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const handleChangeRole = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole((event.target as HTMLInputElement).value);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChangeOtp = useCallback((event: React.ChangeEvent< HTMLInputElement>) => {
    setOtp(event.target.value);
    if (event.target.value === randomOtp) {
      setShowOtp(false);
      toRegister();
    } if (event.target.value !== randomOtp && event.target.value.length === 6) {
      setErrMessageOtp('Вы ввели неверный код');
      setResentOtp(true);
    }
  }, [randomOtp, phone, password]);

  useEffect(() => {
    if (showOtp) {
      const timer = otpCounter > 0 && setInterval(() => setOtpCounter(otpCounter - 1), 1000) || otpCounter < 1 && setResentOtp(true);
      // @ts-ignore
      return () => clearInterval(timer);
    }
  });

  useEffect(() => {
    if (iin && password && role && phone) {
      setDisabled(false);

    } else {
      setDisabled(true);
    }
  }, [iin, password, role, phone]);

  const toCheckRegistration = async () => {
    setErrMessage('');
    setAfterBiometriaView(true);
    const response = await fetch(`https://api.jukte.kz/user/checkRegistration/${phone}`, {});
    const result = await response.json();

    if (response.ok) {
      setAfterBiometriaView(false);
      setErrMessage('Такой пользователь уже зарегистрирован.');
    } else if (result.message === 'User not found') {
      toSetOtp();
    }
  };

  const toSetOtp = async () => {
    setOtp('');
    setResentOtp(false);
    setErrMessageOtp('');
    setOtpCounter(60);
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    const smsData = {
      recipient: phone, // Номер телефона получателя
      text: `Для подтверждения регистрации введите код: ${randomNumber}.`, // Текст сообщения
    };

    const response = await fetch(
      `https://api.mobizon.kz/service/message/sendsmsmessage?apiKey=${apiKey}`,
      {
        method: "POST",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(smsData)
      }
    ).then((res) => {
      console.log(res);
      setAfterBiometriaView(true);
      setShowOtp(true);
      setRandomOtp(randomNumber.toString());
    }).catch((err) => {
      console.log(err);
    });
  };

  const toRegister = async () => {
    const response = await fetch('https://api.jukte.kz/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone: phone,
        password: password,
        transportWeight: 20,
        transportType: "Транспорт",
        role: role,
        name: name,
        surname: surname,
        id_card: 'pdf',
        iin: iin,
      })
    });
    const afterRegister = await response.json();
    if (response.ok) {
      setAfterBiometriaView(false);
      setSuccessModal(true);
    } else {
      if (afterRegister.message.split(' ')[0] === 'E11000') {
        setErrMessage('Такой пользователь уже зарегистрирован.');
      }
      setAfterBiometriaView(false);
    }
  };

  return (
    <div className="w-full px-4 flex flex-col gap-4">
      <div className="mb-2 flex items-center relative">
        <Fab variant='circular' size="small" className="bg-white" href="/">
          <ArrowBackIcon className="fill-[#0a0a0a]" />
        </Fab>
        <div className="absolute w-full flex justify-center">
          <svg width="112" height="24" viewBox="0 0 176 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.3074 44.812C11.3301 44.812 8.62344 44.3093 6.18744 43.304C3.7901 42.26 1.79877 40.7713 0.213436 38.838L6.47744 31.414C7.5601 32.806 8.68144 33.8693 9.84144 34.604C11.0014 35.3 12.2194 35.648 13.4954 35.648C16.8981 35.648 18.5994 33.676 18.5994 29.732V12.274H4.56344V3.4H29.9674V29.036C29.9674 34.3333 28.6334 38.2967 25.9654 40.926C23.2974 43.5167 19.4114 44.812 14.3074 44.812ZM50.6206 44.522C48.0686 44.522 45.7679 44.0193 43.7186 43.014C41.7079 42.0087 40.1226 40.4427 38.9626 38.316C37.8413 36.1507 37.2806 33.4247 37.2806 30.138V12.564H48.3006V28.34C48.3006 30.776 48.7453 32.516 49.6346 33.56C50.5626 34.604 51.8579 35.126 53.5206 35.126C54.6033 35.126 55.5893 34.8747 56.4786 34.372C57.3679 33.8693 58.0833 33.0767 58.6246 31.994C59.1659 30.8727 59.4366 29.442 59.4366 27.702V12.564H70.4566V44H59.9586V35.126L61.9886 37.62C60.9059 39.94 59.3399 41.68 57.2906 42.84C55.2413 43.9613 53.0179 44.522 50.6206 44.522ZM86.9188 38.2L87.2088 25.034L100.027 12.564H113.077L98.8668 27.238L93.2408 31.762L86.9188 38.2ZM77.7548 44V0.963997H88.7748V44H77.7548ZM100.839 44L91.2108 31.936L98.0548 23.468L114.179 44H100.839ZM131.753 44.522C127.731 44.522 124.599 43.536 122.357 41.564C120.114 39.5533 118.993 36.5373 118.993 32.516V5.546H130.013V32.4C130.013 33.5213 130.322 34.4107 130.941 35.068C131.559 35.6867 132.352 35.996 133.319 35.996C134.633 35.996 135.755 35.6673 136.683 35.01L139.409 42.724C138.481 43.3427 137.34 43.7873 135.987 44.058C134.633 44.3673 133.222 44.522 131.753 44.522ZM114.411 21.96V13.724H137.205V21.96H114.411ZM159.424 44.522C155.712 44.522 152.464 43.826 149.68 42.434C146.934 41.0033 144.788 39.07 143.242 36.634C141.734 34.1593 140.98 31.356 140.98 28.224C140.98 25.092 141.714 22.308 143.184 19.872C144.692 17.3973 146.76 15.4833 149.39 14.13C152.019 12.738 154.977 12.042 158.264 12.042C161.357 12.042 164.18 12.68 166.732 13.956C169.284 15.1933 171.314 17.03 172.822 19.466C174.33 21.902 175.084 24.86 175.084 28.34C175.084 28.7267 175.064 29.1713 175.026 29.674C174.987 30.1767 174.948 30.6407 174.91 31.066H150.028V25.266H169.052L164.876 26.89C164.914 25.4593 164.644 24.222 164.064 23.178C163.522 22.134 162.749 21.322 161.744 20.742C160.777 20.162 159.636 19.872 158.322 19.872C157.007 19.872 155.847 20.162 154.842 20.742C153.875 21.322 153.121 22.1533 152.58 23.236C152.038 24.28 151.768 25.5173 151.768 26.948V28.63C151.768 30.1767 152.077 31.5107 152.696 32.632C153.353 33.7533 154.281 34.6233 155.48 35.242C156.678 35.822 158.109 36.112 159.772 36.112C161.318 36.112 162.633 35.8993 163.716 35.474C164.837 35.01 165.939 34.314 167.022 33.386L172.822 39.418C171.314 41.0807 169.458 42.3567 167.254 43.246C165.05 44.0967 162.44 44.522 159.424 44.522Z" fill="#00ABC2"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col text-black">
        <Typography variant="h5">
          Регистрация
        </Typography>
        <Typography variant="subtitle1">
          Введите данные для регистрации в <span className="text-[#00abc2]">Jukte.kz</span>
        </Typography>
      </div>
      <div className="rounded text-white p-2 bg-[#00abc2] flex items-center gap-4">
        <WarningAmberIcon className="fill-white" />
        <Typography variant="body2">
          Просим вас вводить <span className="font-bold">корректные</span> и <span className="font-bold">официальные</span> данные
        </Typography>
      </div>
      <div className="rounded text-white p-2 flex flex-col gap-2 bg-[#00abc2]">
        <div className="flex items-center gap-2">
          <FormControlLabel control={
            <Checkbox
              className=""
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 32, color: '#fff' },
              }}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          } label="Я даю свое согласие на обработку личных данных" />
        </div>
        <div>
          <a href="/docs/law.pdf" className="underline font-bold" target="_blank">
            Политика конфиденциальности
          </a>
        </div>
      </div>
      <FormControl className="">
        <FormLabel id="demo-controlled-radio-buttons-group" className="focus:text-white">Выберите свою деятельность</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          className="flex flex-row justify-between text-black"
          value={role}
          onChange={handleChangeRole}
        >
          <FormControlLabel value="logistician" control={<Radio />} label="Отправитель" />
          <FormControlLabel value="driver" control={<Radio />} label="Перевозчик" />
        </RadioGroup>
      </FormControl>
      <div className="mt-4 flex flex-col gap-6">
        <PhoneInput
          specialLabel="Номер телефона"
          containerClass="[&>.special-label]:bg-white [&>.special-label]:text-[rgba(0,0,0,0.6)]"
          inputClass={`w-100 border-[rgba(0,0,0,0.23)] bg-transparent text-black focus:text-[#00abc2]`}
          dropdownClass={'text-black'}
          country={'kz'}
          excludeCountries={['ru']}
          value={phone}
          onChange={phone => {
            setPhone(phone);
          }}
        />
        <TextField
          fullWidth
          label="Введите Имя"
          value={name}
          name="name"
          onChange={onChangeName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BadgeIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Введите Фамилию"
          value={surname}
          name="surname"
          onChange={onChangeSurname}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BadgeIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Введите ИИН"
          value={iin}
          name="iin"
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
          label="Придумайте 6-значный пин-код"
          type={showPassword ? 'tel' : 'password'}
          onChange={onChangePassword}
          value={password}
          name="password"
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
      </div>
      {errMessage && (
        <Typography color="error" className="font-bold" variant="body1">
          <WarningIcon color="error" className="mr-2" />
          {errMessage}
        </Typography>
      )}
      <LoadingButton
        disabled={disabled}
        endIcon={<ArrowForwardIcon />}
        variant="contained"
        className="w-full bg-[#00abc2] text-white disabled:bg-[#e0e0e0]"
        onClick={() => {
          toCheckRegistration();
        }}
      >
        Пройти верификацию
      </LoadingButton>
      <Dialog
        open={afterBiometriaView}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {!showOtp ? (
            <CircularProgress />
            ) : (
              <>
                <div className="flex items-center mb-4" onClick={() => {
                  setAfterBiometriaView(false);
                }}>
                  <Fab variant='circular' size="small" className="bg-white">
                    <CloseIcon className="text-[#0a0a0a]" />
                  </Fab>
                  <Typography variant="button" className="ml-2">
                    Закрыть
                  </Typography>
                </div>
                <Typography variant="subtitle1" className="mb-4 font-semibold">
                  На номер <span className="text-[#00abc2]">{phone}</span> выслан 6-значный код, введите для завершение регистрации.
                </Typography>
                <TextField
                  fullWidth
                  value={otp}
                  name="otp"
                  onChange={handleChangeOtp}
                  InputProps={{
                    inputMode: 'numeric',
                  }}
                  variant="outlined"
                />
                {errMessageOtp && (
                  <Typography variant="subtitle2" className="font-semibold mt-4" color="error">
                    {errMessageOtp}
                  </Typography>
                )}
                {resentOtp ? (
                  <Button variant="outlined" className="w-full mt-6 border-[#00abc2] text-[#00abc2]" onClick={() => {
                    toSetOtp();
                  }}>
                    Отправить код заново
                  </Button>
                ) : (
                  <Typography variant="body2" className="text-center mt-6">
                    Введите код в течении: <span className="text-[#00abc2]">{otpCounter}</span>
                  </Typography>
                )}
              </>
          )}
        </DialogContent>
      </Dialog>
      <Dialog
        open={supportModal}
        onClose={() => {
          setSupportModal(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <SupportAgentIcon className="flex justify-center w-full mb-4 fill-[#00abc2]" fontSize="large" />
          <Typography variant="subtitle1" className="font-semibold mb-1">Технические работы</Typography>
          <Typography variant="subtitle2" className="font-semibold mb-4">
            К сожалению на данный момент проводятся технические работы.
            Для регистраций можете написать в техническую поддержку.
          </Typography>
          <Button
            variant="outlined"
            className="mt-4 w-full text-[#00abc2] border-[#00abc2] disabled:border-[#e0e0e0] disabled:bg-[#e0e0e0] disabled:text-[#e0e0e0]"
            fullWidth
            onClick={() => {
              router.push('https://telegram.me/jukte/');
            }}
          >
            Написать в тех.поддержку
          </Button>
        </DialogContent>
      </Dialog>
      <Dialog
        open={successModal}
        onClose={() => {
          setSuccessModal(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Typography variant="h6" className='text-center'>Регистрация успешно пройдена</Typography>
          <div className="success-animation mt-4 mb-6">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
          <Button
            variant="outlined"
            className="mt-4 w-full text-[#00abc2] border-[#00abc2] disabled:border-[#e0e0e0] disabled:bg-[#e0e0e0] disabled:text-[#e0e0e0]"
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
