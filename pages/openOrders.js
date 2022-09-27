import Header from "../components/atoms/Header/component";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {Pagination, Spinner} from "flowbite-react";
import OpenCard from "../components/molecules /OpenCard/component";

export default function MyOrders() {
    const [openOrders, setOpenOrders] = useState(Array);
    const [cancelArchive, setCancelArchive] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!cancelArchive) {
            axios({
                method: 'get',
                url: 'https://api.jukte.kz/orders/',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    token: Cookies.get('accessToken')
                }
            }).then((res) => {
                if (res.data.data.orders.length) {
                    setOpenOrders(res.data.data.orders);
                }
                setLoading(false)
                setCancelArchive(true)
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
                        <p className='p-2'>Количество: {openOrders.length}</p>
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
                        {openOrders.length > 0 ? (
                            <div className='flex flex-col gap-2 mt-4 bg-gray-400 p-4'>
                                {
                                    openOrders.slice(0,6).map((data, index) => {
                                        return (
                                            <OpenCard
                                                key={index}
                                                product={data.product}
                                                price={data.price}
                                                weight={data.weight}
                                                date={data.date}
                                                type={data.type}
                                                from={data.from}
                                                to={data.to}
                                                distance={data.distance}
                                                description={data.description}
                                                status={data.status}
                                                role={Cookies.get('role')}
                                                phone={data.ownerPhone}
                                            />
                                        )
                                    })
                                }
                            </div>
                        ) : (
                            <p className='mt-4'>На данный момент свободных заявок нет</p>
                        )}
                    </div>
                )}
            </div>
            {openOrders.length > 6 && (
                <div className='flex justify-center mb-6'>
                    <Pagination
                        currentPage={1}
                        onPageChange={onPageChange}
                        showIcons={true}
                        totalPages={Math.ceil(openOrders.length/4)}
                    />
                </div>
            )}
        </div>
    )
}
