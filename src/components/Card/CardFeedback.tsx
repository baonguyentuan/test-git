import React from 'react'
import { Card, Avatar,Rate } from 'antd';
import { UserOutlined } from '@ant-design/icons';

type Props = {}
export default function CardFeedback({ }: Props) {
    return (
        <Card
            className='card__border__gradient pb-4'
            size="small"
            title={<div className='m-4 text-xl whitespace-normal flex items-center' style={{ height: 150, color:'#584dc4' }}>
                <p>
                    The materials were darn near perfect and made passing my exam feel like an absolute breeze!
                </p>
            </div>}
        >
            <div className='grid grid-cols-2 gap-2 w-4/5 m-auto text-lg'>
                <div className='flex items-center'>
                    <Avatar shape="square" size="large" icon={<UserOutlined />} />
                    <p className='ml-2 '>Japanese</p>
                </div>
                <Rate className='flex items-center' disabled defaultValue={4} />
            </div>
        </Card>
    )
}

