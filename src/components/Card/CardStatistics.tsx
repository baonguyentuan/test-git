import React from 'react'
import { Card } from 'antd';
import CountUp from 'react-countup'
import '../../assets/css/card/card.css'
type Props = {}
const CardStatistics = (props: Props) => {
    return (
        <Card
            className='card__border__gradient pb-4'
            size="small"
            title={<div className='flex justify-center items-center' style={{ height: 100 }}>
                <div className='icon__box'>
                    <i className="fa-solid fa-book-open card__icon__title"></i>
                </div>
            </div>}
        >
            <div className='w-4/5 text-center m-auto'>
                <p className='pb-2 text-2xl font-bold'><CountUp end={2300} />+</p>
                <p className='pb-2 text-xl font-bold'>Exam answers & resources</p>
            </div>
        </Card>
    )
}
export default CardStatistics