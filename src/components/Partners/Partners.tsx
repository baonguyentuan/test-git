import React from 'react'
import '../../assets/css/partner/partner.css'
import { Button } from 'antd'
type Props = {}

const Partners = (props: Props) => {
    return (
        <div className='size__component py-12'>
            <h1 className='text__title'>Partnering with world's leading universities and companies</h1>
        <div className='flex justify-around mt-8' >
            <Button type='link' className='box__partner'>
                <img className='logo__partner' src="https://www.exampro.co/assets/home/aws-logo.svg" alt="logo" />
                <p className='name__partner'>AWS</p>
            </Button>
            <Button type='link' className='box__partner' >
                <img className='logo__partner' src="https://www.exampro.co/assets/home/aws-logo.svg" alt="logo" />
                <p className='name__partner'>AWS</p>
            </Button>
            <Button type='link' className='box__partner'>
                <img className='logo__partner' src="https://www.exampro.co/assets/home/aws-logo.svg" alt="logo" />
                <p className='name__partner'>AWS</p>
            </Button>
            <Button type='link' className='box__partner'>
                <img className='logo__partner' src="https://www.exampro.co/assets/home/aws-logo.svg" alt="logo" />
                <p className='name__partner'>AWS</p>
            </Button>
            <Button type='link' className='box__partner'>
                <img className='logo__partner' src="https://www.exampro.co/assets/home/aws-logo.svg" alt="logo" />
                <p className='name__partner'>AWS</p>
            </Button>
            <Button type='link' className='box__partner'>
                <img className='logo__partner' src="https://www.exampro.co/assets/home/aws-logo.svg" alt="logo" />
                <p className='name__partner'>AWS</p>
            </Button>
            <Button type='link' className='box__partner'>
                <img className='logo__partner' src="https://www.exampro.co/assets/home/aws-logo.svg" alt="logo" />
                <p className='name__partner'>AWS</p>
            </Button>
            <Button type='link' className='box__partner'>
                <img className='logo__partner' src="https://www.exampro.co/assets/home/aws-logo.svg" alt="logo" />
                <p className='name__partner'>AWS</p>
            </Button>
        </div>

        </div>
    )
}

export default Partners