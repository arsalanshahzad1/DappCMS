import React from 'react'
import FrontPage from './FrontPage'
import SecondContractProduct from './SecondContractProduct'
import HeaderNavbar from './HeaderNavbar'
import { Routes, Route } from 'react-router-dom'
import Pending from './Pending'
import UserManagement from './UserManagement'
import SecondContractOrder from './SecondContractOrder'
import AIQuantitativeProduct from './AIQuantitativeProduct'
import MiningMachineProducts from './MiningMachineProducts'
import QuantitativeOrder from './QuantitativeOrder'
import MiningMachineOrder from './MiningMachineOrder'
import WithdrawalManagement from './WithdrawalManagement'
import WalletManagement from './WalletManagement'
function Main() {
    return (
        <div className='Main'>
            <HeaderNavbar />
            <div className='Dashboard-components-holder'>
                <Routes>
                    <Route path='/' element={<FrontPage />} />
                    <Route path='*' element={<FrontPage />} />
                    <Route path='/second-contract-product' element={<SecondContractProduct />} />
                    <Route path='/second-contract-order' element={<SecondContractOrder />} />
                    <Route path='/ai-quantitative-product' element={<AIQuantitativeProduct />} />
                    <Route path='/mining-machine-products' element={<MiningMachineProducts />} />
                    <Route path='/quantitative-order' element={<QuantitativeOrder />} />
                    <Route path='/mining-machine-order' element={<MiningMachineOrder />} />
                    <Route path='/withdrawal-management' element={<WithdrawalManagement />} />
                    <Route path='/pending' element={<Pending />} />
                    <Route path='/user-management' element={<UserManagement />} />
                    <Route path='/wallet-management' element={<WalletManagement/>} />

                </Routes>

            </div>
        </div>
    )
}

export default Main