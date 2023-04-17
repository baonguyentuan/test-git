import React from 'react'
import { Card } from 'antd';
import { AimOutlined } from '@ant-design/icons';
import '../../assets/css/card/card.css'
type Props = {}
const CardSkills = (props: Props) => {
    return (
        <Card
            className='card__border__gradient pb-4'
            size="small"
            title={<div className='m-4' style={{height:200,backgroundImage:"url('https://pbs.twimg.com/media/FpByf6KaYAAVKKN?format=jpg&name=large')",backgroundRepeat:'none',backgroundPosition:'center 0',backgroundSize:'cover'}}>
            </div>}
        >
            <p className='pb-2 text-xl font-bold'>Language</p>
            <div className='grid grid-cols-2 gap-2 text-base'>
                <p className='mb-2 py-1 font-semibold bg-blue-200 rounded-lg'><AimOutlined className=' text-lg ml-2' style={{ transform: 'translate(0,-3px)' }} /> Japanese</p>
                <p className='mb-2 py-1 font-semibold bg-blue-200 rounded-lg'><AimOutlined className='text-lg ml-2' style={{ transform: 'translate(0,-2px)' }} /> English</p>
                <p className='mb-2 py-1 font-semibold bg-blue-200 rounded-lg'><AimOutlined className='text-lg ml-2' style={{ transform: 'translate(0,-2px)' }} /> Chinese</p>
            </div>
        </Card>
    )
}
export default CardSkills