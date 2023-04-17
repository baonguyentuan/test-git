import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardCourse from '../Card/CardCourse'
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
type Props = {}

const HotCourse = (props: Props) => {

    return (
        <div className='size__component py-12'>
            <div>
                <h1 className='text__title'>Hot Training Courses</h1>
            </div>
            <div className='pt-8'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><CardCourse /> </SwiperSlide>
                    <SwiperSlide><CardCourse /> </SwiperSlide>
                    <SwiperSlide><CardCourse /> </SwiperSlide>
                    <SwiperSlide><CardCourse /> </SwiperSlide>
                    <SwiperSlide><CardCourse /> </SwiperSlide>
                    <SwiperSlide><CardCourse /> </SwiperSlide>
                </Swiper>
            </div>
            <div className='w-full flex justify-center'>
                <Button size='large' className='mt-4 btn__banner'>More courses</Button>
            </div>
        </div>
    )
}

export default HotCourse