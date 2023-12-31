import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../Context/MyContext';
import { toast } from 'react-hot-toast';
import apis from '../Services';

const EditMiningOrder = ({data,index}) => {

    const {miningOrder, getMiningOders }=useContext(MyContext)

    const [OpenDropDown, setOpenDropDown] = useState(null);
    const [showDetails, setshowDetails] = useState(false);
    const [showConfirmation, setshowConfirmation] = useState(false)
    const [showStatus, setshowStatus] = useState(false)
    const[showProduct,setShowProduct]=useState(0)

    const [addMiningOrder, setMiningOrder] = useState({
        user_address: data?.userId?.user_address,
        product_name: data?.productId?.product_name,
        productId: data?.productId?._id,
        userId: data?.userId?._id,
        amount: data?.amount,
    })

    // Event handler to update the state on input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMiningOrder((prevState) => ({
            ...prevState,
            [name]: value, // Update the corresponding property based on the input name
        }));
    };

    const handleInputChange2 = (name, value) => {
        setMiningOrder((prevState) => ({
            ...prevState,
            [name]: value, // Update the corresponding property based on the input name
        }));
    };

    const UpdateMiningProduct = async (id) => {

      
            const resut = await apis.UpdateMiningOrder(id,{
                "productId": addMiningOrder?.productId,
                "userId": addMiningOrder?.userId,
                "amount": addMiningOrder?.amount,  
            })

            toast.success(resut.data.message, { id: 1 });
            setshowStatus(false)
            setMiningOrder("")
            
        } 
      

   useEffect(()=>{
    getMiningOders();
   },[addMiningOrder])     
      
  return (
    <>
    <div>
           <tr
               className="ant-table-row ant-table-row-level-0"
               data-row-key={1595292128493756418}
               style={{
                   height: "49px",
                   position: "relative",
                   display: "flex",
                   justifyContent: "center",
               }}
           >
               <td
                   className="ant-table-row-cell-break-word"
                   style={{ textAlign: "center" }}
               >
              
                               
                   <span>
                       <a>
                           <font style={{ verticalAlign: "inherit" }}>
                               <font
                                   onClick={() => setshowStatus(true)}
                                   style={{ verticalAlign: "inherit" }}
                               >
                                   edit
                               </font>
                           </font>
                       </a>
                       <div
                          
                           role="separator"
                           className="ant-divider ant-divider-vertical"
                       />
                       {showConfirmation &&
                           <div
                               className="ant-popover ant-popover-placement-top"
                               style={{
                                   position: "fixed",
                                   left: "50%",
                                   top: "50%",
                                   zIndex: "9999",
                                   transformOrigin: "50% 103px",
                               }}
                           >
                               <div className="ant-popover-content">
                             
                                   <div role="tooltip" className="ant-popover-inner">
                                       <div className="ant-popover-inner-content">
                                           <div className="ant-popover-message">
                                               <i
                                                   aria-label="Icon: exclamation-circle"
                                                   className="anticon anticon-exclamation-circle"
                                               >
                                                   <svg
                                                       viewBox="64 64 896 896"
                                                       data-icon="exclamation-circle"
                                                       width="1em"
                                                       height="1em"
                                                       fill="currentColor"
                                                       aria-hidden="true"
                                                       focusable="false"
                                                       className
                                                   >
                                                       <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z" />
                                                   </svg>
                                               </i>
                                               <div className="ant-popover-message-title">
                                                   <font style={{ verticalAlign: "inherit" }}>
                                                       <font style={{ verticalAlign: "inherit" }}>
                                                           confirm to delete?
                                                       </font>
                                                   </font>
                                               </div>
                                           </div>
                                           <div className="ant-popover-buttons" style={{ display: "flex" }}>
                                               <button type="button" className="ant-btn ant-btn-sm" onClick={() => setshowConfirmation(false)}>
                                                   <span>
                                                       <font style={{ verticalAlign: "inherit" }}>
                                                           <font style={{ verticalAlign: "inherit" }}>Cancel</font>
                                                       </font>
                                                   </span>
                                               </button>
                                               <button
                                                   type="button"
                                                   className="ant-btn ant-btn-primary ant-btn-sm"
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
                               </div>
                           </div>
                       }

                       <a  onClick={() => setOpenDropDown(data?._id)} className="ant-dropdown-link ant-dropdown-trigger">
                           <font style={{ verticalAlign: "inherit" }}>
                               <font style={{ verticalAlign: "inherit" }}>More</font>
                           </font>
                           <i
                              
                               aria-label="icon: down"
                               className="anticon anticon-down"
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
                           
                           {/* <div
                               className="ant-dropdown ant-dropdown-placement-bottomLeft"
                               style={{
                                   left: "60px",
                                   top: "35px",
                                   display: `${OpenDropDown ? "flex" : "none"}`,
                                   position: "absolute",
                               }}
                           >
                               <ul
                                  
                                   role="menu"
                                   tabIndex={0}
                                   className="ant-dropdown-menu ant-dropdown-menu-vertical ant-dropdown-menu-root ant-dropdown-menu-light ant-dropdown-content"
                               >
                                   <li
                                      
                                       role="menuitem"
                                       className="ant-dropdown-menu-item"
                                       onClick={() => setshowDetails(true)}
                                   >
                                       <a>
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
                                                   details
                                               </font>
                                           </font>
                                       </a>
                                   </li>
                                   <li
                                      
                                       role="menuitem"
                                       className="ant-dropdown-menu-item"
                                       onClick={() => setshowConfirmation(true)}
                                   >
                                       <a className>
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
                                                   delete
                                               </font>
                                           </font>
                                       </a>
                                   </li>
                               </ul>
                           </div> */}
                       </a>
                   </span>
                  {OpenDropDown &&
                    <div style={{ display: "flex", gap: "10px", marginBottom: "-15px" }}>
                   
                    <div>     
                        <li                                     
                                      role="menuitem"
                                      className="ant-dropdown-menu-item"
                                      onClick={() => setshowDetails(true)}
                                  >
                                      <a>
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
                                                  details
                                              </font>
                                          </font>
                                      </a>
                                  </li>
                    </div>
                    <div>         <li
                                      
                                      role="menuitem"
                                      className="ant-dropdown-menu-item"
                                      onClick={() => setshowConfirmation(true)}
                                  >
                                      <a className>
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
                                                  delete
                                              </font>
                                          </font>
                                      </a>
                                  </li>
                    </div>
                  </div>
                  }

               </td>
           </tr>
    </div>
   
       {showStatus && (
           <>
            <div
                    data-v-731480cd
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
                            style={{ width: "800px", transformOrigin: "7px 172px" }}
                        >
                            <div
                                tabIndex={0}
                                aria-hidden="true"
                                style={{ width: "0px", height: "0px", overflow: "hidden" }}
                            />
                            <div className="ant-modal-content">
                                <button
                                    type="button"
                                    aria-label="Close"
                                    className="ant-modal-close"
                                    fdprocessedid="8kifjj"
                                >
                                    <span onClick={() => setshowStatus(false)}
                                        className="ant-modal-close-x">
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
                                                    <font style={{ verticalAlign: "inherit" }}>add</font>
                                                </font>
                                            </div>
                                            <div className="right ant-col">
                                                <button
                                                    type="button"
                                                    className="ant-modal-close ant-modal-close-x ant-btn ant-btn-link ant-btn-icon-only ant-btn-background-ghost"
                                                    fdprocessedid="71udw6"
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
                                                                        <label
                                                                            title="product name"
                                                                            className="ant-form-item-required"
                                                                        >
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    product name
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
                                                                                >
                                                                                    <div
                                                                                        role="combobox"
                                                                                        aria-autocomplete="list"
                                                                                        aria-haspopup="true"
                                                                                        aria-controls="71a95d2f-c613-4e36-fb39-a2520efe4a89"
                                                                                        className="ant-select-selection ant-select-selection--single"
                                                                                    >
                                                                                        <div onClick={() => setShowProduct(1)} className="ant-select-selection__rendered">
                                                                                            <div className={addMiningOrder?.product_name ? "ant-select-selection__placeholder1" : "ant-select-selection__placeholder"}
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
                                                                                                        {addMiningOrder?.product_name ? addMiningOrder?.product_name : "Please select a product"}
                                                                                                    </font>
                                                                                                </font>

                                                                                            </div>
                                                                                        </div>
                                                                                        {showProduct == 1 &&
                                                                                            <div className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" style={{ width: '100%', left: '0px', top: '30px', display: 'flex' }}><div id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51" tabIndex={-1} className="ant-select-dropdown-content" style={{ overflow: 'auto', transform: 'translateZ(0px)', width: "100%" }}>
                                                                                                <ul role="listbox" onClick={() => { setShowProduct(0) }} tabIndex={0} className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root">
                                                                                                    {miningOrder?.map((data2, index) => {
                                                                                                        return (
                                                                                                            <li onClick={() => { handleInputChange2("productId", data2?.productId?._id),handleInputChange2("product_name",data2?.productId?.product_name) }} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                                                <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                            {data2?.productId?.product_name}
                                                                                                                        </font>
                                                                                                                    </font>
                                                                                                            </span>
                                                                                                     </li>
                                                                                                   )
                                                                                                })}
                                                                                            </ul>
                                                                                          </div>
                                                                                        </div>
                                                                                        }
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
                                                                            title="username"
                                                                            className="ant-form-item-required"
                                                                        >
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    username
                                                                                </font>
                                                                            </font>
                                                                        </label>
                                                                    </div>
                                                                    <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                        <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <div
                                                                                    data-v-5a3a4f6c
                                                                                    tabIndex={0}
                                                                                    className="ant-select ant-select-enabled ant-select-allow-clear"
                                                                                    type="list"
                                                                                    style={{ width: "100%" }}
                                                                                >
                                                                                    <div
                                                                                        role="combobox"
                                                                                        aria-autocomplete="list"
                                                                                        aria-haspopup="true"
                                                                                        aria-controls="4be50db5-4fcb-4b8e-8281-e25399935277"
                                                                                        className="ant-select-selection ant-select-selection--single"
                                                                                    >
                                                                                        <div onClick={() => setShowProduct(2)} className="ant-select-selection__rendered">
                                                                                            <div
                                                                                                unselectable="on"
                                                                                                className={addMiningOrder?.productId ? "ant-select-selection__placeholder1" : "ant-select-selection__placeholder"}
                                                                                                style={{
                                                                                                    display: "block",
                                                                                                    userSelect: "none",
                                                                                                }}
                                                                                            >
                                                                                                <font
                                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                                >
                                                                                                    <font
                                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                                    >
                                                                                                       {addMiningOrder?.user_address ? addMiningOrder?.user_address : "Please select a product"}
                                                                                                    </font>
                                                                                                </font>
                                                                                            </div>
                                                                                            <div
                                                                                                className="ant-select-search ant-select-search--inline"
                                                                                                style={{ display: "none" }}
                                                                                            >
                                                                                                <div className="ant-select-search__field__wrap">
                                                                                                    <input
                                                                                                        autoComplete="off"
                                                                                                        defaultValue
                                                                                                        className="ant-select-search__field"
                                                                                                    />
                                                                                                    <span className="ant-select-search__field__mirror">
                                                                                                        &nbsp;
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        {showProduct == 2 &&
                                                                                            <div className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" style={{ width: '100%', left: '0px', top: '30px', display: 'flex' }}><div id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51" tabIndex={-1} className="ant-select-dropdown-content" style={{ overflow: 'auto', transform: 'translateZ(0px)', width: "100%" }}>
                                                                                                <ul role="listbox" onClick={() => { setShowProduct(0) }} tabIndex={0} className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root">
                                                                                                    {miningOrder?.map((data, index) => {
                                                                                                        return (
                                                                                                            <li onClick={() => { handleInputChange2("userId", data?.userId?._id),handleInputChange2("user_address", data?.userId?.user_address) }} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                                                <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                            {data?.userId?.user_address}
                                                                                                                        </font>
                                                                                                                    </font>
                                                                                                                </span>
                                                                                                            </li>
                                                                                                        )
                                                                                                    })}
                                                                                                </ul></div></div>
                                                                                        }



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
                                                                            title="the amount"
                                                                            className="ant-form-item-required"
                                                                        >
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    the amount
                                                                                </font>
                                                                            </font>
                                                                        </label>
                                                                    </div>
                                                                    <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                        <div className="ant-form-item-control">
                                                                            <span className="ant-form-item-children">
                                                                                <input
                                                                                    placeholder="Please enter the amount"
                                                                                    type="number"
                                                                                    className="ant-input"
                                                                                    fdprocessedid="fjehb"
                                                                                    name="amount"
                                                                                    value={addMiningOrder?.amount}
                                                                                    onChange={handleInputChange}
                                                                                />
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
                                        <button onClick={() => setshowStatus(false)}
                                            type="button" className="ant-btn" fdprocessedid="xgbx4o">
                                            <span>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>closure</font>
                                                </font>
                                            </span>
                                        </button>
                                        <button onClick={()=>UpdateMiningProduct(data?._id)}
                                            type="button"
                                            className="ant-btn ant-btn-primary"
                                            fdprocessedid="7teu7c"
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
           </>
       )}

       {showDetails && (
        
          <div
          data-v-731480cd
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
                  style={{ width: "800px", transformOrigin: "7px 172px" }}
              >
                  <div
                      tabIndex={0}
                      aria-hidden="true"
                      style={{ width: "0px", height: "0px", overflow: "hidden" }}
                  />
                  <div className="ant-modal-content">
                      <button
                          type="button"
                          aria-label="Close"
                          className="ant-modal-close"
                          fdprocessedid="8kifjj"
                      >
                          <span onClick={() => setshowDetails(false)}
                              className="ant-modal-close-x">
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
                                          <font style={{ verticalAlign: "inherit" }}>Details</font>
                                      </font>
                                  </div>
                                  <div className="right ant-col">
                                      <button
                                          type="button"
                                          className="ant-modal-close ant-modal-close-x ant-btn ant-btn-link ant-btn-icon-only ant-btn-background-ghost"
                                          fdprocessedid="71udw6"
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
                                                              <label
                                                                  title="product name"
                                                                  className="ant-form-item-required"
                                                              >
                                                                  <font style={{ verticalAlign: "inherit" }}>
                                                                      <font style={{ verticalAlign: "inherit" }}>
                                                                          product name
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
                                                                      >
                                                                          <div
                                                                              role="combobox"
                                                                              aria-autocomplete="list"
                                                                              aria-haspopup="true"
                                                                              aria-controls="71a95d2f-c613-4e36-fb39-a2520efe4a89"
                                                                              className="ant-select-selection ant-select-selection--single"
                                                                          >
                                                                              <div onClick={() => setShowProduct(1)} className="ant-select-selection__rendered">
                                                                                  <div className={addMiningOrder?.product_name ? "ant-select-selection__placeholder1" : "ant-select-selection__placeholder"}
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
                                                                                              {addMiningOrder?.product_name ? addMiningOrder?.product_name : "Please select a product"}
                                                                                          </font>
                                                                                      </font>

                                                                                  </div>
                                                                              </div>
                                                                              {/* {showProduct == 1 &&
                                                                                  <div className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" style={{ width: '100%', left: '0px', top: '30px', display: 'flex' }}><div id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51" tabIndex={-1} className="ant-select-dropdown-content" style={{ overflow: 'auto', transform: 'translateZ(0px)', width: "100%" }}>
                                                                                      <ul role="listbox" onClick={() => { setShowProduct(0) }} tabIndex={0} className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root">
                                                                                          {quantitativeProduct?.map((data, index) => {
                                                                                              return (
                                                                                                  <li onClick={() => { handleInputChange2("productId", data?._id) }} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                                      <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                          <font style={{ verticalAlign: 'inherit' }}>
                                                                                                              <font style={{ verticalAlign: 'inherit' }}>
                                                                                                                  {data?._id}
                                                                                                              </font>
                                                                                                          </font>
                                                                                                      </span>
                                                                                                  </li>
                                                                                              )
                                                                                          })}
                                                                                      </ul></div></div>
                                                                              } */}
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
                                                                  title="username"
                                                                  className="ant-form-item-required"
                                                              >
                                                                  <font style={{ verticalAlign: "inherit" }}>
                                                                      <font style={{ verticalAlign: "inherit" }}>
                                                                          username
                                                                      </font>
                                                                  </font>
                                                              </label>
                                                          </div>
                                                          <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                              <div className="ant-form-item-control">
                                                                  <span className="ant-form-item-children">
                                                                      <div
                                                                          data-v-5a3a4f6c
                                                                          tabIndex={0}
                                                                          className="ant-select ant-select-enabled ant-select-allow-clear"
                                                                          type="list"
                                                                          style={{ width: "100%" }}
                                                                      >
                                                                          <div
                                                                              role="combobox"
                                                                              aria-autocomplete="list"
                                                                              aria-haspopup="true"
                                                                              aria-controls="4be50db5-4fcb-4b8e-8281-e25399935277"
                                                                              className="ant-select-selection ant-select-selection--single"
                                                                          >
                                                                              <div className="ant-select-selection__rendered">
                                                                                  <div
                                                                                      unselectable="on"
                                                                                      className={addMiningOrder?.user_address ? "ant-select-selection__placeholder1" : "ant-select-selection__placeholder"}
                                                                                      style={{
                                                                                          display: "block",
                                                                                          userSelect: "none",
                                                                                      }}
                                                                                  >
                                                                                      <font
                                                                                          style={{ verticalAlign: "inherit" }}
                                                                                      >
                                                                                          <font
                                                                                              style={{ verticalAlign: "inherit" }}
                                                                                          >
                                                                                             {addMiningOrder?.user_address ? addMiningOrder?.user_address : "Please select a product"}
                                                                                          </font>
                                                                                      </font>
                                                                                  </div>
                                                                                  <div
                                                                                      className="ant-select-search ant-select-search--inline"
                                                                                      style={{ display: "none" }}
                                                                                  >
                                                                                      <div className="ant-select-search__field__wrap">
                                                                                          <input
                                                                                              autoComplete="off"
                                                                                              defaultValue
                                                                                              className="ant-select-search__field"
                                                                                          />
                                                                                          <span className="ant-select-search__field__mirror">
                                                                                              &nbsp;
                                                                                          </span>
                                                                                      </div>
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
                                                                  title="the amount"
                                                                  className="ant-form-item-required"
                                                              >
                                                                  <font style={{ verticalAlign: "inherit" }}>
                                                                      <font style={{ verticalAlign: "inherit" }}>
                                                                          the amount
                                                                      </font>
                                                                  </font>
                                                              </label>
                                                          </div>
                                                          <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                              <div className="ant-form-item-control">
                                                                  <span className="ant-form-item-children">
                                                                      <input
                                                                          placeholder="Please enter the amount"
                                                                          type="number"
                                                                          className="ant-input"
                                                                          fdprocessedid="fjehb"
                                                                          defaultValue={addMiningOrder?.amount}
                                                                      />
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
                                  type="button" className="ant-btn" fdprocessedid="xgbx4o">
                                  <span>
                                      <font style={{ verticalAlign: "inherit" }}>
                                          <font style={{ verticalAlign: "inherit" }}>closure</font>
                                      </font>
                                  </span>
                              </button>
                              <button
                                  type="button"
                                  className="ant-btn ant-btn-primary"
                                  fdprocessedid="7teu7c"
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
       )}
   </>
  )
}

export default EditMiningOrder