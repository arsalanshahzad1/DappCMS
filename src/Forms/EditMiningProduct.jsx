import React from 'react'
import { useState,useEffect } from 'react'
import apis from '../Services';
import { toast } from 'react-hot-toast';

const EditMiningProduct = ({data,index,miningProduct,getMiningProductProduct}) => {
    const [showCurrency, setshowCurrency] = useState(false)
    const [OpenDropDown, setOpenDropDown] = useState(false);
    const [showDetails, setshowDetails] = useState(false);
    const [showConfirmation, setshowConfirmation] = useState(false)
    const [showStatus, setshowStatus] = useState(false)

    const [addMiningProduct, setMiningProduct] = useState({
        product_name : data?.product_name,
        unit_price : data?.unit_price,
        product_life : data?.product_life,
        minimum_amount : data?.minimum_amount,
        maximum_amount : data?.maximum_amount,
        product_status : data?.product_status,
        product_to_sort : data?.product_to_sort,
        maximum_output: data?.maximum_output,
        minimum_output: data?.minimum_output,
        computing_power: data?.computing_power,
        power: data?.power
    })

       // Event handler to update the state on input change
   const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMiningProduct((prevState) => ({
        ...prevState,
        [name]: value, // Update the corresponding property based on the input name
    }));
};

const handleInputChange2 = (name,value) => {
    setMiningProduct((prevState) => ({
        ...prevState,
        [name]: value, // Update the corresponding property based on the input name
    }));
};


const UpdateMiningProducts = async (id) => {

    
    if(addMiningProduct?.minimum_amount > addMiningProduct?.maximum_amount){
        toast.error("minimum amount must be less than maximum amount");
        return
       }
    else if(addMiningProduct?.minimum_output > addMiningProduct?.maximum_output){
        toast.error("minimum output must be less than maximum output");
        return
       }
 
         const resut = await apis.UpdateMiningProduct(id,{
          "product_name" : addMiningProduct.product_name,
          "product_life":addMiningProduct.product_life,
          "product_to_sort":addMiningProduct.product_to_sort ,
          "product_status":addMiningProduct.product_status,
          "unit_price":addMiningProduct.unit_price,
          "maximum_amount":addMiningProduct.maximum_amount,
          "minimum_amount":addMiningProduct.minimum_amount,
          "maximum_output":addMiningProduct.maximum_output,
          "minimum_output":addMiningProduct.minimum_output,
          "computing_power":addMiningProduct.computing_power,
          "power":addMiningProduct.power
         })
     
         toast.success(resut.data?.message,{ id: 1 });
         setMiningProduct("")
         setshowStatus(false)
         getMiningProductProduct()
         
 }
 
 useEffect(()=>{
 },[miningProduct])

return (
    <>
    <div>
           <tr
               className="ant-table-row ant-table-row-level-0"
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
                   <span data-v-19a4ac8a>
                       <a data-v-19a4ac8a>
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
                           data-v-19a4ac8a
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

                       <a
                           onMouseEnter={() => setOpenDropDown(true)}
                           onMouseLeave={() => setOpenDropDown(false)}
                           data-v-19a4ac8a
                           className="ant-dropdown-link ant-dropdown-trigger"
                       >
                           <font style={{ verticalAlign: "inherit" }}>
                               <font style={{ verticalAlign: "inherit" }}>More</font>
                           </font>
                           <i
                               data-v-19a4ac8a
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
                           <div
                            //    className="ant-popover ant-popover-placement-top"
                            //    style={{
                            //        position: "fixed",
                            //        left: "90%",
                            //        top: "48%",
                            //        zIndex: "9999",
                            //        transformOrigin: "50% 103px",
                            //        display: `${OpenDropDown ? "flex" : "none"}`,
                            //    }}
                               className="ant-dropdown ant-dropdown-placement-bottomLeft"
                               style={{
                                   left: "60px",
                                   top: "35px",
                                   display: `${OpenDropDown ? "flex" : "none"}`,
                                   position: "absolute",
                               }}
                           >
                               <ul
                                   data-v-19a4ac8a
                                   role="menu"
                                   tabIndex={0}
                                   className="ant-dropdown-menu ant-dropdown-menu-vertical ant-dropdown-menu-root ant-dropdown-menu-light ant-dropdown-content"
                               >
                                   <li
                                       data-v-19a4ac8a
                                       role="menuitem"
                                       className="ant-dropdown-menu-item"
                                       onClick={() => setshowDetails(true)}
                                   >
                                       <a data-v-19a4ac8a>
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
                                       data-v-19a4ac8a
                                       role="menuitem"
                                       className="ant-dropdown-menu-item"
                                       onClick={() => setshowConfirmation(true)}
                                   >
                                       <a data-v-19a4ac8a className>
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
                           </div>
                       </a>
                   </span>
               </td>
           </tr>
       </div>
   
       {showStatus && (
           <>
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
                        style={{ width: "800px", transformOrigin: "-8px 117px" }}
                    >
                        <div
                            tabIndex={0}
                            aria-hidden="true"
                            style={{ width: "0px", height: "0px", overflow: "hidden" }}
                        />
                        <div className="ant-modal-content">
                            <button onClick={() => setshowStatus(false)}
                                type="button"
                                aria-label="Close"
                                className="ant-modal-close"
                                fdprocessedid="xjvee"
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
                                                <font style={{ verticalAlign: "inherit" }}>Add</font>
                                            </font>
                                        </div>
                                        <div className="right ant-col">
                                            <button
                                                type="button"
                                                className="ant-modal-close ant-modal-close-x ant-btn ant-btn-link ant-btn-icon-only ant-btn-background-ghost"
                                                fdprocessedid="d641e"
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
                                                                            <input
                                                                                placeholder="please input the product name"
                                                                                type="text"
                                                                                className="ant-input"
                                                                                fdprocessedid="utkn1w"
                                                                                name="product_name"
                                                                                value={addMiningProduct?.product_name
                                                                                }
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
                                                                        title="product life"
                                                                        className="ant-form-item-required"
                                                                    >
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                product life
                                                                            </font>
                                                                        </font>
                                                                    </label>
                                                                </div>
                                                                <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                    <div className="ant-form-item-control">
                                                                        <span className="ant-form-item-children">
                                                                            <div
                                                                                className="ant-input-number"
                                                                                type="list"
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
                                                                                        type="number"
                                                                                        placeholder="Please select a product cycle"
                                                                                        autoComplete="off"
                                                                                        min={-9007199254740991}
                                                                                        step={1}
                                                                                        className="ant-input-number-input"
                                                                                        fdprocessedid="zsobul"
                                                                                        name="product_life"
                                                                                        value={addMiningProduct?.product_life
                                                                                        }
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
                                                                        title="to sort"
                                                                        className="ant-form-item-required"
                                                                    >
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                to sort
                                                                            </font>
                                                                        </font>
                                                                    </label>
                                                                </div>
                                                                <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                    <div className="ant-form-item-control">
                                                                        <span className="ant-form-item-children">
                                                                            <div
                                                                                className="ant-input-number"
                                                                                type="list"
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
                                                                                        type="number"
                                                                                        placeholder="Please select sort"
                                                                                        autoComplete="off"
                                                                                        min={-9007199254740991}
                                                                                        step={1}
                                                                                        className="ant-input-number-input"
                                                                                        fdprocessedid="b3vyo6"
                                                                                        name="product_to_sort"
                                                                                        value={addMiningProduct?.product_to_sort
                                                                                        }
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
                                                                                title="product status"
                                                                                className="ant-form-item-required"
                                                                            >
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        product status
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
                                                                                        onClick={() =>
                                                                                            setshowCurrency(!showCurrency)
                                                                                        }
                                                                                    >
                                                                                        <div
                                                                                            role="combobox"
                                                                                            aria-autocomplete="list"
                                                                                            aria-haspopup="true"
                                                                                            aria-controls="55c9fdb7-9025-4afe-c57a-5a20b62add5f"
                                                                                            className="ant-select-selection ant-select-selection--single"
                                                                                        >
                                                                                            <div className="ant-select-selection__rendered">
                                                                                                <div
                                                                                                    className={
                                                                                                        "ant-select-selection__placeholder1"
                                                                                                    }
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
                                                                                                                verticalAlign:
                                                                                                                    "inherit",
                                                                                                            }}
                                                                                                        >
                                                                                                            {addMiningProduct?.product_status
                                                                                                                ? addMiningProduct?.product_status
                                                                                                                : "Please Select Status"}
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
                                                                                        {showCurrency && ( ///aliant-select ant-select-enabled
                                                                                            <div
                                                                                                className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft"
                                                                                                style={{
                                                                                                    width: "100%",
                                                                                                    left: "0px",
                                                                                                    top: "30px",
                                                                                                    display: "flex",
                                                                                                }}
                                                                                            >
                                                                                                <div
                                                                                                    id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51"
                                                                                                    tabIndex={-1}
                                                                                                    className="ant-select-dropdown-content"
                                                                                                    style={{
                                                                                                        overflow: "auto",
                                                                                                        transform:
                                                                                                            "translateZ(0px)",
                                                                                                        width: "100%",
                                                                                                    }}
                                                                                                >
                                                                                                    <ul
                                                                                                        role="listbox"
                                                                                                        onClick={() => {
                                                                                                            setshowCurrency(
                                                                                                                !showCurrency
                                                                                                            );
                                                                                                        }}
                                                                                                        tabIndex={0}
                                                                                                        className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root"
                                                                                                    >
                                                                                                        <li
                                                                                                            name="product_name"
                                                                                                            role="option"
                                                                                                            className="ant-select-dropdown-menu-item"
                                                                                                            unselectable="on"
                                                                                                            style={{
                                                                                                                userSelect: "none",
                                                                                                            }}
                                                                                                        >
                                                                                                            <font
                                                                                                                style={{
                                                                                                                    verticalAlign:
                                                                                                                        "inherit",
                                                                                                                }}
                                                                                                            >
                                                                                                                <font
                                                                                                                    style={{
                                                                                                                        verticalAlign:
                                                                                                                            "inherit",
                                                                                                                    }}
                                                                                                                >
                                                                                                                    Product Status
                                                                                                                </font>
                                                                                                            </font>
                                                                                                        </li>

                                                                                                        <li
                                                                                                            onClick={() => {
                                                                                                                handleInputChange2(
                                                                                                                    "product_status",
                                                                                                                    "not_available"
                                                                                                                );
                                                                                                            }}
                                                                                                            role="option"
                                                                                                            className="ant-select-dropdown-menu-item"
                                                                                                            unselectable="on"
                                                                                                            style={{
                                                                                                                userSelect: "none",
                                                                                                            }}
                                                                                                        >
                                                                                                            <span
                                                                                                                data-v-17b4e467
                                                                                                                title="BTC"
                                                                                                                style={{
                                                                                                                    display:
                                                                                                                        "inline-block",
                                                                                                                    width: "100%",
                                                                                                                }}
                                                                                                            >
                                                                                                                <font
                                                                                                                    style={{
                                                                                                                        verticalAlign:
                                                                                                                            "inherit",
                                                                                                                    }}
                                                                                                                >
                                                                                                                    <font
                                                                                                                        style={{
                                                                                                                            verticalAlign:
                                                                                                                                "inherit",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        Not Available
                                                                                                                    </font>
                                                                                                                </font>
                                                                                                            </span>
                                                                                                        </li>

                                                                                                        <li
                                                                                                            onClick={() => {
                                                                                                                handleInputChange2(
                                                                                                                    "product_status",
                                                                                                                    "added"
                                                                                                                );
                                                                                                            }}
                                                                                                            role="option"
                                                                                                            className="ant-select-dropdown-menu-item"
                                                                                                            unselectable="on"
                                                                                                            style={{
                                                                                                                userSelect: "none",
                                                                                                            }}
                                                                                                        >
                                                                                                            <span
                                                                                                                data-v-17b4e467
                                                                                                                title="USDT"
                                                                                                                style={{
                                                                                                                    display:
                                                                                                                        "inline-block",
                                                                                                                    width: "100%",
                                                                                                                }}
                                                                                                            >
                                                                                                                <font
                                                                                                                    style={{
                                                                                                                        verticalAlign:
                                                                                                                            "inherit",
                                                                                                                    }}
                                                                                                                >
                                                                                                                    <font
                                                                                                                        style={{
                                                                                                                            verticalAlign:
                                                                                                                                "inherit",
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        It has been added to
                                                                                                                    </font>
                                                                                                                </font>
                                                                                                            </span>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        )}
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                        {/**/}
                                                        <div className="ant-col ant-col-24">
                                                            <div className="ant-row ant-form-item">
                                                                <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                    <label
                                                                        title="unit price"
                                                                        className="ant-form-item-required"
                                                                    >
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                unit price
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
                                                                                        placeholder="unit price"
                                                                                        autoComplete="off"
                                                                                        min={-9007199254740991}
                                                                                        step={1}
                                                                                        type='number'
                                                                                        className="ant-input-number-input"
                                                                                        fdprocessedid="t2s22c"
                                                                                        name="unit_price"
                                                                                        value={addMiningProduct?.unit_price
                                                                                        }
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
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
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
                                                                                        placeholder="Minimum Purchase Quantity"
                                                                                        autoComplete="off"
                                                                                        min={-9007199254740991}
                                                                                        step={1}
                                                                                        type='number'
                                                                                        className="ant-input-number-input"
                                                                                        fdprocessedid="kf67ij"
                                                                                        name="minimum_amount"
                                                                                        value={addMiningProduct?.minimum_amount
                                                                                        }
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
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
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
                                                                                        placeholder="Maximum Purchase Quantity"
                                                                                        autoComplete="off"
                                                                                        min={-9007199254740991}
                                                                                        step={1}
                                                                                        type='number'
                                                                                        className="ant-input-number-input"
                                                                                        fdprocessedid="bf0ui"
                                                                                        name="maximum_amount"
                                                                                        value={addMiningProduct?.maximum_amount
                                                                                        }
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
                                                                        title="maximum output"
                                                                        className="ant-form-item-required"
                                                                    >
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                maximum output
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
                                                                                        placeholder="maximum output"
                                                                                        autoComplete="off"
                                                                                        min={-9007199254740991}
                                                                                        step={1}
                                                                                        type='number'
                                                                                        className="ant-input-number-input"
                                                                                        fdprocessedid="dzr3o"
                                                                                        name="maximum_output"
                                                                                        value={addMiningProduct?.maximum_output
                                                                                        }
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
                                                                        title="minimum output"
                                                                        className="ant-form-item-required"
                                                                    >
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                minimum output
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
                                                                                        placeholder="minimum output"
                                                                                        autoComplete="off"
                                                                                        min={-9007199254740991}
                                                                                        step={1}
                                                                                        type='number'
                                                                                        className="ant-input-number-input"
                                                                                        fdprocessedid="76von"
                                                                                        name="minimum_output"
                                                                                        value={addMiningProduct?.minimum_output
                                                                                        }
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
                                                                        title="computing power"
                                                                        className="ant-form-item-required"
                                                                    >
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                computing power
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
                                                                                        placeholder="computing power"
                                                                                        autoComplete="off"
                                                                                        min={-9007199254740991}
                                                                                        step={1}
                                                                                        type='number'
                                                                                        className="ant-input-number-input"
                                                                                        fdprocessedid="o8geqb"
                                                                                        name="computing_power"
                                                                                        value={addMiningProduct?.computing_power
                                                                                        }
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
                                                                        title="power"
                                                                        className="ant-form-item-required"
                                                                    >
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                power
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
                                                                                        placeholder="power"
                                                                                        autoComplete="off"
                                                                                        min={-9007199254740991}
                                                                                        step={1}
                                                                                        type='number'
                                                                                        className="ant-input-number-input"
                                                                                        fdprocessedid="2xt208"
                                                                                        name="power"
                                                                                        value={addMiningProduct?.power}
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
                                    <button onClick={() => setshowStatus(false)} type="button" className="ant-btn" fdprocessedid="jb5jw">
                                        <span>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>closure</font>
                                            </font>
                                        </span>
                                    </button>
                                    <button onClick={()=>UpdateMiningProducts(data?._id)}
                                        type="button"
                                        className="ant-btn ant-btn-primary"
                                        fdprocessedid="lvd3fa"
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
           </>
       )}

       {showDetails && (
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
                style={{ width: "800px", transformOrigin: "-8px 117px" }}
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
                        fdprocessedid="xjvee"
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
                                        <font style={{ verticalAlign: "inherit" }}>Add</font>
                                    </font>
                                </div>
                                <div className="right ant-col">
                                    <button
                                        type="button"
                                        className="ant-modal-close ant-modal-close-x ant-btn ant-btn-link ant-btn-icon-only ant-btn-background-ghost"
                                        fdprocessedid="d641e"
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
                                                                    <input
                                                                        placeholder="please input the product name"
                                                                        type="text"
                                                                        className="ant-input"
                                                                        fdprocessedid="utkn1w"
                                                                        name="product_name"
                                                                        value={addMiningProduct?.product_name
                                                                        }
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
                                                                title="product life"
                                                                className="ant-form-item-required"
                                                            >
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        product life
                                                                    </font>
                                                                </font>
                                                            </label>
                                                        </div>
                                                        <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                            <div className="ant-form-item-control">
                                                                <span className="ant-form-item-children">
                                                                    <div
                                                                        className="ant-input-number"
                                                                        type="list"
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
                                                                                type="number"
                                                                                placeholder="Please select a product cycle"
                                                                                autoComplete="off"
                                                                                min={-9007199254740991}
                                                                                step={1}
                                                                                className="ant-input-number-input"
                                                                                fdprocessedid="zsobul"
                                                                                name="product_life"
                                                                                value={addMiningProduct?.product_life
                                                                                }
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
                                                                title="to sort"
                                                                className="ant-form-item-required"
                                                            >
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        to sort
                                                                    </font>
                                                                </font>
                                                            </label>
                                                        </div>
                                                        <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                            <div className="ant-form-item-control">
                                                                <span className="ant-form-item-children">
                                                                    <div
                                                                        className="ant-input-number"
                                                                        type="list"
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
                                                                                type="number"
                                                                                placeholder="Please select sort"
                                                                                autoComplete="off"
                                                                                min={-9007199254740991}
                                                                                step={1}
                                                                                className="ant-input-number-input"
                                                                                fdprocessedid="b3vyo6"
                                                                                name="product_to_sort"
                                                                                value={addMiningProduct?.product_to_sort
                                                                                }
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
                                                                        title="product status"
                                                                        className="ant-form-item-required"
                                                                    >
                                                                        <font
                                                                            style={{ verticalAlign: "inherit" }}
                                                                        >
                                                                            <font
                                                                                style={{ verticalAlign: "inherit" }}
                                                                            >
                                                                                product status
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
                                                                                onClick={() =>
                                                                                    setshowCurrency(!showCurrency)
                                                                                }
                                                                            >
                                                                                <div
                                                                                    role="combobox"
                                                                                    aria-autocomplete="list"
                                                                                    aria-haspopup="true"
                                                                                    aria-controls="55c9fdb7-9025-4afe-c57a-5a20b62add5f"
                                                                                    className="ant-select-selection ant-select-selection--single"
                                                                                >
                                                                                    <div className="ant-select-selection__rendered">
                                                                                        <div
                                                                                            className={
                                                                                                "ant-select-selection__placeholder1"
                                                                                            }
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
                                                                                                        verticalAlign:
                                                                                                            "inherit",
                                                                                                    }}
                                                                                                >
                                                                                                    {addMiningProduct?.product_status
                                                                                                        ? addMiningProduct?.product_status
                                                                                                        : "Please Select Status"}
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
                                                                                {showCurrency && ( ///aliant-select ant-select-enabled
                                                                                    <div
                                                                                        className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft"
                                                                                        style={{
                                                                                            width: "100%",
                                                                                            left: "0px",
                                                                                            top: "30px",
                                                                                            display: "flex",
                                                                                        }}
                                                                                    >
                                                                                        <div
                                                                                            id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51"
                                                                                            tabIndex={-1}
                                                                                            className="ant-select-dropdown-content"
                                                                                            style={{
                                                                                                overflow: "auto",
                                                                                                transform:
                                                                                                    "translateZ(0px)",
                                                                                                width: "100%",
                                                                                            }}
                                                                                        >
                                                                                            <ul
                                                                                                role="listbox"
                                                                                                onClick={() => {
                                                                                                    setshowCurrency(
                                                                                                        !showCurrency
                                                                                                    );
                                                                                                }}
                                                                                                tabIndex={0}
                                                                                                className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root"
                                                                                            >
                                                                                                <li
                                                                                                    name="product_name"
                                                                                                    role="option"
                                                                                                    className="ant-select-dropdown-menu-item"
                                                                                                    unselectable="on"
                                                                                                    style={{
                                                                                                        userSelect: "none",
                                                                                                    }}
                                                                                                >
                                                                                                    <font
                                                                                                        style={{
                                                                                                            verticalAlign:
                                                                                                                "inherit",
                                                                                                        }}
                                                                                                    >
                                                                                                        <font
                                                                                                            style={{
                                                                                                                verticalAlign:
                                                                                                                    "inherit",
                                                                                                            }}
                                                                                                        >
                                                                                                            Product Status
                                                                                                        </font>
                                                                                                    </font>
                                                                                                </li>

                                                                                                <li
                                                                                                    onClick={() => {
                                                                                                        handleInputChange2(
                                                                                                            "product_status",
                                                                                                            "not_available"
                                                                                                        );
                                                                                                    }}
                                                                                                    role="option"
                                                                                                    className="ant-select-dropdown-menu-item"
                                                                                                    unselectable="on"
                                                                                                    style={{
                                                                                                        userSelect: "none",
                                                                                                    }}
                                                                                                >
                                                                                                    <span
                                                                                                        data-v-17b4e467
                                                                                                        title="BTC"
                                                                                                        style={{
                                                                                                            display:
                                                                                                                "inline-block",
                                                                                                            width: "100%",
                                                                                                        }}
                                                                                                    >
                                                                                                        <font
                                                                                                            style={{
                                                                                                                verticalAlign:
                                                                                                                    "inherit",
                                                                                                            }}
                                                                                                        >
                                                                                                            <font
                                                                                                                style={{
                                                                                                                    verticalAlign:
                                                                                                                        "inherit",
                                                                                                                }}
                                                                                                            >
                                                                                                                Not Available
                                                                                                            </font>
                                                                                                        </font>
                                                                                                    </span>
                                                                                                </li>

                                                                                                <li
                                                                                                    onClick={() => {
                                                                                                        handleInputChange2(
                                                                                                            "product_status",
                                                                                                            "added"
                                                                                                        );
                                                                                                    }}
                                                                                                    role="option"
                                                                                                    className="ant-select-dropdown-menu-item"
                                                                                                    unselectable="on"
                                                                                                    style={{
                                                                                                        userSelect: "none",
                                                                                                    }}
                                                                                                >
                                                                                                    <span
                                                                                                        data-v-17b4e467
                                                                                                        title="USDT"
                                                                                                        style={{
                                                                                                            display:
                                                                                                                "inline-block",
                                                                                                            width: "100%",
                                                                                                        }}
                                                                                                    >
                                                                                                        <font
                                                                                                            style={{
                                                                                                                verticalAlign:
                                                                                                                    "inherit",
                                                                                                            }}
                                                                                                        >
                                                                                                            <font
                                                                                                                style={{
                                                                                                                    verticalAlign:
                                                                                                                        "inherit",
                                                                                                                }}
                                                                                                            >
                                                                                                                It has been added to
                                                                                                            </font>
                                                                                                        </font>
                                                                                                    </span>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                {/**/}
                                                <div className="ant-col ant-col-24">
                                                    <div className="ant-row ant-form-item">
                                                        <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                            <label
                                                                title="unit price"
                                                                className="ant-form-item-required"
                                                            >
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        unit price
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
                                                                                placeholder="unit price"
                                                                                autoComplete="off"
                                                                                min={-9007199254740991}
                                                                                step={1}
                                                                                type='number'
                                                                                className="ant-input-number-input"
                                                                                fdprocessedid="t2s22c"
                                                                                name="unit_price"
                                                                                value={addMiningProduct?.unit_price
                                                                                }
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
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
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
                                                                                placeholder="Minimum Purchase Quantity"
                                                                                autoComplete="off"
                                                                                min={-9007199254740991}
                                                                                step={1}
                                                                                type='number'
                                                                                className="ant-input-number-input"
                                                                                fdprocessedid="kf67ij"
                                                                                name="minimum_amount"
                                                                                value={addMiningProduct?.minimum_amount
                                                                                }
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
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
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
                                                                                placeholder="Maximum Purchase Quantity"
                                                                                autoComplete="off"
                                                                                min={-9007199254740991}
                                                                                step={1}
                                                                                type='number'
                                                                                className="ant-input-number-input"
                                                                                fdprocessedid="bf0ui"
                                                                                name="maximum_amount"
                                                                                value={addMiningProduct?.maximum_amount
                                                                                }
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
                                                                title="maximum output"
                                                                className="ant-form-item-required"
                                                            >
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        maximum output
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
                                                                                placeholder="maximum output"
                                                                                autoComplete="off"
                                                                                min={-9007199254740991}
                                                                                step={1}
                                                                                type='number'
                                                                                className="ant-input-number-input"
                                                                                fdprocessedid="dzr3o"
                                                                                name="maximum_output"
                                                                                value={addMiningProduct?.maximum_output
                                                                                }
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
                                                                title="minimum output"
                                                                className="ant-form-item-required"
                                                            >
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        minimum output
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
                                                                                placeholder="minimum output"
                                                                                autoComplete="off"
                                                                                min={-9007199254740991}
                                                                                step={1}
                                                                                type='number'
                                                                                className="ant-input-number-input"
                                                                                fdprocessedid="76von"
                                                                                name="minimum_output"
                                                                                value={addMiningProduct?.minimum_output
                                                                                }
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
                                                                title="computing power"
                                                                className="ant-form-item-required"
                                                            >
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        computing power
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
                                                                                placeholder="computing power"
                                                                                autoComplete="off"
                                                                                min={-9007199254740991}
                                                                                step={1}
                                                                                type='number'
                                                                                className="ant-input-number-input"
                                                                                fdprocessedid="o8geqb"
                                                                                name="computing_power"
                                                                                value={addMiningProduct?.computing_power
                                                                                }
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
                                                                title="power"
                                                                className="ant-form-item-required"
                                                            >
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        power
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
                                                                                placeholder="power"
                                                                                autoComplete="off"
                                                                                min={-9007199254740991}
                                                                                step={1}
                                                                                type='number'
                                                                                className="ant-input-number-input"
                                                                                fdprocessedid="2xt208"
                                                                                name="power"
                                                                                defaultValue={addMiningProduct?.power}
                                                                                // onChange={handleInputChange}
                                                                            />
                                                                        </div>
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
                            <button onClick={() => setshowDetails(false)} type="button" className="ant-btn" fdprocessedid="jb5jw">
                                <span>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>closure</font>
                                    </font>
                                </span>
                            </button>
                            {/* <button onClick={()=>UpdateMiningProducts(data?._id)}
                                type="button"
                                className="ant-btn ant-btn-primary"
                                fdprocessedid="lvd3fa"
                            >
                                <span>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Sure</font>
                                    </font>
                                </span>
                            </button> */}
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
       )}
   </>
  )
}

export default EditMiningProduct