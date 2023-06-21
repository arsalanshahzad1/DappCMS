import React from 'react'
import FrontPage from './FrontPage'
import SecondContractProduct from './SecondContractProduct'
import HeaderNavbar from './HeaderNavbar'
import { Routes, Route } from 'react-router-dom'
import Pending from './Pending'
import UserManagement from './UserManagement'
function Main() {
    return (
        <div className='Main'>
            <HeaderNavbar />
            <div className='Dashboard-components-holder'>
                <Routes>
                    <Route path='/' element={<FrontPage />} />
                    <Route path='*' element={<FrontPage />} />
                    <Route path='/second-contract-product' element={<SecondContractProduct />} />
                    <Route path='/pending' element={<Pending />} />
                    <Route path='/user-management' element={<UserManagement />} />
                </Routes>



            </div>
        </div>
    )
}

export default Main