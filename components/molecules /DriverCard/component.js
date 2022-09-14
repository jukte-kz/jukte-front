import moment from "moment";
import Link from "next/link";

export default function DriverCard({shipment, price, weight, date, type, from, to, distance, description, status, phone, role, id, onClick}) {
    return (
        <div className="rounded shadow-sm bg-white w-full myCard-container p-4">
            <div className='pb-2 mb-4 border-b-2 flex items-start justify-between'>
                <div>
                    <h1 className='font-bold'>Цена: {price} ₸</h1>
                </div>
                <div>
                    {status === 'open' && (
                        <span
                            className="bg-green-100 text-green-800 text-xs
                                   font-semibold mr-2 px-2.5 py-0.5 rounded
                                   dark:bg-green-200 dark:text-green-900"
                        >
                            {status}
                        </span>
                    )}
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center'>
                    <img className='mr-2' src="/assets/icon/weight.svg" alt=""/>
                    <p>{weight} тонн</p>
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
                    <img className='mr-2' src="/assets/icon/distance.svg" alt=""/>
                    <p className='font-bold'>{from} - {to}</p>
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
            </div>
            {role === 'driver' ? (
                <Link href={{
                    pathname: '/[slug]',
                    as: '/slug-1',
                    query: {
                        slug: id
                    }
                }}>
                    <div className='mt-4 w-full flex justify-center link-button rounded'>
                        Редактировать
                    </div>
                </Link>
            ): (
                <div onClick={onClick}>
                    <Link href={'tel:+'+phone}>
                        <div className='mt-4 w-full flex justify-center link-button rounded'>
                            Позвонить водителю
                        </div>
                    </Link>
                </div>
            )}
        </div>
    )
}
