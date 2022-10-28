import Header from "../components/atoms/Header/component";
import MyCard from "../components/molecules /MyCard/component";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {Pagination, Spinner} from "flowbite-react";
import DriverCard from "../components/molecules /DriverCard/component";

export default function MyOrders() {
    const [userSuccess, setUserSuccess] = useState(false);
    const [myOrders, setMyOrders] = useState(Array);
    const [cancelArchive, setCancelArchive] = useState(false);
    const [loading, setLoading] = useState(true);
    const [cancel, setCancel] = useState(false);
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        if(!cancelArchive) {
            axios({
                method: 'get',
                url: 'https://api.jukte.kz/orders/archive',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    token: Cookies.get('accessToken')
                }
            }).then((res) => {
                if (res.data.data.orders.length) {
                    setMyOrders(res.data.data.orders);
                }
                setLoading(false)
                setCancelArchive(true)
            })
        }
    })
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
                setCancel(true)
                setLoading(true)
                Cookies.set('role',res.data.role)
                if (JSON.stringify(res.data.company.director) === '{}') {
                    setUserSuccess(true)
                }
            }).catch((err) => {
                if (err) {
                    setCancel(true)
                }
                if (err.response.data.message === 'User has not access') {
                    Cookies.set('userSuccess', userSuccess)
                }
            })
        }
    })

    const onPageChange = useCallback(() => {
        const previous = () => {
            alert('Previous btn clicked. Make a call to your server to fetch data.');
        };
        const next = () => {
            alert('Next btn clicked. Make a call to your server to fetch data.');
        };
    }, [])

    return (
        <div className='myOrders-container'>
            <Header removeUrl='/home' text='На главную'></Header>
            <div className='p-4 pb-2'>
                <div className='flex w-full justify-between items-center'>
                    <h2>Мои заявки</h2>
                    <div className="inline-flex shrink-0 items-center justify-center rounded bg-blue-50">
                        <p className='p-2'>Количество: {myOrders.length}</p>
                    </div>
                </div>
                {loading ? (
                    <div className='w-full h-[calc(100vh-5rem)] flex items-center justify-center'>
                        <div className="text-center">
                            <Spinner aria-label="Center-aligned spinner example" />
                        </div>
                    </div>
                ):(
                    <div>
                        {myOrders.length > 0 ? (
                            userInfo.role === 'logistician' && (
                                <div className='flex flex-col gap-2 mt-4 bg-gray-400 p-4'>
                                    {
                                        myOrders.slice(0,6).map((data, index) => {
                                            return (
                                                <>
                                                    <MyCard
                                                        key={index}
                                                        shipment={data.loadType}
                                                        cub={data.cubProduct}
                                                        logPrice={data.logPrice}
                                                        product={data.product}
                                                        price={data.price}
                                                        weight={data.weight}
                                                        date={data.date}
                                                        type={data.type}
                                                        from={data.from}
                                                        to={data.to}
                                                        distance={data.distance}
                                                        detail={data.detail}
                                                        description={data.description}
                                                        status={data.status}
                                                        role={userInfo.role}
                                                        phone={data.ownerPhone}
                                                        id={data._id}
                                                    />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            ) ||
                            userInfo.role === 'driver' && (
                                <div className='flex flex-col gap-2 mt-4 bg-gray-400 p-4'>
                                    {
                                        myOrders.slice(0,6).map((data, index) => {
                                            return (
                                                <DriverCard
                                                    key={index}
                                                    shipment={data.loadType}
                                                    cub={data.cubProduct}
                                                    logPrice={data.logPrice}
                                                    product={data.product}
                                                    price={data.price}
                                                    weight={data.weight}
                                                    date={data.date}
                                                    type={data.type}
                                                    from={data.from}
                                                    to={data.to}
                                                    distance={data.distance}
                                                    detail={data.detail}
                                                    description={data.description}
                                                    status={data.status}
                                                    role={userInfo.role}
                                                    phone={data.ownerPhone}
                                                    id={data._id}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            )
                        ) : (
                            <p className='mt-4'>На данный момент у вас нету заявок</p>
                        )}
                    </div>
                )}
            </div>
            {myOrders.length > 6 && (
                <div className='flex justify-center mb-6'>
                    <Pagination
                        currentPage={1}
                        onPageChange={onPageChange}
                        showIcons={true}
                        totalPages={Math.ceil(myOrders.length/4)}
                    />
                </div>
            )}
        </div>
    )
}
