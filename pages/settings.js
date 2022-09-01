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
    const binMask = '999999999999';
    const [userInfo, setUserInfo] = useState();
    const [loading, setLoading] = useState(false);
    const [cancelReq, setCancelReq] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [showCarNumber, setShowCardNumber] = useState(false);

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [iin, setIin] = useState('');

    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [bin, setBin] = useState('');
    const [iban, setIban] = useState('');

    const [directorName, setDirectorName] = useState('');
    const [directorSurname, setDirectorSurname] = useState('');
    const [directorPhone, setDirectorPhone] = useState('');

    const [carNumber, setCarNumber] = useState('');

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

    const onChangeCompanyAddress = useCallback((event) => {
        setCompanyAddress(event.target.value);
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

    const onChangeCarNumber = useCallback((event) => {
        setCarNumber(event.target.value);
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
                setIin(res.data.iin);
                setPhone(res.data.phone);
                setCompanyName(res.data.company.name);
                setCompanyAddress(res.data.company.contacts.address);
                setBin(res.data.company.bin);
                setIban(res.data.company.account);
                setDirectorName(res.data.company.director.name);
                setDirectorSurname(res.data.company.director.surname);
                setDirectorPhone(res.data.company.director.phone);
                setCarNumber(Cookies.get('carNumber'));
                if (res.data.role === 'driver') {
                   setShowCardNumber(true)
                } else {
                    setShowCardNumber(false)
                }
            }).catch((err) => {
                if (err) {
                    setCancelReq(true);
                }
            })
        }
    })

    const sendUserData = () => {
        Cookies.set('carNumber', carNumber);
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
                    name: companyName,
                    account: iban.toUpperCase(),
                    bin: bin,
                    director: {
                        name: directorName,
                        surname: directorSurname,
                        iin: '981103350587',
                        phone: directorPhone.replace(/(-)|\+|\(|\)/g, '')
                    },
                    contacts: {
                        address: companyAddress,
                    }
                },
                transport: {
                    number: carNumber,
                },
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
            <Header removeUrl='/home' text='На главную' />
            <div className='settings-main py-6 px-4'>
                <h1>Настройки</h1>
                <hr className='mt-4' />
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
                                                value="Введите ИИН (для нерезидентов Казахстана номер документа)"
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
                                        <TextInput
                                            onChange={onChangeCompanyName}
                                            value={companyName}
                                            id="companyName"
                                            type="text"
                                            placeholder={companyName}
                                            required={true}
                                            sizing="lg"
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="companyAddress"
                                                value="Юридически  адрес компании"
                                            />
                                        </div>
                                        <TextInput
                                            onChange={onChangeCompanyAddress}
                                            value={companyAddress}
                                            id="companyAddress"
                                            type="text"
                                            placeholder={companyAddress ? (companyAddress) : ('Город, адрес')}
                                            required={true}
                                            sizing="lg"
                                        />
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
                                            <TextInput
                                                onChange={onChangeIban}
                                                value={iban}
                                                id="iban"
                                                type="text"
                                                placeholder={iban}
                                                required={true}
                                                sizing="lg"
                                            />
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
                                        <TextInput
                                            id="directorName"
                                            type="text"
                                            placeholder={directorName}
                                            onChange={onChangeDirectorName}
                                            value={directorName}
                                            required={true}
                                            sizing="lg"
                                        />
                                    </div>
                                    <div className='input-container'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="directorSurname"
                                                value="Введите фамилию директора"
                                            />
                                        </div>
                                        <TextInput
                                            id="directorSurname"
                                            type="text"
                                            placeholder={directorSurname}
                                            required={true}
                                            sizing="lg"
                                            value={directorSurname}
                                            onChange={onChangeDirectorSurname}
                                        />
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
                {showCarNumber && (
                    <div className="form-section mt-6 border-2 p-4">
                        <h4>Данные машины</h4>
                        {userInfo && (
                            <form className='flex flex-col mt-4 login-form'>
                                {loading ? (
                                    <div className='mb-auto'>
                                        <div className='input-container'>
                                            <div className="mb-2 block">
                                                <Label
                                                    htmlFor="carNumber"
                                                    value="Введите гос.номер машины"
                                                />
                                            </div>
                                            <TextInput
                                                id="carNumber"
                                                type="text"
                                                placeholder={carNumber ? (carNumber) : ('гос.номер')}
                                                onChange={onChangeCarNumber}
                                                value={carNumber}
                                                required={true}
                                                sizing="lg"
                                            />
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

                )}
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
