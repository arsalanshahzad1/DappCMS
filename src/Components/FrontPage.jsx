import React from 'react'
import Data from '../assets/Svg/Data'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
function FrontPage() {
    return (
        <div>
            <div>
               
                <div className='Main-R2'>
                    <div className='Main-R2-row1'>
                        Statistics
                    </div>
                    <div className='Main-R2-items'>
                        <div>Current user</div>
                        <div>New users</div>
                        <div>User Pool Amount</div>
                    </div>
                    <div className='Main-R2-items'>
                        <div>current authorization</div>
                        <div>Add authorization</div>
                        <div>Authorized amount</div>
                    </div>
                    <div className='Main-R2-items'>
                        <div>User withdrawal amount</div>
                        <div>Withdrawal amount</div>
                        <div>user recharge</div>
                    </div>

                </div>
                <div className='Main-R3'>
                    <div className='Main-R3-row1'>
                        Statistics by month
                    </div>
                    <table className='Main-R3-table'>
                        <th>
                            <tr>
                                <td>month</td>
                                <td>Withdrawal amount</td>
                                <td>Recharge amount</td>
                                <td>lump sum</td>
                            </tr>
                        </th>
                    </table>
                    <div className='Main-R3-row2'>
                        <Data />
                        No data
                    </div>

                </div>
                <div className='Main-R4'>
                    Please choose a homepage style: <RadioButtonCheckedIcon style={{ fontSize: '14px', marginInline: '5px', color: "#008ef9" }} />  statistic chart
                </div>
                <div className='Main-R5'>
                    Copyright  2021 Defi Pro Produced
                </div>
            </div>
        </div>
    )
}

export default FrontPage