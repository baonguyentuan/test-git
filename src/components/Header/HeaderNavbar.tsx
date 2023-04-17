import React from 'react'
import { Button } from 'antd';
import '../../assets/css/header/header.css'
type Props = {}

export default function HeaderNavbar({ }: Props) {
    return (
        <div>
            <div className=' flex items-center  size__component py-3 '>
                <Button type="link" size='large' className='btn__navbar btn__active'>Home</Button>
                <Button type="link" size='large' className='btn__navbar' >Training Course</Button>
                <Button type="link" size='large' className='btn__navbar'>Contact</Button>
                <Button type="link" size='large' className='btn__navbar'>Blog</Button>
            </div>
        </div>
    )
}