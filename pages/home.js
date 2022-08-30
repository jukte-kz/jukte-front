import Header from "../components/atoms/Header/component";
import {useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {Modal, Spinner} from "flowbite-react";
import {useRouter} from "next/router";
import Link from 'next/link'
import Image from "next/image";
import LinkBlock from "../components/atoms/LinkBlock/component";

export default function Home () {
    const [userSuccess, setUserSuccess] = useState(true);
    const [cancel, setCancel] = useState(false);
    const [loading, setLoading] = useState();
    const [userInfo, setUserInfo] = useState();
    const [userSuccessMessage, setUserSuccessMessage] = useState('');

    useEffect(() => {
        if (!userSuccess) {
            setUserSuccessMessage('верифицирован')
        } else {
            setUserSuccessMessage('не верифицирован')
        }
    })

    const router = useRouter();

    const goToSuccess = () => {
        router.push('/settings');
    }

    useEffect(() => {
        if (!cancel) {
            axios({
                method: 'get',
                url: 'https://api.jukte.kz/user/info',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    token: Cookies.get('accessToken')
                }
            }).then((res) => {
                setUserInfo(res.data)
                setUserSuccess(false)
                setCancel(true)
                setLoading(true)
            }).catch((err) => {
                if (err) {
                    setCancel(true)
                }
                if (err.response.data.message === 'User has not access') {
                    setUserSuccess(true)
                    Cookies.set('userSuccess', userSuccess)
                }
            })
        }
    })
    return (
        <div>
            <Header removeUrl='/login'></Header>
            {loading ? (
                <div className='p-4'>
                    <div className='w-full info-title-container'>
                        {userInfo && (
                            <h2>{userInfo.surname + ' ' + userInfo.name}</h2>
                        )}
                        {userSuccessMessage && (
                            <p>Статус: {userSuccessMessage}</p>
                        )}
                        <div className='elip1'/>
                        <div className='elip2'/>
                    </div>
                    <LinkBlock removeUrl='/myOrders' title='Мои заявки' image='/assets/icon/myOrders.svg' />
                    <LinkBlock removeUrl='/createOrders' title='Создать заявку' image='/assets/icon/createOrders.svg' />
                    <LinkBlock removeUrl='/settings' title='Настройки' image='/assets/icon/settings.svg' />
                    <LinkBlock removeUrl='/faq' title='Вопросы и ответы' image='/assets/icon/faq.svg' />
                </div>
            ) : (
                <div className='w-full h-[calc(100vh-5rem)] flex items-center justify-center'>
                    <div className="text-center">
                        <Spinner aria-label="Center-aligned spinner example" />
                    </div>
                </div>
            )}
            <div className='my-orders-container p-4'>
                <h2>Мои заявки</h2>

            </div>
            <Modal
                show={userSuccess}
            >
                <Modal.Body>
                    <div className="space-y-6">
                        <Header removeUrl='/login' />
                        <p className="text-base leading-relaxed">
                            Данный текст оповещает вас о том что, после регистраций вы не прошли верифкацию.
                            Для того что бы пользоваться нашим сервисом просим вас пройти верификацию.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='w-full redirect-button' onClick={goToSuccess}>
                        Пройти верификацию
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
