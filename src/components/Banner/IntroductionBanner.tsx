import React from 'react'
import { Button } from 'antd'
import { ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons'
import '../../assets/css/banner/banner.css'
type Props = {}

const IntroductionBanner = (props: Props) => {
    return (
        <div className='size__component h-full ' style={{ height: 600 }}>
            <div className='grid grid-cols-2 h-full '>
                <div className='h-full flex items-center'>
                    <div>
                        <h1 className='text-2xl font-bold pb-2' >90% of our customers
                            pass their exam in the first attempt</h1>
                        <ul className='text-lg pl-2 pb-2'>
                            <li className='pb-2'><CheckCircleOutlined className='icon__banner' />Improve skill & score </li>
                            <li className='pb-2'><CheckCircleOutlined className='icon__banner' />Get Latest exam questions</li>
                            <li className='pb-2'><CheckCircleOutlined className='icon__banner' />100% accurate answers</li>
                            <li className='pb-2'><CheckCircleOutlined className='icon__banner' />Instant access</li>
                        </ul>
                        <Button className='btn__banner' size='large'>Go to Exam <ArrowRightOutlined style={{ transform: 'translate(0,-3px)' }} /></Button>
                    </div>
                </div>
                <div className='h-full flex items-center'>
                    <img className='img__banner' src="https://www.exam-labs.com/static/img/cert/hero_banner_white.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default IntroductionBanner