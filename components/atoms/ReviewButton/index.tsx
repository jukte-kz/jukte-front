import styles from './index.module.scss';
import Dialog from "@mui/material/Dialog";
import {DialogTitle, TextareaAutosize} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import React, { useCallback, useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import BadgeIcon from "@mui/icons-material/Badge";
import TextField from "@mui/material/TextField";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css';
import Button from "@mui/material/Button";

export const ReviewButton = () => {
  const [role, setRole]= useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [review, setReview] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);
  const [successDialog, setSuccessDialog] = useState<boolean>(false);

  const toShow = useCallback(() => {
    setStartAnimation(!startAnimation);
    setTimeout(() => {setShow(!show)}, 1100);
  }, [startAnimation,show]);

  const toShowSuccessDialog = useCallback(() => {
    setSuccessDialog(true);
  }, []);

  const handleChangeRole = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole((event.target as HTMLInputElement).value);
  };
  const onChangeName = useCallback((event: React.ChangeEvent< HTMLInputElement>) => {
    setName(event.target.value);
  }, []);
  const onChangeReview = useCallback((event: React.ChangeEvent< HTMLInputElement>) => {
    setReview(event.target.value);
  }, []);

  return (
    <>
      <div className="w-full bg-[#1d1d1d] h-6 md:h-14 rounded-b-xl relative flex items-center">
        <div className={`${startAnimation ? styles.btnAnimation : styles.btnAnimationReverse} absolute`}>
          <IconButton onClick={toShow} className="bg-[#00abc2] md:p-4 lg:p-7 text-white">
            <ArrowForwardIcon className="w-[28px] h-[28px] md:w-[64px] md:h-[64px]" />
          </IconButton>
        </div>
      </div>
      <Dialog
        onClose={toShow}
        open={show}
        fullWidth={true}
        maxWidth="sm"
      >
        {successDialog ? (
          <div className="flex flex-col gap-4 p-4 md:p-8 bg-[#080808]">
            <div className="flex justify-between items-center">
              <DialogTitle className="p-0">Ваш отзыв принят спасибо!</DialogTitle>
            </div>
            <div className="flex flex-col gap-6">
              <div className="success-animation mt-4 mb-6">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                  <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
              </div>
              <Button variant="outlined" className="button__outlined border-white text-white hover:border-[#00abc2] text-lg px-6" onClick={toShow}>
                Закрыть
              </Button>
            </div>
          </div>
          ) : (
          <div className="flex flex-col gap-4 p-4 md:p-8 bg-[#080808]">
            <div className="flex justify-between items-center">
              <DialogTitle className="p-0">Оставьте свой отзыв</DialogTitle>
              <div onClick={toShow} className="flex items-center gap-x-2 cursor-pointer">
                <p>Закрыть</p>
                <IconButton
                  className="shadow-xl bg-neutral-200"
                >
                  <CloseIcon className="text-black" />
                </IconButton>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <FormControl className={styles.form}>
                <FormLabel id="demo-controlled-radio-buttons-group" className="focus:text-white">Выберите свою деятельность</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  className="flex flex-col"
                  value={role}
                  onChange={handleChangeRole}
                >
                  <FormControlLabel value="logistician" control={<Radio />} label="Отправитель" />
                  <FormControlLabel value="driver" control={<Radio />} label="Перевозчик" />
                </RadioGroup>
              </FormControl>
              <TextField
                fullWidth
                label="Введите ФИО"
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
              <PhoneInput
                specialLabel="Номер телефона"
                containerClass={`${styles.reactTelInput}`}
                inputClass={'w-100 border-[rgba(0,0,0,0.23)]'}
                country={'kz'}
                excludeCountries={['ru']}
                value={phone}
                onChange={phone => {
                  setPhone(phone);
                }}
              />
              <TextField
                onChange={onChangeReview}
                variant="outlined"
                label="Ваш отзыв"
                value={review}
                name="review"
                multiline
                rows={4}
              />
              <Button variant="outlined" className="button__outlined border-white text-white hover:border-[#00abc2] text-lg px-6" onClick={toShowSuccessDialog}>
                Отправить
              </Button>
            </div>
          </div>
        )}
      </Dialog>
    </>
  )
}
