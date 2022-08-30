import Header from "../components/atoms/Header/component";
import {Label, Spinner, TextInput, Toast} from "flowbite-react";
import InputMask from "react-input-mask";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import qs from "qs";
import Cookies from "js-cookie";
import Image from "next/image";

export default function Settings () {
    const phoneMask = '+7-(999)-999-99-99';
    const ibanMask = 'KZ99999999999999';
    const binMask = '999999999999';
    const [phone, setPhone] = useState('');
    const [userInfo, setUserInfo] = useState();
    const [loading, setLoading] = useState(false);
    const [cancelReq, setCancelReq] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [iin, setIin] = useState('');

    const [companyName, setCompanyName] = useState('');
    const [bin, setBin] = useState('');
    const [iban, setIban] = useState('');

    const [directorName, setDirectorName] = useState('');
    const [directorSurname, setDirectorSurname] = useState('');
    const [directorPhone, setDirectorPhone] = useState('');

    const onChangePhone = useCallback((event) => {
        setPhone(event.target.value);
    }, []);
    const onChangeName = useCallback((event) => {
        setName(event.target.value);
    }, []);
    const onChangeSurname = useCallback((event) => {
        setSurname(event.target.value);
    }, []);
    const onChangeIin = useCallback((event) => {
        setIin(event.target.value);
    }, []);

    const onChangeCompanyName = useCallback((event) => {
        setCompanyName(event.target.value);
    }, []);
    const onChangeBin = useCallback((event) => {
        setBin(event.target.value);
    }, []);
    const onChangeIban = useCallback((event) => {
        setIban(event.target.value);
    }, []);

    const onChangeDirectorName = useCallback((event) => {
        setDirectorName(event.target.value);
    }, []);
    const onChangeDirectorSurname = useCallback((event) => {
        setDirectorSurname(event.target.value);
    }, []);
    const onChangeDirectorPhone = useCallback((event) => {
        setDirectorPhone(event.target.value);
    }, []);

    useEffect(() => {
        if (!cancelReq) {
            axios({
                method: 'get',
                url: 'https://api.jukte.kz/user/info',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    token: Cookies.get('accessToken')
                }
            }).then((res) => {
                setUserInfo(res.data);
                setCancelReq(true);
                setLoading(true);
                setName(res.data.name);
                setSurname(res.data.surname);
                setPhone(res.data.phone);
                setIin(res.data.iin);
            }).catch((err) => {
                if (err) {
                    setCancelReq(true);
                }
            })
        }
    })

    const sendUserData = () => {
        axios({
            method: 'put',
            url: 'https://api.jukte.kz/user/',
            data: qs.stringify({
                personal: {
                    name: name,
                    surname: surname,
                    iin: iin,
                    phone: phone.replace(/(-)|\+|\(|\)/g, ''),
                },
                company: {
                    account: iban,
                    bin: bin,
                    name: companyName,
                },
                director: {
                    name: directorName,
                    surname: directorSurname,
                    iin: '981103350587',
                    phone: directorPhone.replace(/(-)|\+|\(|\)/g, '')
                }
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                token: Cookies.get('accessToken')
            }
        }).then((res) => {
            if(res) {
                setShowToast(true);
            }
        })
    }

    return (
        <div>
            <Header removeUrl='/home' />
            <div className='settings-main py-6 px-4'>
                <h1>Настройки</h1>
                <div className="form-section mt-6 border-2 p-4">
                    <h4>Личные данные</h4>
                    {userInfo && (
                        <form className='flex flex-col mt-4 login-form'>
                            {loading ? (
                                <div className='mb-auto'>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="name"
                                                value="Введите ваше имя"
                                            />
                                        </div>
                                        <InputMask value={name} maskChar={null} onChange={onChangeName}>
                                            {(inputProps) => (
                                                <TextInput
                                                    {...inputProps}
                                                    id="name"
                                                    type="text"
                                                    placeholder={name}
                                                    required={true}
                                                    sizing="lg"
                                                />
                                            )}
                                        </InputMask>
                                    </div>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="surname"
                                                value="Введите ваше фамилию"
                                            />
                                        </div>
                                        <InputMask value={surname} maskChar={null} onChange={onChangeSurname}>
                                            {(inputProps) => (
                                                <TextInput
                                                    {...inputProps}
                                                    id="surname"
                                                    type="text"
                                                    placeholder={surname}
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
                                                value="Введите ваш ИИН"
                                            />
                                        </div>
                                        <InputMask value={iin} maskChar={null} onChange={onChangeIin}>
                                            {(inputProps) => (
                                                <TextInput
                                                    {...inputProps}
                                                    id="iin"
                                                    type="tel"
                                                    placeholder={iin}
                                                    required={true}
                                                    sizing="lg"
                                                />
                                            )}
                                        </InputMask>
                                    </div>
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
                                                    type="tel"
                                                    placeholder="+7-777-777-77-77"
                                                    required={true}
                                                    sizing="lg"
                                                />
                                            )}
                                        </InputMask>
                                    </div>
                                </div>
                            ) : (
                                <div className='w-full flex items-center justify-center'>
                                    <div className="text-center">
                                        <Spinner aria-label="Center-aligned spinner example" />
                                    </div>
                                </div>
                            )}
                        </form>
                    )}
                </div>
                <div className="form-section mt-6 border-2 p-4">
                    <h4>Данные компании</h4>
                    {userInfo && (
                        <form className='flex flex-col mt-4 login-form'>
                            {loading ? (
                                <div className='mb-auto'>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="companyName"
                                                value="Введите имя компании"
                                            />
                                        </div>
                                        <InputMask value={companyName} maskChar={null} onChange={onChangeCompanyName}>
                                            {(inputProps) => (
                                                <TextInput
                                                    {...inputProps}
                                                    id="companyName"
                                                    type="text"
                                                    placeholder={companyName}
                                                    required={true}
                                                    sizing="lg"
                                                />
                                            )}
                                        </InputMask>
                                    </div>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="bin"
                                                value="Введите BIN компании"
                                            />
                                        </div>
                                        <InputMask value={bin} maskChar={null} onChange={onChangeBin} mask={binMask}>
                                            {(inputProps) => (
                                                <TextInput
                                                    {...inputProps}
                                                    id="bin"
                                                    type="tel"
                                                    placeholder={bin}
                                                    required={true}
                                                    sizing="lg"
                                                />
                                            )}
                                        </InputMask>
                                    </div>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="iban"
                                                value="Введите номер счета (IBAN)"
                                            />
                                        </div>
                                        <InputMask value={iban} maskChar={null} onChange={onChangeIban} mask={ibanMask}>
                                            {(inputProps) => (
                                                <TextInput
                                                    {...inputProps}
                                                    id="iban"
                                                    type="tel"
                                                    placeholder={iban}
                                                    required={true}
                                                    sizing="lg"
                                                />
                                            )}
                                        </InputMask>
                                    </div>
                                </div>
                            ) : (
                                <div className='w-full flex items-center justify-center'>
                                    <div className="text-center">
                                        <Spinner aria-label="Center-aligned spinner example" />
                                    </div>
                                </div>
                            )}
                        </form>
                    )}
                </div>
                <div className="form-section mt-6 border-2 p-4">
                    <h4>Данные директора компании</h4>
                    {userInfo && (
                        <form className='flex flex-col mt-4 login-form'>
                            {loading ? (
                                <div className='mb-auto'>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="directorName"
                                                value="Введите имя директора"
                                            />
                                        </div>
                                        <InputMask value={directorName} maskChar={null} onChange={onChangeDirectorName}>
                                            {(inputProps) => (
                                                <TextInput
                                                    {...inputProps}
                                                    id="directorName"
                                                    type="text"
                                                    placeholder={directorName}
                                                    required={true}
                                                    sizing="lg"
                                                />
                                            )}
                                        </InputMask>
                                    </div>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="directorSurname"
                                                value="Введите фамилию директора"
                                            />
                                        </div>
                                        <InputMask value={directorSurname} maskChar={null} onChange={onChangeDirectorSurname}>
                                            {(inputProps) => (
                                                <TextInput
                                                    {...inputProps}
                                                    id="directorSurname"
                                                    type="text"
                                                    placeholder={directorSurname}
                                                    required={true}
                                                    sizing="lg"
                                                />
                                            )}
                                        </InputMask>
                                    </div>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="directorPhone"
                                                value="Введите номер телефон директора"
                                            />
                                        </div>
                                        <InputMask value={directorPhone} maskChar={null} onChange={onChangeDirectorPhone} mask={phoneMask}>
                                            {(inputProps) => (
                                                <TextInput
                                                    {...inputProps}
                                                    id="directorPhone"
                                                    type="tel"
                                                    placeholder="+7-777-777-77-77"
                                                    required={true}
                                                    sizing="lg"
                                                />
                                            )}
                                        </InputMask>
                                    </div>
                                </div>
                            ) : (
                                <div className='w-full flex items-center justify-center'>
                                    <div className="text-center">
                                        <Spinner aria-label="Center-aligned spinner example" />
                                    </div>
                                </div>
                            )}
                        </form>
                    )}
                </div>
                <button type='button' className='flex items-center settings-button px-4 mt-4' onClick={sendUserData}>
                    <p className="w-full">Сохранить</p>
                </button>
                {showToast && (
                    <div className='fixed top-16 drop-shadow-lg right-4'>
                        <Toast>
                            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                                <Image width={24} height={24} src='/assets/icon/check.svg'></Image>
                            </div>
                            <div className="ml-3 text-sm font-normal">
                                Данные успешно обновлены
                            </div>
                            <Toast.Toggle />
                        </Toast>
                    </div>
                )}
            </div>
        </div>
    )
}
