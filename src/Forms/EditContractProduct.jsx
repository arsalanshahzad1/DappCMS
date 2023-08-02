import React from 'react'
import { useState,useEffect } from 'react'
import apis from '../Services';
import { toast } from 'react-hot-toast';


const EditContractProduct = ({getproducts, contractProduct, data, index}) => {

    const [showCurrency, setshowCurrency] = useState(false)
    const [OpenDropDown, setOpenDropDown] = useState(null);
    const [showDetails, setshowDetails] = useState(false);
    const [showConfirmation, setshowConfirmation] = useState(false)
    const [showStatus, setshowStatus] = useState(false)
    const [activeDropdownIndex, setActiveDropdownIndex] = useState(-1);
    

    const [addSecondProduct, setSecondProduct] = useState({
        product_name: data?.product_name,
        Currency: data?.currency,
        Delivery_time: data?.deliveryTime,
        odds: data?.odds,
        maximum_amount: data?.maximum_amount,
        minimum_amount: data?.minimum_amount,
        Remark: data?.remark,
    })
    



   // Event handler to update the state on input change
   const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSecondProduct((prevState) => ({
        ...prevState,
        [name]: value, // Update the corresponding property based on the input name
    }));
};

const handleInputChange2 = (name,value) => {
    setSecondProduct((prevState) => ({
        ...prevState,
        [name]: value, // Update the corresponding property based on the input name
    }));
};



const CreateSecondContractProduct = async (id) => {
   console.log("One", addSecondProduct.product_name,
    addSecondProduct.Currency,
 addSecondProduct.Delivery_time,
 addSecondProduct.odds,
 addSecondProduct.maximum_amount,
   addSecondProduct.minimum_amount,
    addSecondProduct.Remark);
        const resut = await apis.UpdateSecondContracProduct(id,{
            "product_name": addSecondProduct.product_name,
            "currency": addSecondProduct.Currency,
            "deliveryTime": addSecondProduct.Delivery_time,
            "odds": addSecondProduct.odds,
            "maximum_amount": addSecondProduct.maximum_amount,
            "minimum_amount": addSecondProduct.minimum_amount,
            "remark": addSecondProduct.Remark,
        })
    
        toast.success(resut.data?.message,{ id: 1 });
        setSecondProduct("")
        setshowStatus(false)
        getproducts();
}

useEffect(()=>{
},[contractProduct,OpenDropDown])

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
               <div>
                   <div
                       tabIndex={-1}
                       role="dialog"
                       aria-labelledby="rcDialogTitle2"
                       className="ant-modal-wrap "
                   >
                       <div
                           role="document"
                           className="ant-modal"
                           style={{ width: "800px", transformOrigin: "929px 222px" }}
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
                               >

                                   <span
                                       onClick={() => setshowStatus(false)}
                                       className="ant-modal-close-x"
                                   >
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

                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >

                                                                               <font
                                                                                   style={{ verticalAlign: "inherit" }}
                                                                               >
                                                                                   product name

                                                                               </font>

                                                                           </font>
                                                                       </label>
                                                                   </div>
                                                                   <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                       <div className="ant-form-item-control">

                                                                           <span className="ant-form-item-children">
                                                                               <input
                                                                                   placeholder="please input the product name"
                                                                                   type="text"
                                                                                   className="ant-input"
                                                                                   name="product_name"
                                                                                   value={addSecondProduct.product_name}
                                                                                   onChange={handleInputChange}
                                                                                   // defaultValue={data?.product_name}
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
                                                                       title="Currency"
                                                                       className="ant-form-item-required"
                                                                   >

                                                                       <font
                                                                           style={{ verticalAlign: "inherit" }}
                                                                       >

                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >
                                                                               Currency

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
                                                                                                   {addSecondProduct?.Currency ? addSecondProduct?.Currency : data?.currency}

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


                                                                                           <li onClick={() => { handleInputChange2("Currency","BTC")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           BTC
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>

                                                                                           <li onClick={() => { handleInputChange2("Currency","USDT")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="USDT" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           USDT
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>

                                                                                           <li  onClick={() => { handleInputChange2("Currency","ETH")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="ETH" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           ETH
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>
                                                                                           <li   onClick={() => { handleInputChange2("Currency","DOT")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="DOT" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           DOT
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>
                                                                                           <li  onClick={() => { handleInputChange2("Currency","TRX")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="TRX" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           TRX
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>
                                                                                           <li  onClick={() => { handleInputChange2("Currency","ETHW")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                                                               <span data-v-17b4e467 title="ETHW" style={{ display: 'inline-block', width: '100%' }}>
                                                                                                   <font style={{ verticalAlign: 'inherit' }}>
                                                                                                       <font style={{ verticalAlign: 'inherit' }}>
                                                                                                           ETHW
                                                                                                       </font>
                                                                                                   </font>
                                                                                               </span>
                                                                                           </li>
                                                                                           <li  onClick={() => { handleInputChange2("Currency","USDC")}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
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
                                                                       <label
                                                                           title="Delivery time (seconds)"
                                                                           className="ant-form-item-required"
                                                                       >

                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >

                                                                               <font
                                                                                   style={{ verticalAlign: "inherit" }}
                                                                               >
                                                                                   Delivery time (seconds)

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
                                                                                           aria-valuemin={
                                                                                               -9007199254740991
                                                                                           }
                                                                                           placeholder="Please enter the delivery time (seconds)"
                                                                                           autoComplete="off"
                                                                                           min={-9007199254740991}
                                                                                           step={1}
                                                                                           className="ant-input-number-input"
                                                                                           aria-valuenow={60}
                                                                                           // defaultValue={data?.deliveryTime}
                                                                                           name="Delivery_time"
                                                                                           Value={addSecondProduct.Delivery_time}
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
                                                                           title="odds"
                                                                           className="ant-form-item-required"
                                                                       >

                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >

                                                                               <font
                                                                                   style={{ verticalAlign: "inherit" }}
                                                                               >
                                                                                   odds

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
                                                                                           aria-valuemin={
                                                                                               -9007199254740991
                                                                                           }
                                                                                           placeholder="Please enter odds"
                                                                                           autoComplete="off"
                                                                                           min={-9007199254740991}
                                                                                           step={1}
                                                                                           className="ant-input-number-input"
                                                                                           aria-valuenow="0.25"
                                                                                           // defaultValue={data?.odds}
                                                                                           name="odds"
                                                                                           value={addSecondProduct.odds}
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
                                                                           title="maximum amount"
                                                                           className="ant-form-item-required"
                                                                       >

                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >

                                                                               <font
                                                                                   style={{ verticalAlign: "inherit" }}
                                                                               >
                                                                                   maximum amount

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
                                                                                           aria-valuemin={
                                                                                               -9007199254740991
                                                                                           }
                                                                                           placeholder="Please enter the maximum amount"
                                                                                           autoComplete="off"
                                                                                           min={-9007199254740991}
                                                                                           step={1}
                                                                                           className="ant-input-number-input"
                                                                                           aria-valuenow={100000}
                                                                                           // defaultValue={data?.maximum_amount}  
                                                                                           name="maximum_amount"
                                                                                           value={addSecondProduct.maximum_amount}
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
                                                                           title="minimum amount"
                                                                           className="ant-form-item-required"
                                                                       >

                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >

                                                                               <font
                                                                                   style={{ verticalAlign: "inherit" }}
                                                                               >
                                                                                   minimum amount

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
                                                                                           aria-valuemin={
                                                                                               -9007199254740991
                                                                                           }
                                                                                           placeholder="Please enter a minimum amount"
                                                                                           autoComplete="off"
                                                                                           min={-9007199254740991}
                                                                                           step={1}
                                                                                           className="ant-input-number-input"
                                                                                           aria-valuenow={100}
                                                                                           // defaultValue={data?.minimum_amount}
                                                                                           name="minimum_amount"
                                                                                           value={addSecondProduct.minimum_amount}
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
                                                                       <label title="Remark" className>

                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >

                                                                               <font
                                                                                   style={{ verticalAlign: "inherit" }}
                                                                               >
                                                                                   Remark

                                                                               </font>

                                                                           </font>
                                                                       </label>
                                                                   </div>
                                                                   <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                       <div className="ant-form-item-control">

                                                                           <span className="ant-form-item-children">
                                                                               <textarea
                                                                                   placeholder="Please enter a note"
                                                                                   className="ant-input"
                                                                                   rows={4}
                                                                                   name="Remark"
                                                                                   value={addSecondProduct.Remark}
                                                                                   onChange={handleInputChange} 
                                                                                   // defaultValue={data?.remark}
                                                                                   
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
                                       <button
                                           onClick={() => setshowStatus(false)}
                                           type="button"
                                           className="ant-btn"
                                       >

                                           <span>

                                               <font style={{ verticalAlign: "inherit" }}>

                                                   <font style={{ verticalAlign: "inherit" }}>
                                                       closure

                                                   </font>

                                               </font>

                                           </span>
                                       </button>
                                       <button  onClick={() => CreateSecondContractProduct(data?._id)} type="button" className="ant-btn ant-btn-primary">

                                           <span>

                                               <font style={{ verticalAlign: "inherit" }}>

                                                   <font style={{ verticalAlign: "inherit" }}>
                                                       Sure

                                                   </font>

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
           <div>
               <div className="ant-modal-mask" style={{}} />

               <div
                   area-disabled
                   tabIndex={-1}
                   role="dialog"
                   aria-labelledby="rcDialogTitle0"
                   className="ant-modal-wrap "
                   style={{}}
               >
                   <div
                       role="document"
                       className="ant-modal"
                       style={{ width: "800px", transformOrigin: "993px 198px" }}
                   >
                       <div
                           tabIndex={0}
                           aria-hidden="true"
                           style={{ width: "0px", height: "0px", overflow: "hidden" }}
                       />
                       <div className="ant-modal-content">
                           <button
                               onClick={() => setshowDetails(false)}
                               type="button"
                               aria-label="Close"
                               className="ant-modal-close"
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
                                               <font style={{ verticalAlign: "inherit" }}>
                                                   details
                                               </font>
                                           </font>
                                       </div>
                                       <div className="right ant-col">
                                           <button
                                               type="button"
                                               className="ant-modal-close ant-modal-close-x ant-btn ant-btn-link ant-btn-icon-only ant-btn-background-ghost"
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
                                       <div className="jeecg-form-container-disabled">
                                           <fieldset disabled="disabled">
                                               <form className="ant-form ant-form-horizontal">
                                                   <div className="ant-row">
                                                       <div className="ant-col ant-col-24">
                                                           <div className="ant-row ant-form-item">
                                                               <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                   <label
                                                                       title="product name"
                                                                       className="ant-form-item-required"
                                                                   >
                                                                       <font
                                                                           style={{ verticalAlign: "inherit" }}
                                                                       >
                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >
                                                                               product name
                                                                           </font>
                                                                       </font>
                                                                   </label>
                                                               </div>
                                                               <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                   <div className="ant-form-item-control">
                                                                       <span className="ant-form-item-children">
                                                                           <input
                                                                               placeholder="please input the product name"
                                                                               type="text"
                                                                               className="ant-input"
                                                                               defaultValue={data?.product_name}
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
                                                                       title="Currency"
                                                                       className="ant-form-item-required"
                                                                   >
                                                                       <font
                                                                           style={{ verticalAlign: "inherit" }}
                                                                       >
                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >
                                                                               Currency
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
                                                                                   aria-controls="e0547bb4-2e1e-4455-accd-8fab85bda6b1"
                                                                                   className="ant-select-selection ant-select-selection--single"
                                                                               >
                                                                                   <div className="ant-select-selection__rendered">
                                                                                       <div
                                                                                           unselectable="on"
                                                                                           className="ant-select-selection__placeholder"
                                                                                           style={{
                                                                                               display: "none",
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
                                                                                                   Please select currency
                                                                                               </font>
                                                                                           </font>
                                                                                       </div>
                                                                                       <div
                                                                                           title
                                                                                           className="ant-select-selection-selected-value"
                                                                                           style={{
                                                                                               display: "block",
                                                                                               opacity: 1,
                                                                                           }}
                                                                                       >
                                                                                           <span
                                                                                               data-v-17b4e467
                                                                                               title="DOT"
                                                                                               style={{
                                                                                                   display: "inline-block",
                                                                                                   width: "100%",
                                                                                               }}
                                                                                           >
                                                                                               <font
                                                                                                   style={{
                                                                                                       verticalAlign: "inherit",
                                                                                                   }}
                                                                                               >
                                                                                                   <font
                                                                                                       style={{
                                                                                                           verticalAlign:
                                                                                                               "inherit",
                                                                                                       }}
                                                                                                   >
                                                                                                  {data?.currency}
                                                                                                   </font>
                                                                                               </font>
                                                                                           </span>
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
                                                                       title="Delivery time (seconds)"
                                                                       className="ant-form-item-required"
                                                                   >
                                                                       <font
                                                                           style={{ verticalAlign: "inherit" }}
                                                                       >
                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >
                                                                               Delivery time (seconds)ss
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
                                                                                       placeholder={data?.deliveryTime}
                                                                                       autoComplete="off"
                                                                                       min={-9007199254740991}
                                                                                       step={1}
                                                                                       className="ant-input-number-input"
                                                                                       aria-valuenow={60}
                                                                                       defaultValue={data?.deliveryTime}
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
                                                                       title="odds"
                                                                       className="ant-form-item-required"
                                                                   >
                                                                       <font
                                                                           style={{ verticalAlign: "inherit" }}
                                                                       >
                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >
                                                                               odds
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
                                                                                       placeholder="Please enter odds"
                                                                                       autoComplete="off"
                                                                                       min={-9007199254740991}
                                                                                       step={1}
                                                                                       className="ant-input-number-input"
                                                                                       aria-valuenow="0.25"
                                                                                       defaultValue={data?.odds}
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
                                                                       title="maximum amount"
                                                                       className="ant-form-item-required"
                                                                   >
                                                                       <font
                                                                           style={{ verticalAlign: "inherit" }}
                                                                       >
                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >
                                                                               maximum amount
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
                                                                                       placeholder="Please enter the maximum amount"
                                                                                       autoComplete="off"
                                                                                       min={-9007199254740991}
                                                                                       step={1}
                                                                                       className="ant-input-number-input"
                                                                                       aria-valuenow={100000}
                                                                                       defaultValue={data?.maximum_amount}
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
                                                                       title="minimum amount"
                                                                       className="ant-form-item-required"
                                                                   >
                                                                       <font
                                                                           style={{ verticalAlign: "inherit" }}
                                                                       >
                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >
                                                                               minimum amount
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
                                                                                       placeholder="Please enter a minimum amount"
                                                                                       autoComplete="off"
                                                                                       min={-9007199254740991}
                                                                                       step={1}
                                                                                       className="ant-input-number-input"
                                                                                       aria-valuenow={100}
                                                                                       defaultValue={data?.minimum_amount}
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
                                                                   <label title="Remark" className>
                                                                       <font
                                                                           style={{ verticalAlign: "inherit" }}
                                                                       >
                                                                           <font
                                                                               style={{ verticalAlign: "inherit" }}
                                                                           >
                                                                               Remark
                                                                           </font>
                                                                       </font>
                                                                   </label>
                                                               </div>
                                                               <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                   <div className="ant-form-item-control">
                                                                       <span className="ant-form-item-children">
                                                                           <textarea
                                                                               placeholder="Please enter a note"
                                                                               className="ant-input"
                                                                               rows={4}
                                                                               defaultValue={data?.remark}
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
                                   <button
                                       type="button"
                                       onClick={() => setshowDetails(false)}
                                       className="ant-btn"
                                   >
                                       <span>
                                           <font style={{ verticalAlign: "inherit" }}>
                                               <font style={{ verticalAlign: "inherit" }}>
                                                   closure
                                               </font>
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

export default EditContractProduct