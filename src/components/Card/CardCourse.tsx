import React from 'react'
import { Card, Rate } from 'antd';
type Props = {}

const CardCourse = (props: Props) => {
    return (
        <Card
            className='pb-4 '
            size="small"
            style={{ height: 350, backgroundImage: "url('https://pbs.twimg.com/media/FpByf6KaYAAVKKN?format=jpg&name=large')", backgroundRepeat: 'none', backgroundPosition: 'center 0', backgroundSize: 'cover', }}
            title={<div className='course__title m-4 text-white' style={{ height: 250 }}>
                <div className='course__name'>
                Windows Operating System
                </div>
                <div className='course__desc'>
                    Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non possimus a quasi. Inventore dicta veniam maiores iste corporis explicabo!
                </div>
            </div>}
        >
            <div className='grid grid-cols-3 gap-2 text-sm text-white'>
                <div className=''>
                    <p>Category:</p>
                    <p>Science</p>
                </div>
                <div className=''>
                    <p>Duration:</p>
                    <p>90min</p>
                </div>
                <div className=''>
                    Rating
                    <Rate className='flex items-center text-xs' disabled defaultValue={4} />
                </div>
            </div>
        </Card>
    )
}

export default CardCourse