import moment from "moment";
import Link from "next/link";
import {useState} from "react";

export default function OpenCard({
                                     shipment, product, cub, price, logPrice, weight, date, type, from, to, distance,
                                     description, status, phone, role, id, onClick, detail
}) {
    const [show, setShow] = useState(false);
    return (
        <div className="rounded shadow-sm bg-white w-full myCard-container p-4">
            <div className='pb-2 mb-4 border-b-2 flex items-start justify-between'>
                <div>
                    <h2 className='mb-2'>{product}</h2>
                    <h1 className='font-bold'>Цена: {price} ₸</h1>
                    <h1 className='font-bold'>Услуги логиста: {logPrice} ₸</h1>
                </div>
            </div>
            {show && (
                <div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/distance.svg" alt=""/>
                            <p>{from} - {to}</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/weight.svg" alt=""/>
                            <p>{weight} тонн {cub && ( '/ ' + cub)}</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/date.svg" alt=""/>
                            <p>{moment(date).format('L')}</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/truck.svg" alt=""/>
                            <p>{type}</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/Measure.svg" alt=""/>
                            <p>{distance} км</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/time.svg" alt=""/>
                            <p>{description}</p>
                        </div>
                        <div className='flex items-center'>
                            <img className='mr-2' src="/assets/icon/carShipment.svg" alt=""/>
                            <p>{shipment}</p>
                        </div>
                        <div className='items-center'>
                            <p className="font-bold">Детали перевозки:</p>
                            <p>{detail}</p>
                        </div>
                    </div>
                    <div className='mt-4 w-full flex justify-center link-button rounded' onClick={onClick}>
                        <Link href={'tel:+'+phone}>Позвонить заказчику</Link>
                    </div>
                </div>
            )}
            <button onClick={() => {
                setShow(!show)
            }} className='mt-2 w-full bg-blue-400 text-white rounded p-1'>
                {!show ? (
                    "Подробнее"
                ): (
                    "Закрыть"
                )}
            </button>
        </div>
    )
}
