import React from 'react'
import { Button } from 'antd'
import { ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons'
import '../../assets/css/banner/banner.css'
type Props = {}

const PremiumBanner = (props: Props) => {
    return (
        <div className='size__component h-full ' style={{ height: 600 }}>
            <div className='grid grid-cols-2 h-full '>
                <div className='h-full flex items-center'>
                    <div>
                        <h1 className='text-2xl font-bold pb-2' >Get unlimited access to all premium exam</h1>
                        <p className='text-xl pb-2'>Take advantage of premium VCE Files which are guaranteed by Exam-Labs & Get Certified Easily!</p>
                        <ul className='text-lg pl-2  pb-2'>
                            <li className='pb-2'><CheckCircleOutlined className='icon__banner' />Unlimited Exam</li>
                            <li className='pb-2'><CheckCircleOutlined className='icon__banner' />Guaranteed to have Latest Exam Questions</li>
                            <li className='pb-2'><CheckCircleOutlined className='icon__banner' />Instant download</li>
                            <li className='pb-2'><CheckCircleOutlined className='icon__banner' />Ulimited create contest</li>
                        </ul>
                        <Button className='btn__banner' size='large'>Get Premium <ArrowRightOutlined style={{ transform: 'translate(0,-3px)' }} /></Button>
                    </div>
                </div>
                <div className='h-full flex items-center'>
                    <img className='img__banner' src="https://pbs.twimg.com/media/FpByf6KaYAAVKKN?format=jpg&name=large" alt="" />
                </div>
            </div>
        </div>
    )
}

export default PremiumBanner