import { useState, useEffect } from 'react'
import logo from '../assets/Images/logo.png'
import Close from '../assets/Svg/Close'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useContext } from 'react';
import { MyContext } from '../Context/MyContext';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import CachedIcon from '@mui/icons-material/Cached';
import Question from '../assets/Svg/Question';


function Header() {

    const [showSearch, setshowSearch] = useState(false)
    const [showNotification, setshowNotification] = useState(false)
    const [showAccountSetting, setshowAccountSetting] = useState(false)
    const [showLogout, setshowLogout] = useState(false)
    useEffect(() => {
        if (showNotification || showLogout) {
            setshowAccountSetting(false)
        }
    }, [showNotification, showLogout])
    useEffect(() => {
        if (showAccountSetting || showLogout) {
            setshowNotification(false)
        }
    }, [showAccountSetting, showLogout])
    const { sideBarExpand, setsideBarExpand } = useContext(MyContext)
    return (
        <div className='Header-main'>
            {showLogout &&

                <div className='Sign-out-popup'>
                    <div className='Sign-out-inner'>
                        <div className='sign-out-R1'>
                            <div className='Question-icon'><Question /></div>
                            <div>
                                <div className='Sign-out-popUp-txt1'>hint</div>
                                <div className='Sign-out-popUp-txt2'>Do you really want to log out?</div>
                            </div>
                        </div>

                        <div className='sign-out-R2'>
                            <div className='btn-holder'>
                                <div onClick={() => setshowLogout(false)} className='popUp-btn1'>
                                    Cancel
                                </div>
                                <div className='popUp-btn2'>
                                    Sure
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className={`Header-left ${!sideBarExpand && 'Header-left-collapsed'}`}>
                <div className='Header-logo'>
                    <img src={logo} alt="" />
                </div>
                {sideBarExpand &&
                    <p className='Header-logo-txt'>Defi Pro</p>
                }
            </div>
            <div className='Header-right'>
                <div className='Header-right-inner1'>
                    <div className='Close-icon' onClick={() => setsideBarExpand(!sideBarExpand)}>
                        <Close />
                    </div>
                    <p className='WelcomeTxt'>
                        Welcome to the Defi Pro management platform
                    </p>
                </div>
                <div className='Header-right-inner2'>
                    <div className='nav-item-container'>

                        <SearchIcon onClick={() => setshowSearch(!showSearch)} />
                    </div>
                    {showSearch &&
                        <input type="text" placeholder='Search Menu' className='SearchInput' />
                    }
                    <div className='nav-item-container Notification-Div'>
                        <NotificationsNoneIcon onClick={() => setshowNotification(!showNotification)} />
                        {showNotification &&

                            <div className='Notification-card'>
                                <div className='Notification-card-heading'>
                                    system message (0)
                                </div>
                                <div className='Notification-see-more'>
                                    see more
                                </div>
                            </div>
                        }
                    </div>
                    <div className='nav-item-container'>
                        <div className='Nav-item-account' onClick={() => setshowAccountSetting(!showAccountSetting)}>
                            <AccountCircleIcon style={{ marginRight: "5px" }} />
                            Welcome
                            {showAccountSetting &&
                                <div className='Nav-item-account-card'>
                                    <div><BuildIcon style={{ fontSize: '12px', marginRight: "10px" }} /> system setting</div>
                                    <div><SettingsIcon style={{ fontSize: '12px', marginRight: "10px" }} /> change password</div>
                                    <div><CachedIcon style={{ fontSize: '12px', marginRight: "10px" }} />clear cache</div>
                                </div>
                            }
                        </div>
                    </div>
                    <div onClick={() => setshowLogout(true)} className='nav-item-container signOutbtn'>
                        <LogoutIcon style={{ marginRight: "5px" }} />
                        Sign out
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header