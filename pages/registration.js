import Header from "../components/atoms/Header/component";
import {Label, TextInput, Tabs} from "flowbite-react";
import InputMask from "react-input-mask";
import Image from "next/image";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import qs from "qs";

export default function Registration () {
    const phoneMask = '+7-(999)-999-99-99';
    const iinMask = '999999999999';
    const [phone, setPhone] = useState('');
    const [iin, setIin] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [showError, setShowError] = useState(false);
    const [errMessage, setErrMesage] = useState('');
    const [checkComplete, setCheckComplete] = useState(false);

    const onChangePhone = useCallback((event) => {
        setPhone(event.target.value);
        if(phone.length > 17) {
            console.log('asd')
        }
    }, [phone.length]);

    const onChangeIin = useCallback((event) => {
        setIin(event.target.value);
    }, [])

    const onChangeName = useCallback((event) => {
        setName(event.target.value);
    }, [])

    const onChangeSurname = useCallback((event) => {
        setSurname(event.target.value);
    }, [])

    const onChangePassword = useCallback((event) => {
        setPassword(event.target.value);
    }, []);

    const onChangeRole = (e) => {
        setRole(e.target.value)
    }

    const postRegister = () => {
        axios({
            method: 'post',
            url: 'https://api.jukte.kz/auth/register',
            data: qs.stringify({
                phone: phone.replace(/(-)|\+|\(|\)/g, ''),
                password: password,
                transportWeight: '20',
                transportType: 'самосвал',
                role: role,
                name: name,
                surname: surname,
                iin: iin
            }),
        }).then((res) => {
            console.log(res.data)
            setShowError(false)
        }).catch((err) => {
            if (err.response.data.message.includes('E11000')) {
                setShowError(true)
                setErrMesage('Такой пользователь уже зарегестрирован')
            }
        })
    }

    useEffect(() => {
        setCheckComplete(
            phone.length === 18 && name.length > 0 &&
            surname.length > 0 && iin.length === 12 && password.length > 0 && role.length > 0
        )
    })

    return (
        <div>
            <Header removeUrl='/' />
            <div className='registration-main'>
                <h1>Регистрация пользователя</h1>
                <p className='my-2'>
                    Введите данные для регистрации в <span>Jukte.kz</span>
                </p>
                <div className='flex gap-2 py-4 radio-button-container'>
                    <div className="w-1/2 flex items-center pl-4">
                        <input onChange={onChangeRole} id="bordered-radio-1" type="radio" value="logistician" name="bordered-radio"
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="bordered-radio-1"
                               className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Грузоотправитель</label>
                    </div>
                    <div className="w-1/2 flex items-center pl-4">
                        <input onChange={onChangeRole} id="bordered-radio-2" type="radio" value="driver" name="bordered-radio"
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="bordered-radio-2"
                               className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Грузоперевозчик</label>
                    </div>
                </div>
                <form className='flex flex-col registration-form'>
                    <div className='mb-auto'>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="phone"
                                    value="Введите номер телефона"
                                />
                            </div>
                            <InputMask value={phone} maskChar={null} onChange={onChangePhone} mask={phoneMask}>
                                {(inputProps) => (
                                    <TextInput
                                        {...inputProps}
                                        id="phone"
                                        type="phone"
                                        placeholder="+7-777-777-77-77"
                                        required={true}
                                        sizing="lg"
                                    />
                                )}
                            </InputMask>
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="iin"
                                    value="Введите свои ИИН"
                                />
                            </div>
                            <InputMask value={iin} maskChar={null} onChange={onChangeIin} mask={iinMask}>
                                {(inputProps) => (
                                    <TextInput
                                        {...inputProps}
                                        id="iin"
                                        placeholder="ИИН"
                                        required={true}
                                        sizing="lg"
                                    />
                                )}
                            </InputMask>
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="name"
                                    value="Введите свое имя"
                                />
                            </div>
                            <TextInput
                                id="name"
                                type="text"
                                placeholder="Имя"
                                required={true}
                                sizing="lg"
                                value={name}
                                onChange={onChangeName}
                            />
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="surname"
                                    value="Введите свою фамилию"
                                />
                            </div>
                            <TextInput
                                id="surname"
                                type="text"
                                placeholder="Фамилия"
                                required={true}
                                sizing="lg"
                                value={surname}
                                onChange={onChangeSurname}
                            />
                        </div>
                        <div className='input-container'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password"
                                    value="Придумайте пароль"
                                />
                            </div>
                            <TextInput
                                id="password"
                                type="password"
                                placeholder="Пароль"
                                required={true}
                                sizing="lg"
                                value={password}
                                onChange={onChangePassword}
                            />
                        </div>
                        {showError && (
                            <h2 className='flex items-center gap-2'>
                                <Image width={24} height={25} src='/assets/icon/attention.svg' alt='errorIcon' />
                                {errMessage}
                            </h2>
                        )}
                    </div>
                    <button type='button' disabled={!checkComplete} onClick={postRegister} className='flex items-center px-4'>
                        <p className="w-full">Зарегестрироваться</p>
                    </button>
                </form>
            </div>
        </div>
    )
}
