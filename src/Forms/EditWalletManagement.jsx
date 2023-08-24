import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../Context/MyContext';
import apis from '../Services';
import { toast } from 'react-hot-toast';

const EditWalletManagement = ({ data, index }) => {
    const{alluserWallets,getAllUserWallet}=useContext(MyContext)

    const [showEdit, setshowEdit] = useState(false);
    const [showState,setShowState]=useState(false)
    const [showDetails,setshowDetails]=useState(false);
    const [showCurrency, setshowCurrency] = useState(false)
    const [walletUpdate, setWalletUpdate] = useState({
        user_address: data?.user_address,
        account_type: data?.account_type,
        currency: data?.currency,
        balance: data?.balance,
        ferozen: data?.ferozen,
        state: data?.state,
    })

console.log("account type not defined",data);


    // Event handler to update the state on input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setWalletUpdate((prevState) => ({
            ...prevState,
            [name]: value, // Update the corresponding property based on the input name
        }));
    };

    const handleInputChange2 = (name, value) => {
        setWalletUpdate((prevState) => ({
            ...prevState,
            [name]: value, // Update the corresponding property based on the input name
        }));
    };

    const UpdateUserWallet = async () => {

       console.log("HIIIIIIII",walletUpdate);
       
        const resut = await apis.updateUserWallet({
            "user_address": walletUpdate?.user_address,
            "account_type": walletUpdate?.account_type,
            "currency": walletUpdate?.currency,
            "balance": walletUpdate?.balance,
            "ferozen": walletUpdate?.ferozen,
            "state": walletUpdate?.state
        })

        console.log("BYYYYYY",resut);
        toast.success(resut?.data?.message);
        setWalletUpdate("")
        setshowEdit(false)
        getAllUserWallet();
    }

useEffect(()=>{},[alluserWallets])


    return (
        <>
            <tr
                className="ant-table-row ant-table-row-level-0"
                data-row-key={1687915884332015618}
                style={{ height: "49px" }}
            >
                <td
                    className="ant-table-row-cell-break-word"
                    style={{ textAlign: "center" }}
                >
                    <span data-v-3a3b3d16>
                        <a onClick={()=>setshowDetails(true)} data-v-3a3b3d16>
                            <font
                                style={{ verticalAlign: "inherit" }}
                            >
                                <font
                                    style={{ verticalAlign: "inherit" }}
                                >
                                    details
                                </font>
                            </font>
                        </a>
                        <div
                            data-v-3a3b3d16
                            role="separator"
                            className="ant-divider ant-divider-vertical"
                        />
                        <a onClick={() => setshowEdit(true)} data-v-3a3b3d16>
                            <font
                                style={{ verticalAlign: "inherit" }}
                            >
                                <font
                                    style={{ verticalAlign: "inherit" }}
                                >
                                    edit
                                </font>
                            </font>
                        </a>
                    </span>
                </td>
            </tr>

            {showEdit &&
                <div
                    data-v-3a3b3d16
                    className="ant-modal-root j-modal-box j-modal-box"
                    width={800}
                    okbuttonprops="[object Object]"
                    canceltext="关闭"
                >
                    <div className="ant-modal-mask" style={{}} />
                    <div
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="rcDialogTitle0"
                        className="ant-modal-wrap "
                        style={{}}
                    >
                        <div
                            role="document"
                            className="ant-modal"
                            style={{ width: "800px", transformOrigin: "1008px 63px" }}
                        >
                            <div
                                tabIndex={0}
                                aria-hidden="true"
                                style={{ width: "0px", height: "0px", overflow: "hidden" }}
                            />
                            <div className="ant-modal-content">
                                <button onClick={() => setshowEdit(false)}
                                    type="button"
                                    aria-label="Close"
                                    className="ant-modal-close"
                                    fdprocessedid="mx73s9"
                                >
                                    <span className="ant-modal-close-x">
                                        <i
                                            aria-label="icon: close"
                                            className="anticon anticon-close ant-modal-close-icon"
                                        >
                                            <svg
                                                viewBox="64 64 896 896"
                                                data-icon="close"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                focusable="false"
                                                className
                                            >
                                                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                                            </svg>
                                        </i>
                                    </span>
                                </button>
                                <div className="ant-modal-header">
                                    <div id="rcDialogTitle0" className="ant-modal-title">
                                        <div className="j-modal-title-row ant-row-flex">
                                            <div className="left ant-col">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>edit</font>
                                                </font>
                                            </div>
                                            <div className="right ant-col">
                                                <button
                                                    type="button"
                                                    className="ant-modal-close ant-modal-close-x ant-btn ant-btn-link ant-btn-icon-only ant-btn-background-ghost"
                                                    fdprocessedid="8mnlfp"
                                                >
                                                    <i
                                                        aria-label="icon: fullscreen"
                                                        className="anticon anticon-fullscreen"
                                                    >
                                                        <svg
                                                            viewBox="64 64 896 896"
                                                            data-icon="fullscreen"
                                                            width="1em"
                                                            height="1em"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            className
                                                        >
                                                            <path d="M290 236.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0 0 13.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 0 0 0 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 0 0-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z" />
                                                        </svg>
                                                    </i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-modal-body">
                                    <div className="ant-spin-nested-loading">
                                        <div className="ant-spin-container">
                                            <div className>
                                                <fieldset>
                                                    <form className="ant-form ant-form-horizontal">
                                                        <div className="ant-row">
                                                            <div className="ant-col ant-col-24">
                                                                <div className="ant-row ant-form-item">
                                                                    <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                        <label title="user" className>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    user
                                                                                </font>
                                                                            </font>
                                                                        </label>
                                                                    </div>
                                                                    <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                        <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <input
                                                                                    type="text"
                                                                                    className="ant-input"
                                                                                    fdprocessedid="vrtqhj"
                                                                                    name="user_address"
                                                                                    defaultValue={walletUpdate?.user_address}
                                                                                    onChange={handleInputChange}
                                                                                />
                                                                            </span>
                                                                            {/**/}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ant-col ant-col-24">
                                                           <div className="ant-row ant-form-item">
                                                               <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                   <label
                                                                       title="currency"
                                                                       className="ant-form-item-required"
                                                                   >

                                                                       <font
                                                                           style={{ verticalAlign: "inherit" }}
                                                                       >

                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >
                                                                               currency

                                                                           </font>

                                                                       </font>
                                                                   </label>
                                                               </div>
                                                               <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                   <div className="ant-form-item-control">

                                                                       <span className="ant-form-item-children">
                                                                           <div
                                                                               data-v-17b4e467
                                                                               tabIndex={0}
                                                                               className="ant-select ant-select-enabled"
                                                                               onClick={() => setshowCurrency(!showCurrency)}
                                                                           >
                                                                               <div
                                                                                   role="combobox"
                                                                                   aria-autocomplete="list"
                                                                                   aria-haspopup="true"
                                                                                   aria-controls="55c9fdb7-9025-4afe-c57a-5a20b62add5f"
                                                                                   className="ant-select-selection ant-select-selection--single"
                                                                               >
                                                                                   <div className="ant-select-selection__rendered">
                                                                                       <div className={"ant-select-selection__placeholder1"}
                                                                                           unselectable="on"
                                                                                          style={{
                                                                                               display: "block",
                                                                                               userSelect: "none",
                                                                                           }}
                                                                                       >

                                                                                           <font
                                                                                               style={{
                                                                                                   verticalAlign: "inherit",
                                                                                               }}
                                                                                           >

                                                                                               <font
                                                                                                   style={{
                                                                                                       verticalAlign: "inherit",
                                                                                                   }}
                                                                                               >
                                                                                                   {walletUpdate?.currency ? walletUpdate?.currency : data?.currency}

                                                                                               </font>

                                                                                           </font>
                                                                                       </div>


                                                                                   </div>

                                                                                   <span

                                                                                       unselectable="on"
                                                                                       className="ant-select-arrow"
                                                                                       style={{ userSelect: "none" }}
                                                                                   >
                                                                                       <i
                                                                                           aria-label="icon: down"
                                                                                           className="anticon anticon-down ant-select-arrow-icon"
                                                                                       >
                                                                                           <svg
                                                                                               viewBox="64 64 896 896"
                                                                                               data-icon="down"
                                                                                               width="1em"
                                                                                               height="1em"
                                                                                               fill="currentColor"
                                                                                               aria-hidden="true"
                                                                                               focusable="false"
                                                                                               className
                                                                                           >
                                                                                               <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                                                                           </svg>
                                                                                       </i>

                                                                                   </span>
                                                                               </div>
                                                                               {showCurrency && ///aliant-select ant-select-enabled
                                                                                   <div className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" style={{ width: '100%', left: '0px', top: '30px', display: 'flex' }}><div id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51" tabIndex={-1} className="ant-select-dropdown-content" style={{ overflow: 'auto', transform: 'translateZ(0px)', width: "100%" }}>
                                                                                       <ul role="listbox" onClick={() => { setshowCurrency(!showCurrency) }} tabIndex={0} className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root">

                                                                                           <li name="product_name" role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <font style={{ verticalAlign: 'inherit' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>please choose
                                                                                                   </font>
                                                                                               </font>
                                                                                           </li>


                                                                                           <li onClick={() => { handleInputChange2("currency","BTC")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           BTC
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>

                                                                                           <li onClick={() => { handleInputChange2("currency","USDT")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="USDT" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           USDT
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>

                                                                                           <li  onClick={() => { handleInputChange2("currency","ETH")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="ETH" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           ETH
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>
                                                                                           <li   onClick={() => { handleInputChange2("currency","DOT")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="DOT" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           DOT
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>
                                                                                           <li  onClick={() => { handleInputChange2("currency","TRX")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="TRX" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           TRX
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>
                                                                                           <li  onClick={() => { handleInputChange2("currency","ETHW")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="ETHW" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           ETHW
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>
                                                                                           <li  onClick={() => { handleInputChange2("currency","USDC")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="USDC" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           USDC
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li></ul></div></div>
                                                                               }
                                                                           </div>


                                                                       </span>
                                                                       {/**/}
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>

                                                            <div className="ant-col ant-col-24">
                                                                <div className="ant-row ant-form-item">
                                                                    <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                        <label title="balance" className>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    balance
                                                                                </font>
                                                                            </font>
                                                                        </label>
                                                                    </div>
                                                                    <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                        <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <div
                                                                                    className="ant-input-number"
                                                                                    style={{ width: "100%" }}
                                                                                >
                                                                                    <div className="ant-input-number-handler-wrap">
                                                                                        <span
                                                                                            className="ant-input-number-handler ant-input-number-handler-up "
                                                                                            unselectable="unselectable"
                                                                                            role="button"
                                                                                            aria-label="Increase Value"
                                                                                        >
                                                                                            <i
                                                                                                aria-label="icon: up"
                                                                                                className="anticon anticon-up ant-input-number-handler-up-inner"
                                                                                            >
                                                                                                <svg
                                                                                                    viewBox="64 64 896 896"
                                                                                                    data-icon="up"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    fill="currentColor"
                                                                                                    aria-hidden="true"
                                                                                                    focusable="false"
                                                                                                    className
                                                                                                >
                                                                                                    <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" />
                                                                                                </svg>
                                                                                            </i>
                                                                                        </span>
                                                                                        <span
                                                                                            className="ant-input-number-handler ant-input-number-handler-down "
                                                                                            unselectable="unselectable"
                                                                                            role="button"
                                                                                            aria-label="Decrease Value"
                                                                                        >
                                                                                            <i
                                                                                                aria-label="icon: down"
                                                                                                className="anticon anticon-down ant-input-number-handler-down-inner"
                                                                                            >
                                                                                                <svg
                                                                                                    viewBox="64 64 896 896"
                                                                                                    data-icon="down"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    fill="currentColor"
                                                                                                    aria-hidden="true"
                                                                                                    focusable="false"
                                                                                                    className
                                                                                                >
                                                                                                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                                                                                </svg>
                                                                                            </i>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="ant-input-number-input-wrap">
                                                                                        <input
                                                                                            role="spinbutton"
                                                                                            aria-valuemin={-9007199254740991}
                                                                                            placeholder="Please enter balance"
                                                                                            autoComplete="off"
                                                                                            min={-9007199254740991}
                                                                                            step={1}
                                                                                            type='number'
                                                                                            className="ant-input-number-input"
                                                                                            fdprocessedid="sga8k8"
                                                                                            aria-valuenow={0}
                                                                                            name="balance"
                                                                                        defaultValue={walletUpdate?.balance}
                                                                                        onChange={handleInputChange}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </span>
                                                                            {/**/}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ant-col ant-col-24">
                                                                <div className="ant-row ant-form-item">
                                                                    <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                        <label title="frozen amount" className>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    frozen amount
                                                                                </font>
                                                                            </font>
                                                                        </label>
                                                                    </div>
                                                                    <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                        <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <div
                                                                                    className="ant-input-number"
                                                                                    style={{ width: "100%" }}
                                                                                >
                                                                                    <div className="ant-input-number-handler-wrap">
                                                                                        <span
                                                                                            className="ant-input-number-handler ant-input-number-handler-up "
                                                                                            unselectable="unselectable"
                                                                                            role="button"
                                                                                            aria-label="Increase Value"
                                                                                        >
                                                                                            <i
                                                                                                aria-label="icon: up"
                                                                                                className="anticon anticon-up ant-input-number-handler-up-inner"
                                                                                            >
                                                                                                <svg
                                                                                                    viewBox="64 64 896 896"
                                                                                                    data-icon="up"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    fill="currentColor"
                                                                                                    aria-hidden="true"
                                                                                                    focusable="false"
                                                                                                    className
                                                                                                >
                                                                                                    <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" />
                                                                                                </svg>
                                                                                            </i>
                                                                                        </span>
                                                                                        <span
                                                                                            className="ant-input-number-handler ant-input-number-handler-down "
                                                                                            unselectable="unselectable"
                                                                                            role="button"
                                                                                            aria-label="Decrease Value"
                                                                                        >
                                                                                            <i
                                                                                                aria-label="icon: down"
                                                                                                className="anticon anticon-down ant-input-number-handler-down-inner"
                                                                                            >
                                                                                                <svg
                                                                                                    viewBox="64 64 896 896"
                                                                                                    data-icon="down"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    fill="currentColor"
                                                                                                    aria-hidden="true"
                                                                                                    focusable="false"
                                                                                                    className
                                                                                                >
                                                                                                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                                                                                </svg>
                                                                                            </i>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="ant-input-number-input-wrap">
                                                                                        <input
                                                                                            role="spinbutton"
                                                                                            aria-valuemin={-9007199254740991}
                                                                                            placeholder="Please enter the frozen amount"
                                                                                            autoComplete="off"
                                                                                            min={-9007199254740991}
                                                                                            step={1}
                                                                                            className="ant-input-number-input"
                                                                                            fdprocessedid="ugurna"
                                                                                            aria-valuenow={0}
                                                                                            name="ferozen"
                                                                                    defaultValue={walletUpdate?.ferozen}
                                                                                    onChange={handleInputChange}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </span>
                                                                            {/**/}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ant-col ant-col-24">
                                                           <div className="ant-row ant-form-item">
                                                               <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                   <label
                                                                       title="currency"
                                                                       className="ant-form-item-required"
                                                                   >

                                                                       <font
                                                                           style={{ verticalAlign: "inherit" }}
                                                                       >

                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >
                                                                               state

                                                                           </font>

                                                                       </font>
                                                                   </label>
                                                               </div>
                                                               <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                   <div className="ant-form-item-control">

                                                                       <span className="ant-form-item-children">
                                                                           <div
                                                                               data-v-17b4e467
                                                                               tabIndex={0}
                                                                               className="ant-select ant-select-enabled"
                                                                               onClick={() => setShowState(!showState)}
                                                                           >
                                                                               <div
                                                                                   role="combobox"
                                                                                   aria-autocomplete="list"
                                                                                   aria-haspopup="true"
                                                                                   aria-controls="55c9fdb7-9025-4afe-c57a-5a20b62add5f"
                                                                                   className="ant-select-selection ant-select-selection--single"
                                                                               >
                                                                                   <div className="ant-select-selection__rendered">
                                                                                       <div className={"ant-select-selection__placeholder1"}
                                                                                           unselectable="on"
                                                                                          style={{
                                                                                               display: "block",
                                                                                               userSelect: "none",
                                                                                           }}
                                                                                       >

                                                                                           <font
                                                                                               style={{
                                                                                                   verticalAlign: "inherit",
                                                                                               }}
                                                                                           >

                                                                                               <font
                                                                                                   style={{
                                                                                                       verticalAlign: "inherit",
                                                                                                   }}
                                                                                               >
                                                                                                   {walletUpdate?.state ? walletUpdate?.state : data?.state}

                                                                                               </font>

                                                                                           </font>
                                                                                       </div>


                                                                                   </div>

                                                                                   <span

                                                                                       unselectable="on"
                                                                                       className="ant-select-arrow"
                                                                                       style={{ userSelect: "none" }}
                                                                                   >
                                                                                       <i
                                                                                           aria-label="icon: down"
                                                                                           className="anticon anticon-down ant-select-arrow-icon"
                                                                                       >
                                                                                           <svg
                                                                                               viewBox="64 64 896 896"
                                                                                               data-icon="down"
                                                                                               width="1em"
                                                                                               height="1em"
                                                                                               fill="currentColor"
                                                                                               aria-hidden="true"
                                                                                               focusable="false"
                                                                                               className
                                                                                           >
                                                                                               <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                                                                           </svg>
                                                                                       </i>

                                                                                   </span>
                                                                               </div>
                                                                               {showState && ///aliant-select ant-select-enabled
                                                                                   <div className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" style={{ width: '100%', left: '0px', top: '30px', display: 'flex' }}><div id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51" tabIndex={-1} className="ant-select-dropdown-content" style={{ overflow: 'auto', transform: 'translateZ(0px)', width: "100%" }}>
                                                                                       <ul role="listbox" onClick={() => { setShowState(!showState) }} tabIndex={0} className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root">

                                                                                           <li name="product_name" role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <font style={{ verticalAlign: 'inherit' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>please choose
                                                                                                   </font>
                                                                                               </font>
                                                                                           </li>


                                                                                           <li onClick={() => { handleInputChange2("state","normal")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           Normal
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>

                                                                                           <li onClick={() => { handleInputChange2("state","freeze")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="USDT" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           Freeze
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>

                                                                   </ul></div></div>
                                                                               }
                                                                           </div>


                                                                       </span>
                                                                       {/**/}
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>

                                                        </div>
                                                    </form>
                                                </fieldset>
                                                <fieldset disabled="disabled" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-modal-footer">
                                    <div>
                                        <button onClick={() => setshowEdit(false)}
                                            type="button" className="ant-btn" fdprocessedid="gpvsg">
                                            <span>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>closure</font>
                                                </font>
                                            </span>
                                        </button>
                                        <button onClick={() => UpdateUserWallet()}
                                            type="button"
                                            className="ant-btn ant-btn-primary"
                                            fdprocessedid="wjszvh"
                                        >
                                            <span>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Sure</font>
                                                </font>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                aria-hidden="true"
                                style={{ width: "0px", height: "0px", overflow: "hidden" }}
                            />
                        </div>
                    </div>
                </div>
            }

            
{showDetails &&
                <div
                    data-v-3a3b3d16
                    className="ant-modal-root j-modal-box j-modal-box"
                    width={800}
                    okbuttonprops="[object Object]"
                    canceltext="关闭"
                >
                    <div className="ant-modal-mask" style={{}} />
                    <div
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="rcDialogTitle0"
                        className="ant-modal-wrap "
                        style={{}}
                    >
                        <div
                            role="document"
                            className="ant-modal"
                            style={{ width: "800px", transformOrigin: "1008px 63px" }}
                        >
                            <div
                                tabIndex={0}
                                aria-hidden="true"
                                style={{ width: "0px", height: "0px", overflow: "hidden" }}
                            />
                            <div className="ant-modal-content">
                                <button onClick={() => setshowDetails(false)}
                                    type="button"
                                    aria-label="Close"
                                    className="ant-modal-close"
                                    fdprocessedid="mx73s9"
                                >
                                    <span className="ant-modal-close-x">
                                        <i
                                            aria-label="icon: close"
                                            className="anticon anticon-close ant-modal-close-icon"
                                        >
                                            <svg
                                                viewBox="64 64 896 896"
                                                data-icon="close"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                focusable="false"
                                                className
                                            >
                                                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                                            </svg>
                                        </i>
                                    </span>
                                </button>
                                <div className="ant-modal-header">
                                    <div id="rcDialogTitle0" className="ant-modal-title">
                                        <div className="j-modal-title-row ant-row-flex">
                                            <div className="left ant-col">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>edit</font>
                                                </font>
                                            </div>
                                            <div className="right ant-col">
                                                <button
                                                    type="button"
                                                    className="ant-modal-close ant-modal-close-x ant-btn ant-btn-link ant-btn-icon-only ant-btn-background-ghost"
                                                    fdprocessedid="8mnlfp"
                                                >
                                                    <i
                                                        aria-label="icon: fullscreen"
                                                        className="anticon anticon-fullscreen"
                                                    >
                                                        <svg
                                                            viewBox="64 64 896 896"
                                                            data-icon="fullscreen"
                                                            width="1em"
                                                            height="1em"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            className
                                                        >
                                                            <path d="M290 236.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0 0 13.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 0 0 0 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 0 0-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z" />
                                                        </svg>
                                                    </i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-modal-body">
                                    <div className="ant-spin-nested-loading">
                                        <div className="ant-spin-container">
                                            <div className>
                                                <fieldset>
                                                    <form className="ant-form ant-form-horizontal">
                                                        <div className="ant-row">
                                                            <div className="ant-col ant-col-24">
                                                                <div className="ant-row ant-form-item">
                                                                    <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                        <label title="user" className>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    user
                                                                                </font>
                                                                            </font>
                                                                        </label>
                                                                    </div>
                                                                    <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                        <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <input
                                                                                    type="text"
                                                                                    className="ant-input"
                                                                                    fdprocessedid="vrtqhj"
                                                                                    name="user_address"
                                                                                    defaultValue={walletUpdate?.user_address}
                                                                                    onChange={handleInputChange}
                                                                                />
                                                                            </span>
                                                                            {/**/}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ant-col ant-col-24">
                                                           <div className="ant-row ant-form-item">
                                                               <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                   <label
                                                                       title="currency"
                                                                       className="ant-form-item-required"
                                                                   >

                                                                       <font
                                                                           style={{ verticalAlign: "inherit" }}
                                                                       >

                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >
                                                                               currency

                                                                           </font>

                                                                       </font>
                                                                   </label>
                                                               </div>
                                                               <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                   <div className="ant-form-item-control">

                                                                       <span className="ant-form-item-children">
                                                                           <div
                                                                               data-v-17b4e467
                                                                               tabIndex={0}
                                                                               className="ant-select ant-select-enabled"
                                                                               onClick={() => setshowCurrency(!showCurrency)}
                                                                           >
                                                                               <div
                                                                                   role="combobox"
                                                                                   aria-autocomplete="list"
                                                                                   aria-haspopup="true"
                                                                                   aria-controls="55c9fdb7-9025-4afe-c57a-5a20b62add5f"
                                                                                   className="ant-select-selection ant-select-selection--single"
                                                                               >
                                                                                   <div className="ant-select-selection__rendered">
                                                                                       <div className={"ant-select-selection__placeholder1"}
                                                                                           unselectable="on"
                                                                                          style={{
                                                                                               display: "block",
                                                                                               userSelect: "none",
                                                                                           }}
                                                                                       >

                                                                                           <font
                                                                                               style={{
                                                                                                   verticalAlign: "inherit",
                                                                                               }}
                                                                                           >

                                                                                               <font
                                                                                                   style={{
                                                                                                       verticalAlign: "inherit",
                                                                                                   }}
                                                                                               >
                                                                                                   {walletUpdate?.currency ? walletUpdate?.currency : data?.currency}

                                                                                               </font>

                                                                                           </font>
                                                                                       </div>


                                                                                   </div>

                                                                                   <span

                                                                                       unselectable="on"
                                                                                       className="ant-select-arrow"
                                                                                       style={{ userSelect: "none" }}
                                                                                   >
                                                                                       <i
                                                                                           aria-label="icon: down"
                                                                                           className="anticon anticon-down ant-select-arrow-icon"
                                                                                       >
                                                                                           <svg
                                                                                               viewBox="64 64 896 896"
                                                                                               data-icon="down"
                                                                                               width="1em"
                                                                                               height="1em"
                                                                                               fill="currentColor"
                                                                                               aria-hidden="true"
                                                                                               focusable="false"
                                                                                               className
                                                                                           >
                                                                                               <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                                                                           </svg>
                                                                                       </i>

                                                                                   </span>
                                                                               </div>
                                                                               {/* {showCurrency && ///aliant-select ant-select-enabled
                                                                                   <div className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" style={{ width: '100%', left: '0px', top: '30px', display: 'flex' }}><div id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51" tabIndex={-1} className="ant-select-dropdown-content" style={{ overflow: 'auto', transform: 'translateZ(0px)', width: "100%" }}>
                                                                                       <ul role="listbox" onClick={() => { setshowCurrency(!showCurrency) }} tabIndex={0} className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root">

                                                                                           <li name="product_name" role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <font style={{ verticalAlign: 'inherit' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>please choose
                                                                                                   </font>
                                                                                               </font>
                                                                                           </li>


                                                                                           <li onClick={() => { handleInputChange2("currency","BTC")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           BTC
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>

                                                                                           <li onClick={() => { handleInputChange2("currency","USDT")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="USDT" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           USDT
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>

                                                                                           <li  onClick={() => { handleInputChange2("currency","ETH")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="ETH" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           ETH
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>
                                                                                           <li   onClick={() => { handleInputChange2("currency","DOT")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="DOT" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           DOT
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>
                                                                                           <li  onClick={() => { handleInputChange2("currency","TRX")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="TRX" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           TRX
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>
                                                                                           <li  onClick={() => { handleInputChange2("currency","ETHW")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="ETHW" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           ETHW
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>
                                                                                           <li  onClick={() => { handleInputChange2("currency","USDC")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="USDC" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           USDC
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li></ul></div></div>
                                                                               } */}
                                                                           </div>


                                                                       </span>
                                                                       {/**/}
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>

                                                            <div className="ant-col ant-col-24">
                                                                <div className="ant-row ant-form-item">
                                                                    <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                        <label title="balance" className>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    balance
                                                                                </font>
                                                                            </font>
                                                                        </label>
                                                                    </div>
                                                                    <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                        <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <div
                                                                                    className="ant-input-number"
                                                                                    style={{ width: "100%" }}
                                                                                >
                                                                                    <div className="ant-input-number-handler-wrap">
                                                                                        <span
                                                                                            className="ant-input-number-handler ant-input-number-handler-up "
                                                                                            unselectable="unselectable"
                                                                                            role="button"
                                                                                            aria-label="Increase Value"
                                                                                        >
                                                                                            <i
                                                                                                aria-label="icon: up"
                                                                                                className="anticon anticon-up ant-input-number-handler-up-inner"
                                                                                            >
                                                                                                <svg
                                                                                                    viewBox="64 64 896 896"
                                                                                                    data-icon="up"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    fill="currentColor"
                                                                                                    aria-hidden="true"
                                                                                                    focusable="false"
                                                                                                    className
                                                                                                >
                                                                                                    <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" />
                                                                                                </svg>
                                                                                            </i>
                                                                                        </span>
                                                                                        <span
                                                                                            className="ant-input-number-handler ant-input-number-handler-down "
                                                                                            unselectable="unselectable"
                                                                                            role="button"
                                                                                            aria-label="Decrease Value"
                                                                                        >
                                                                                            <i
                                                                                                aria-label="icon: down"
                                                                                                className="anticon anticon-down ant-input-number-handler-down-inner"
                                                                                            >
                                                                                                <svg
                                                                                                    viewBox="64 64 896 896"
                                                                                                    data-icon="down"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    fill="currentColor"
                                                                                                    aria-hidden="true"
                                                                                                    focusable="false"
                                                                                                    className
                                                                                                >
                                                                                                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                                                                                </svg>
                                                                                            </i>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="ant-input-number-input-wrap">
                                                                                        <input
                                                                                            role="spinbutton"
                                                                                            aria-valuemin={-9007199254740991}
                                                                                            placeholder="Please enter balance"
                                                                                            autoComplete="off"
                                                                                            min={-9007199254740991}
                                                                                            step={1}
                                                                                            type='number'
                                                                                            className="ant-input-number-input"
                                                                                            fdprocessedid="sga8k8"
                                                                                            aria-valuenow={0}
                                                                                            name="balance"
                                                                                        defaultValue={walletUpdate?.balance}
                                                                                        onChange={handleInputChange}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </span>
                                                                            {/**/}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ant-col ant-col-24">
                                                                <div className="ant-row ant-form-item">
                                                                    <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                        <label title="frozen amount" className>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    frozen amount
                                                                                </font>
                                                                            </font>
                                                                        </label>
                                                                    </div>
                                                                    <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                        <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <div
                                                                                    className="ant-input-number"
                                                                                    style={{ width: "100%" }}
                                                                                >
                                                                                    <div className="ant-input-number-handler-wrap">
                                                                                        <span
                                                                                            className="ant-input-number-handler ant-input-number-handler-up "
                                                                                            unselectable="unselectable"
                                                                                            role="button"
                                                                                            aria-label="Increase Value"
                                                                                        >
                                                                                            <i
                                                                                                aria-label="icon: up"
                                                                                                className="anticon anticon-up ant-input-number-handler-up-inner"
                                                                                            >
                                                                                                <svg
                                                                                                    viewBox="64 64 896 896"
                                                                                                    data-icon="up"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    fill="currentColor"
                                                                                                    aria-hidden="true"
                                                                                                    focusable="false"
                                                                                                    className
                                                                                                >
                                                                                                    <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" />
                                                                                                </svg>
                                                                                            </i>
                                                                                        </span>
                                                                                        <span
                                                                                            className="ant-input-number-handler ant-input-number-handler-down "
                                                                                            unselectable="unselectable"
                                                                                            role="button"
                                                                                            aria-label="Decrease Value"
                                                                                        >
                                                                                            <i
                                                                                                aria-label="icon: down"
                                                                                                className="anticon anticon-down ant-input-number-handler-down-inner"
                                                                                            >
                                                                                                <svg
                                                                                                    viewBox="64 64 896 896"
                                                                                                    data-icon="down"
                                                                                                    width="1em"
                                                                                                    height="1em"
                                                                                                    fill="currentColor"
                                                                                                    aria-hidden="true"
                                                                                                    focusable="false"
                                                                                                    className
                                                                                                >
                                                                                                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                                                                                </svg>
                                                                                            </i>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="ant-input-number-input-wrap">
                                                                                        <input
                                                                                            role="spinbutton"
                                                                                            aria-valuemin={-9007199254740991}
                                                                                            placeholder="Please enter the frozen amount"
                                                                                            autoComplete="off"
                                                                                            min={-9007199254740991}
                                                                                            step={1}
                                                                                            className="ant-input-number-input"
                                                                                            fdprocessedid="ugurna"
                                                                                            aria-valuenow={0}
                                                                                            name="ferozen"
                                                                                    defaultValue={walletUpdate?.ferozen}
                                                                                    onChange={handleInputChange}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </span>
                                                                            {/**/}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ant-col ant-col-24">
                                                           <div className="ant-row ant-form-item">
                                                               <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                   <label
                                                                       title="currency"
                                                                       className="ant-form-item-required"
                                                                   >

                                                                       <font
                                                                           style={{ verticalAlign: "inherit" }}
                                                                       >

                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >
                                                                               state

                                                                           </font>

                                                                       </font>
                                                                   </label>
                                                               </div>
                                                               <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                   <div className="ant-form-item-control">

                                                                       <span className="ant-form-item-children">
                                                                           <div
                                                                               data-v-17b4e467
                                                                               tabIndex={0}
                                                                               className="ant-select ant-select-enabled"
                                                                               onClick={() => setShowState(!showState)}
                                                                           >
                                                                               <div
                                                                                   role="combobox"
                                                                                   aria-autocomplete="list"
                                                                                   aria-haspopup="true"
                                                                                   aria-controls="55c9fdb7-9025-4afe-c57a-5a20b62add5f"
                                                                                   className="ant-select-selection ant-select-selection--single"
                                                                               >
                                                                                   <div className="ant-select-selection__rendered">
                                                                                       <div className={"ant-select-selection__placeholder1"}
                                                                                           unselectable="on"
                                                                                          style={{
                                                                                               display: "block",
                                                                                               userSelect: "none",
                                                                                           }}
                                                                                       >

                                                                                           <font
                                                                                               style={{
                                                                                                   verticalAlign: "inherit",
                                                                                               }}
                                                                                           >

                                                                                               <font
                                                                                                   style={{
                                                                                                       verticalAlign: "inherit",
                                                                                                   }}
                                                                                               >
                                                                                                   {walletUpdate?.state ? walletUpdate?.state : data?.state}

                                                                                               </font>

                                                                                           </font>
                                                                                       </div>


                                                                                   </div>

                                                                                   <span

                                                                                       unselectable="on"
                                                                                       className="ant-select-arrow"
                                                                                       style={{ userSelect: "none" }}
                                                                                   >
                                                                                       <i
                                                                                           aria-label="icon: down"
                                                                                           className="anticon anticon-down ant-select-arrow-icon"
                                                                                       >
                                                                                           <svg
                                                                                               viewBox="64 64 896 896"
                                                                                               data-icon="down"
                                                                                               width="1em"
                                                                                               height="1em"
                                                                                               fill="currentColor"
                                                                                               aria-hidden="true"
                                                                                               focusable="false"
                                                                                               className
                                                                                           >
                                                                                               <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                                                                           </svg>
                                                                                       </i>

                                                                                   </span>
                                                                               </div>
                                                                               {/* {showState && ///aliant-select ant-select-enabled
                                                                                   <div className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" style={{ width: '100%', left: '0px', top: '30px', display: 'flex' }}><div id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51" tabIndex={-1} className="ant-select-dropdown-content" style={{ overflow: 'auto', transform: 'translateZ(0px)', width: "100%" }}>
                                                                                       <ul role="listbox" onClick={() => { setShowState(!showState) }} tabIndex={0} className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root">

                                                                                           <li name="product_name" role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <font style={{ verticalAlign: 'inherit' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>please choose
                                                                                                   </font>
                                                                                               </font>
                                                                                           </li>


                                                                                           <li onClick={() => { handleInputChange2("state","normal")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           Normal
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>

                                                                                           <li onClick={() => { handleInputChange2("state","freeze")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="USDT" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           Freeze
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>

                                                                   </ul></div></div>
                                                                               } */}
                                                                           </div>


                                                                       </span>
                                                                       {/**/}
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>

                                                        </div>
                                                    </form>
                                                </fieldset>
                                                <fieldset disabled="disabled" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ant-modal-footer">
                                    <div>
                                        <button onClick={() => setshowDetails(false)}
                                            type="button" className="ant-btn" fdprocessedid="gpvsg">
                                            <span>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>closure</font>
                                                </font>
                                            </span>
                                        </button>
                                        <button 
                                            type="button"
                                            className="ant-btn ant-btn-primary"
                                            fdprocessedid="wjszvh"
                                        >
                                            <span>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Sure</font>
                                                </font>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                aria-hidden="true"
                                style={{ width: "0px", height: "0px", overflow: "hidden" }}
                            />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default EditWalletManagement