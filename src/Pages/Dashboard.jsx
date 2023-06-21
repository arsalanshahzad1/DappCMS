import { useState, useEffect } from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import Main from '../Components/Main'

function Dashboard() {
    return (
        <div>
            <Header />
            <div className='MainApp'>
                <Sidebar />
                <Main />
            </div>
        </div>
    )
}
export default Dashboard