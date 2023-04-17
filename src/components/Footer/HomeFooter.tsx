import React from 'react'

type Props = {}

export default function HomeFooter({ }: Props) {
    return (
        <div className='bg-slate-200 py-4'>
            <div className=' flex justify-between  size__component'>
                <div>@ 2023 Our Examination</div>
                <ul>
                    <li>Upload File</li>
                    <li>Exam Provider</li>
                </ul>
                <ul>
                    <li>Contact</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>Facebook</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className=' flex justify-center  size__component'>
                <p>VISA</p>
                <p>mastercard</p>
                <p>JCB</p>
                <p>UnionPay</p>

            </div>
        </div>
    )
}