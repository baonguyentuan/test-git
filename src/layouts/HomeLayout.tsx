import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderTitle from '../components/Header/HeaderTitle';
import HeaderNavbar from '../components/Header/HeaderNavbar';
import FooterIntro from '../components/Footer/FooterIntro';
import FooterCopyright from '../components/Footer/FooterCopyright';
type Props = {}

export default function HomeLayout({ }: Props) {
    return (

        <div>
            <header className='bg-white'>
                <HeaderTitle />
                <HeaderNavbar />
            </header>
            <Outlet />
            <footer>
                <FooterIntro/>
                <FooterCopyright/>
                </footer>
        </div>

    )
}