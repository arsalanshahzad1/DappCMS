import { useContext, useState, useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Home from '../assets/Svg/Home';
import Pending from '../assets/Svg/Pending'
import Product from '../assets/Svg/Product'
import User from '../assets/Svg/User'
import Financial from '../assets/Svg/Financial'
import Help from '../assets/Svg/Help'
import Announcement from '../assets/Svg/Announcement'
import Setting from '../assets/Svg/Setting'
import Timed from '../assets/Svg/Timed'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { MyContext } from '../Context/MyContext';
import { NavLink } from 'react-router-dom';
function Sidebar() {
    const { sideBarExpand } = useContext(MyContext)
    const [dropDown, setdropDown] = useState([false, false, false, false, false])
    useEffect(() => {
        if (!sideBarExpand) {
            setdropDown([false, false, false, false, false])
        }
    }, [sideBarExpand])

    return (
        <div className={`Sidebar ${!sideBarExpand && 'sidebarCollapsed'}`}>
            <div className='Sidebar-items-container'>
                <NavLink to='/' activeClassName="active-link">
                    <div className='Sidebar-items1'>
                        <Home />
                        {
                            sideBarExpand &&
                            <div>front page</div>
                        }
                    </div>
                </NavLink>
                <NavLink to='/pending'>
                    <div className='Sidebar-items'>
                        <Pending />
                        {
                            sideBarExpand &&

                            <div>Pending</div>
                        }
                    </div>
                </NavLink>
                <div className='Sidebar-items'>
                    <Product />
                    {
                        sideBarExpand &&

                        <div>Product Management</div>
                    }
                    {
                        sideBarExpand &&
                        <div className='dropdownIcon'>

                            {!dropDown[0] ?
                                <KeyboardArrowDownIcon onClick={() => setdropDown([true, false, false, false, false])} />
                                :
                                <KeyboardArrowUpIcon onClick={() => setdropDown([false, false, false, false, false])} />
                            }
                        </div>

                    }

                </div>
                {dropDown[0] &&
                    <div className='DropDownHolder'>
                        <NavLink to='/second-contract-product'>
                            <div className='DropDownItem'>
                                Second Contract products
                            </div>
                        </NavLink>
                        <NavLink to="/second-contract-order">

                            <div className='DropDownItem'>
                                Second contract order
                            </div>
                        </NavLink>
                        <NavLink to='/ai-quantitative-product'>
                            <div className='DropDownItem'>
                                AI quantitative products
                            </div>
                        </NavLink>
                        <NavLink to="/mining-machine-products">
                            <div className='DropDownItem'>
                                Mining machine products
                            </div>
                        </NavLink>
                        <NavLink to="/quantitative-order">
                            <div className='DropDownItem'>
                                Quantitative order
                            </div>
                        </NavLink>
                        <NavLink to="/mining-machine-order">
                            <div className='DropDownItem'>
                                Mining machine order
                            </div>
                        </NavLink>
                    </div>
                }
                <div className='Sidebar-items'>
                    <User />
                    {
                        sideBarExpand &&

                        <div>User Management</div>

                    }
                    {
                        sideBarExpand &&

                        <div className='dropdownIcon'>

                            {!dropDown[1] ?
                                <KeyboardArrowDownIcon onClick={() => setdropDown([false, true, false, false, false])} />
                                :
                                <KeyboardArrowUpIcon onClick={() => setdropDown([false, false, false, false, false])} />
                            }
                        </div>
                    }
                </div>
                {dropDown[1] &&
                    <div className='DropDownHolder'>
                        <NavLink to='/user-management'>

                            <div className='DropDownItem'>
                                User Management
                            </div>
                        </NavLink>
                        <NavLink to='/wallet-management'>
                        <div className='DropDownItem'>
                            Wallet Management
                        </div>
                        </NavLink>
                        <div className='DropDownItem'>
                            Query Address ETH
                        </div>
                        <div className='DropDownItem'>
                            Query Address TRX
                        </div>
                        <div className='DropDownItem'>
                            Agent Grouping
                        </div>
                        <div className='DropDownItem'>
                            Agent Management
                        </div>
                        <div className='DropDownItem'>
                            Proxy Data
                        </div>
                    </div>
                }
                <div className='Sidebar-items'>
                    <Financial />
                    {
                        sideBarExpand &&

                        <div>Financial Management</div>

                    }
                    {
                        sideBarExpand &&
                        <div className='dropdownIcon'>

                            {!dropDown[2] ?
                                <KeyboardArrowDownIcon onClick={() => setdropDown([false, false, true, false, false])} />
                                :
                                <KeyboardArrowUpIcon onClick={() => setdropDown([false, false, false, false, false])} />
                            }
                        </div>
                    }
                </div>
                {dropDown[2] &&
                    <div className='DropDownHolder'>
                        <div className='DropDownItem'>
                            Blockchain Order
                        </div>
                        <div className='DropDownItem'>
                            Top up order
                        </div>
                        <NavLink to="/withdrawal-management">
                            <div className='DropDownItem'>
                                Withdrawal management
                            </div>
                        </NavLink>
                        <div className='DropDownItem'>
                            Payment record
                        </div>
                        <div className='DropDownItem'>
                            Account change record
                        </div>
                        <div className='DropDownItem'>
                            Recharge configuration
                        </div>
                        <div className='DropDownItem'>
                            Proxy Data
                        </div>
                    </div>
                }
                <div className='Sidebar-items'>
                    <Help />
                    {
                        sideBarExpand &&

                        <div>Help Center</div>

                    }
                </div>
                <div className='Sidebar-items'>
                    <Announcement />
                    {
                        sideBarExpand &&
                        <div>Announcement Management</div>
                    }
                </div>
                <div className='Sidebar-items'>
                    <Setting />
                    {
                        sideBarExpand &&
                        <div>Parameter Setting</div>
                    }
                </div>
                <div className='Sidebar-items'>
                    <Timed />
                    {
                        sideBarExpand &&
                        <div>Timed Task</div>
                    }
                </div>
                <div className='Sidebar-items'>
                    <Setting />
                    {
                        sideBarExpand &&
                        <div>System Management</div>
                    }
                    {
                        sideBarExpand &&
                        <div className='dropdownIcon'>
                            {!dropDown[3] ?
                                <KeyboardArrowDownIcon onClick={() => setdropDown([false, false, false, true, false])} />
                                :
                                <KeyboardArrowUpIcon onClick={() => setdropDown([false, false, false, false, false])} />
                            }
                        </div>
                    }
                </div>
                {dropDown[3] &&
                    <div className='DropDownHolder'>
                        <div className='DropDownItem'>
                            User Management
                        </div>
                        <div className='DropDownItem'>
                            Role Management
                        </div>
                        <div className='DropDownItem'>
                            Menu management
                        </div>
                        <div className='DropDownItem'>
                            Department management
                        </div>
                        <div className='DropDownItem'>
                            Job management
                        </div>
                        <div className='DropDownItem'>
                            My department
                        </div>
                        <div className='DropDownItem'>
                            Address Book
                        </div>
                        <div className='DropDownItem'>
                            Data Dictionary
                        </div>
                        <div className='DropDownItem'>
                            Classification Dictionary
                        </div>
                        <div className='DropDownItem'>
                            System Notification
                        </div>
                        <div className='DropDownItem'>
                            Country Code
                        </div>
                        <div className='DropDownItem'>
                            Tenant Management
                        </div>
                    </div>
                }
                <div className='Sidebar-items'>
                    <Setting />
                    {
                        sideBarExpand &&

                        <div>Configuration Management</div>
                    }
                    {
                        sideBarExpand &&
                        <div className='dropdownIcon'>

                            {!dropDown[4] ?
                                <KeyboardArrowDownIcon onClick={() => setdropDown([false, false, false, false, true])} />
                                :
                                <KeyboardArrowUpIcon onClick={() => setdropDown([false, false, false, false, false])} />
                            }
                        </div>
                    }
                </div>
                {dropDown[4] &&
                    <div className='DropDownHolder'>
                        <div className='DropDownItem'>
                            Trade order
                        </div>
                        <div className='DropDownItem'>
                            Market
                        </div>
                        <div className='DropDownItem'>
                            Change log
                        </div>

                    </div>
                }
            </div>
        </div>
    )
}

export default Sidebar