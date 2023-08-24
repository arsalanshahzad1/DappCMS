import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context/MyContext";
import EditMiningProduct from "../Forms/EditMiningProduct";
import { toast } from "react-hot-toast";
import apis from "../Services";

function MiningMachineProducts() {
    const { miningProduct, getMiningProductProduct } = useContext(MyContext)
    const [addMiningShow, setAddMiningShow] = useState(false)
    const [showCurrency, setshowCurrency] = useState(false);
    const [showStatus, setShowStatus]=useState(false)

    const [addMiningProduct, setMiningProduct] = useState({
        product_name: "",
        product_life: "",
        product_to_sort: "",
        product_status: "",
        unit_price: "",
        maximum_amount: "",
        minimum_amount: "",
        maximum_output: "",
        minimum_output: "",
        computing_power: "",
        power: ""
    })

    const [search, setSearch] = useState({
        product_name: "",
        product_status: ""
    })

    // Event handler to update the state on input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMiningProduct((prevState) => ({
            ...prevState,
            [name]: value, // Update the corresponding property based on the input name
        }));
    };

    const handleInputChange2 = (name, value) => {
        // const { name, value } = event.target;
        setMiningProduct((prevState) => ({
            ...prevState,
            [name]: value, // Update the corresponding property based on the input name
        }));
    };


    const CreateSecondContractProduct = async () => {

        if (!addMiningProduct.product_name  == "" &&
            !addMiningProduct.product_life == "" &&
            !addMiningProduct.product_to_sort == "" &&
            !addMiningProduct.product_status == "" &&
            !addMiningProduct.unit_price == "" &&
            !addMiningProduct.maximum_amount == "" &&
            !addMiningProduct.minimum_amount == "" &&
            !addMiningProduct.maximum_output == "" &&
            !addMiningProduct.minimum_output == "" &&
            !addMiningProduct.computing_power == "" &&
            !addMiningProduct.power == ""
            
        ) {

            if(addMiningProduct?.minimum_amount > addMiningProduct?.maximum_amount){
                toast.error("minimum amount must be less than maximum amount");
                return
            }
            else if (addMiningProduct?.minimum_output > addMiningProduct?.maximum_output){
                    toast.error("minimum output must be less than maximum output");
                    return
            }

            const resut = await apis.createMiningProduct({
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
            toast.success(resut.data.message, { id: 1 });
            setAddMiningShow(false);
            setMiningProduct("")
            getMiningProductProduct();
        } else {
            toast.error("Please input data all required fields", { id: 1 });
        }
    }

    const handleInputChange3 = (event) => {
        const { name, value } = event.target;
        setSearch((prevState) => ({
            ...prevState,
            [name]: value, // Update the corresponding property based on the input name
        }));
    };

    const handleInputChange4 = (name, value) => {
        setSearch((prevState) => ({
            ...prevState,
            [name]: value, // Update the corresponding property based on the input name
        }));
    };

    useEffect(()=>{
    getMiningProductProduct();
    },[])





    return (
        <div>
            <div data-v-1bf8d48a className="ant-card">
                <div className="ant-card-body">

                <div data-v-140419ff className="table-page-search-wrapper">
                        <form data-v-140419ff className="ant-form ant-form-inline">
                            <div
                                data-v-140419ff
                                className="ant-row"
                                style={{ marginLeft: "-12px", marginRight: "-12px" }}
                            >
                                <div
                                    data-v-140419ff
                                    className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-7 ant-col-xl-6"
                                    style={{
                                        paddingLeft: "12px",
                                        paddingRight: "12px",
                                        width: "28%",
                                    }}
                                >
                                    <div data-v-140419ff className="ant-row ant-form-item">
                                        <div
                                            className="ant-col ant-form-item-label"
                                            style={{ width: "100%" }}
                                        >
                                            <label title="product name" className>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        product name
                                                    </font>
                                                </font>
                                            </label>
                                        </div>
                                        <div
                                            className="ant-col ant-form-item-control-wrapper"
                                            style={{ width: "320px" }}
                                        >
                                            <div className="ant-form-item-control">
                                                <span className="ant-form-item-children">
                                                    <input
                                                        data-v-140419ff
                                                        placeholder="please input the product name"
                                                        type="text"
                                                        className="ant-input"
                                                        name="product_name"
                                                        Value={search?.product_name}
                                                        onChange={handleInputChange3}
                                                    />
                                                </span>
                                                {/**/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-v-140419ff
                                    className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-7 ant-col-xl-6"
                                    style={{
                                        paddingLeft: "12px",
                                        paddingRight: "12px",
                                        width: "28%",
                                    }}
                                >
                                    <div data-v-140419ff className="ant-row ant-form-item">
                                        <div
                                            className="ant-col ant-form-item-label"
                                            style={{ width: "100%" }}
                                        >
                                            <label title="product status" className>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        product status
                                                    </font>
                                                </font>
                                            </label>
                                        </div>
                                        <div
                                            className="ant-col ant-form-item-control-wrapper"
                                            style={{ width: "320px" }}
                                        >
                                            <div className="ant-form-item-control">
                                                <span className="ant-form-item-children">
                                                    <div
                                                        data-v-17b4e467
                                                        data-v-140419ff
                                                        tabIndex={0}
                                                        className="ant-select ant-select-enabled"
                                                    >
                                                        <div
                                                            role="combobox"
                                                            aria-autocomplete="list"
                                                            aria-haspopup="true"
                                                            aria-controls="740b3652-5f6e-4792-c950-aa8c7934d778"
                                                            className="ant-select-selection ant-select-selection--single"
                                                        >
                                                            <div className="ant-select-selection__rendered">
                                                                <div  onClick={() => {
                                                                    setShowStatus(
                                                                           !showStatus
                                                                       );
                                                                   }}
                                                                    unselectable="on"
                                                                    className={search?.product_status ? "ant-select-selection__placeholder1" : "ant-select-selection__placeholder"}
                                                                    style={{
                                                                        display: "block",
                                                                        userSelect: "none",
                                                                    }}
                                                                >
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            {search?.product_status ? search?.product_status : "Please select a product status"}
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
                                                    {showStatus && (
                                                        
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
                                                                    setShowStatus(
                                                                           !showStatus
                                                                       );
                                                                   }}
                                                                   tabIndex={0}
                                                                   className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root"
                                                               >
                                              
                                                                   <li
                                                                       onClick={() => {
                                                                        handleInputChange4(
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
                                                                        handleInputChange4(
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
                                                                                   added
                                                                               </font>
                                                                           </font>
                                                                       </span>
                                                                   </li>
                                                               </ul>
                                                           </div>
                                                       </div>
                                                
                                                    )
                                                    }
                                                    </div>





                                                </span>
                                                {/**/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-v-140419ff
                                    className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-7 ant-col-xl-6"
                                    style={{ paddingLeft: "12px", paddingRight: "12px" }}
                                >
                                    <span
                                        data-v-140419ff
                                        className="table-page-search-submitButtons"
                                        style={{ float: "left", overflow: "hidden" }}
                                    >
                                        <button
                                            data-v-140419ff
                                            type="button"
                                            className="ant-btn ant-btn-primary"
                                        >
                                            <i
                                                aria-label="icon: search"
                                                className="anticon anticon-search"
                                            >
                                                <svg
                                                    viewBox="64 64 896 896"
                                                    data-icon="search"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    className
                                                >
                                                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                                                </svg>
                                            </i>
                                            <span>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        Inquire
                                                    </font>
                                                </font>
                                            </span>
                                        </button>
                                        <button
                                            data-v-140419ff
                                            type="button"
                                            className="ant-btn ant-btn-primary"
                                            style={{ marginLeft: "8px" }}
                                        >
                                            <i
                                                aria-label="icon: reload"
                                                className="anticon anticon-reload"
                                            >
                                                <svg
                                                    viewBox="64 64 896 896"
                                                    data-icon="reload"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    className
                                                >
                                                    <path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" />
                                                </svg>
                                            </i>
                                            <span>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        reset
                                                    </font>
                                                </font>
                                            </span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </form>
                </div>

                    <div data-v-1bf8d48a className="table-operator">
                        <button onClick={() => setAddMiningShow(true)}
                            data-v-1bf8d48a
                            type="button"
                            className="ant-btn ant-btn-primary"
                        >
                            <i aria-label="icon: plus" className="anticon anticon-plus">
                                <svg
                                    viewBox="64 64 896 896"
                                    data-icon="plus"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    focusable="false"
                                    className
                                >
                                    <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
                                    <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
                                </svg>
                            </i>
                            <span>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>Add</font>
                                </font>
                            </span>
                        </button>
                        {/**/}
                    </div>
                    <div data-v-1bf8d48a>
                        <div
                            data-v-1bf8d48a
                            className="ant-alert ant-alert-info"
                            style={{ marginBottom: "16px" }}
                        >
                            <i
                                data-v-1bf8d48a
                                className="anticon anticon-info-circle ant-alert-icon"
                            />
                            <font style={{ verticalAlign: "inherit" }} />
                            <a data-v-1bf8d48a style={{ fontWeight: 600 }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>0 </font>
                                </font>
                            </a>
                            <font style={{ verticalAlign: "inherit" }}>
                                <a data-v-1bf8d48a style={{ marginLeft: "24px" }}>
                                    <font style={{ verticalAlign: "inherit" }}>items </font>
                                </a>
                                <font style={{ verticalAlign: "inherit" }}></font>
                                <font style={{ verticalAlign: "inherit" }}>
                                    have been selected Clear
                                </font>
                            </font>
                            <a data-v-1bf8d48a style={{ marginLeft: "24px" }}>
                                <font style={{ verticalAlign: "inherit" }} />
                            </a>
                        </div>
                        <div
                            data-v-1bf8d48a
                            className="j-table-force-nowrap ant-table-wrapper"
                        >
                            <div className="ant-spin-nested-loading">
                                <div className="ant-spin-container">
                                    <div className="ant-table ant-table-middle ant-table-bordered ant-table-scroll-position-left">
                                        <div className="ant-table-content">
                                            <div className="ant-table-scroll">
                                                {/**/}
                                                <div
                                                    tabIndex={-1}
                                                    className="ant-table-body"
                                                    style={{ overflowX: "scroll" }}
                                                >
                                                    <table
                                                        className="ant-table-fixed"
                                                        style={{ width: "max-content" }}
                                                    >
                                                        <colgroup>
                                                            <col className="ant-table-selection-col" />
                                                            <col
                                                                style={{ width: "60px", minWidth: "60px" }}
                                                            />
                                                            <col />
                                                            <col />
                                                            <col />
                                                            <col />
                                                            <col />
                                                            <col />
                                                            <col />
                                                            <col />
                                                            <col
                                                                style={{ width: "147px", minWidth: "147px" }}
                                                            />
                                                        </colgroup>
                                                        <thead className="ant-table-thead">
                                                            <tr>
                                                                <th
                                                                    key="selection-column"
                                                                    className="ant-table-selection-column"
                                                                >
                                                                    <span className="ant-table-header-column">
                                                                        <div>
                                                                            <span className="ant-table-column-title">
                                                                                <div className="ant-table-selection">
                                                                                    <label className="ant-checkbox-wrapper">
                                                                                        <span className="ant-checkbox">
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                className="ant-checkbox-input"
                                                                                                defaultValue
                                                                                            />
                                                                                            <span className="ant-checkbox-inner" />
                                                                                        </span>
                                                                                    </label>
                                                                                </div>
                                                                            </span>
                                                                            <span className="ant-table-column-sorter" />
                                                                        </div>
                                                                    </span>
                                                                </th>
                                                                <th
                                                                    key="rowIndex"
                                                                    className="ant-table-align-center ant-table-row-cell-break-word"
                                                                    style={{ textAlign: "center" }}
                                                                >
                                                                    <span className="ant-table-header-column">
                                                                        <div>
                                                                            <span className="ant-table-column-title">
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        #
                                                                                    </font>
                                                                                </font>
                                                                            </span>
                                                                            <span className="ant-table-column-sorter" />
                                                                        </div>
                                                                    </span>
                                                                </th>
                                                                <th
                                                                    key="name"
                                                                    className="ant-table-align-center"
                                                                    style={{ textAlign: "center" }}
                                                                >
                                                                    <span className="ant-table-header-column">
                                                                        <div>
                                                                            <span className="ant-table-column-title">
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        product name
                                                                                    </font>
                                                                                </font>
                                                                            </span>
                                                                            <span className="ant-table-column-sorter" />
                                                                        </div>
                                                                    </span>
                                                                </th>
                                                                <th
                                                                    key="detail.unitPrice"
                                                                    className="ant-table-align-center"
                                                                    style={{ textAlign: "center" }}
                                                                >
                                                                    <span className="ant-table-header-column">
                                                                        <div>
                                                                            <span className="ant-table-column-title">
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        unit price
                                                                                    </font>
                                                                                </font>
                                                                            </span>
                                                                            <span className="ant-table-column-sorter" />
                                                                        </div>
                                                                    </span>
                                                                </th>
                                                                <th
                                                                    key="cycle"
                                                                    className="ant-table-align-center"
                                                                    style={{ textAlign: "center" }}
                                                                >
                                                                    <span className="ant-table-header-column">
                                                                        <div>
                                                                            <span className="ant-table-column-title">
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        cycle
                                                                                    </font>
                                                                                </font>
                                                                            </span>
                                                                            <span className="ant-table-column-sorter" />
                                                                        </div>
                                                                    </span>
                                                                </th>
                                                                <th
                                                                    key="detail.min"
                                                                    className="ant-table-align-center"
                                                                    style={{ textAlign: "center" }}
                                                                >
                                                                    <span className="ant-table-header-column">
                                                                        <div>
                                                                            <span className="ant-table-column-title">
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        minimum amount
                                                                                    </font>
                                                                                </font>
                                                                            </span>
                                                                            <span className="ant-table-column-sorter" />
                                                                        </div>
                                                                    </span>
                                                                </th>
                                                                <th
                                                                    key="detail.max"
                                                                    className="ant-table-align-center"
                                                                    style={{ textAlign: "center" }}
                                                                >
                                                                    <span className="ant-table-header-column">
                                                                        <div>
                                                                            <span className="ant-table-column-title">
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        greatest amount
                                                                                    </font>
                                                                                </font>
                                                                            </span>
                                                                            <span className="ant-table-column-sorter" />
                                                                        </div>
                                                                    </span>
                                                                </th>
                                                                <th
                                                                    key={7}
                                                                    className="ant-table-align-center"
                                                                    style={{ textAlign: "center" }}
                                                                >
                                                                    <span className="ant-table-header-column">
                                                                        <div>
                                                                            <span className="ant-table-column-title">
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        product revenue
                                                                                    </font>
                                                                                </font>
                                                                            </span>
                                                                            <span className="ant-table-column-sorter" />
                                                                        </div>
                                                                    </span>
                                                                </th>
                                                                <th
                                                                    key="status_dictText"
                                                                    className="ant-table-align-center"
                                                                    style={{ textAlign: "center" }}
                                                                >
                                                                    <span className="ant-table-header-column">
                                                                        <div>
                                                                            <span className="ant-table-column-title">
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        product status
                                                                                    </font>
                                                                                </font>
                                                                            </span>
                                                                            <span className="ant-table-column-sorter" />
                                                                        </div>
                                                                    </span>
                                                                </th>
                                                                <th
                                                                    key="sortNo"
                                                                    className="ant-table-align-center"
                                                                    style={{ textAlign: "center" }}
                                                                >
                                                                    <span className="ant-table-header-column">
                                                                        <div>
                                                                            <span className="ant-table-column-title">
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        to sort
                                                                                    </font>
                                                                                </font>
                                                                            </span>
                                                                            <span className="ant-table-column-sorter" />
                                                                        </div>
                                                                    </span>
                                                                </th>
                                                                <th
                                                                    key="action"
                                                                    className="ant-table-fixed-columns-in-body ant-table-align-center ant-table-row-cell-break-word ant-table-row-cell-last"
                                                                    style={{ textAlign: "center" }}
                                                                >
                                                                    <span className="ant-table-header-column">
                                                                        <div>
                                                                            <span className="ant-table-column-title">
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        operate
                                                                                    </font>
                                                                                </font>
                                                                            </span>
                                                                            <span className="ant-table-column-sorter" />
                                                                        </div>
                                                                    </span>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="ant-table-tbody">
                                                            {miningProduct?.map((data, index) => {
                                                                return (
                                                                    <>
                                                                        <tr
                                                                            className="ant-table-row ant-table-row-level-0"
                                                                            data-row-key={1591721110055489538}
                                                                        >
                                                                            <td className="ant-table-selection-column">
                                                                                <span>
                                                                                    <label className="ant-checkbox-wrapper">
                                                                                        <span className="ant-checkbox">
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                className="ant-checkbox-input"
                                                                                                defaultValue
                                                                                            />
                                                                                            <span className="ant-checkbox-inner" />
                                                                                        </span>
                                                                                    </label>
                                                                                </span>
                                                                            </td>
                                                                            <td
                                                                                className="ant-table-row-cell-break-word"
                                                                                style={{ textAlign: "center" }}
                                                                            >
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        {index + 1}
                                                                                    </font>
                                                                                </font>
                                                                            </td>
                                                                            <td className style={{ textAlign: "center" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        {data?.product_name}
                                                                                    </font>
                                                                                </font>
                                                                            </td>
                                                                            <td className style={{ textAlign: "center" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        {data?.unit_price}
                                                                                    </font>
                                                                                </font>
                                                                            </td>
                                                                            <td className style={{ textAlign: "center" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        {data?.product_life}
                                                                                    </font>
                                                                                </font>
                                                                            </td>
                                                                            <td className style={{ textAlign: "center" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        {data?.minimum_amount}
                                                                                    </font>
                                                                                </font>
                                                                            </td>
                                                                            <td className style={{ textAlign: "center" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        {data?.maximum_amount}
                                                                                    </font>
                                                                                </font>
                                                                            </td>
                                                                            <td className style={{ textAlign: "center" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        0.32-0.38?
                                                                                    </font>
                                                                                </font>
                                                                            </td>
                                                                            <td className style={{ textAlign: "center" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        {data?.product_status}
                                                                                    </font>
                                                                                </font>
                                                                            </td>
                                                                            <td className style={{ textAlign: "center" }} >
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        {data?.product_to_sort}
                                                                                    </font>
                                                                                </font>
                                                                            </td>

                                                                        </tr>
                                                                    </>

                                                                )
                                                            })}






                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="ant-table-fixed-right">
                                                {/**/}
                                                <div className="ant-table-body-outer">
                                                    <div className="ant-table-body-inner">
                                                        <table
                                                            className="ant-table-fixed"
                                                            style={{ width: "147px" }}
                                                        >
                                                            <colgroup>
                                                                <col
                                                                    style={{ width: "147px", minWidth: "147px" }}
                                                                />
                                                            </colgroup>
                                                            <thead className="ant-table-thead">
                                                                <tr style={{ height: "45.5px" }}>
                                                                    <th
                                                                        key="action"
                                                                        className="ant-table-align-center ant-table-row-cell-break-word ant-table-row-cell-last"
                                                                        style={{ textAlign: "center" }}
                                                                    >
                                                                        <span className="ant-table-header-column">
                                                                            <div>
                                                                                <span className="ant-table-column-title">
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        <font
                                                                                            style={{
                                                                                                verticalAlign: "inherit",
                                                                                            }}
                                                                                        >
                                                                                            operate
                                                                                        </font>
                                                                                    </font>
                                                                                </span>
                                                                                <span className="ant-table-column-sorter" />
                                                                            </div>
                                                                        </span>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="ant-table-tbody">
                                                                {miningProduct?.map((data, index) => {
                                                                    return (

                                                                        <EditMiningProduct miningProduct={miningProduct} getMiningProductProduct={getMiningProductProduct} data={data} index={index} />

                                                                    )
                                                                })}

                                                                {/* <tr
                                                                    className="ant-table-row ant-table-row-level-0"
                                                                    data-row-key={1591721110055489538}
                                                                    style={{ height: "49px" }}
                                                                >
                                                                    <td
                                                                        className="ant-table-row-cell-break-word"
                                                                        style={{ textAlign: "center" }}
                                                                    >
                                                                        <span data-v-1bf8d48a>
                                                                            <a data-v-1bf8d48a>
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
                                                                            <div
                                                                                data-v-1bf8d48a
                                                                                role="separator"
                                                                                className="ant-divider ant-divider-vertical"
                                                                            />
                                                                            <a
                                                                                data-v-1bf8d48a
                                                                                className="ant-dropdown-link ant-dropdown-trigger"
                                                                            >
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        More
                                                                                    </font>
                                                                                </font>
                                                                                <i
                                                                                    data-v-1bf8d48a
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
                                                                            </a>
                                                                        </span>
                                                                    </td>
                                                                </tr> */}


                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul
                                        unselectable="unselectable"
                                        className="ant-pagination mini ant-table-pagination"
                                    >
                                        <li className="ant-pagination-total-text">
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    1-5 total 5 items
                                                </font>
                                            </font>
                                        </li>
                                        <li
                                            title="previous page"
                                            aria-disabled="true"
                                            className="ant-pagination-disabled ant-pagination-prev"
                                        >
                                            <a className="ant-pagination-item-link">
                                                <i
                                                    aria-label="icon: left"
                                                    className="anticon anticon-left"
                                                >
                                                    <svg
                                                        viewBox="64 64 896 896"
                                                        data-icon="left"
                                                        width="1em"
                                                        height="1em"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        className
                                                    >
                                                        <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
                                                    </svg>
                                                </i>
                                            </a>
                                        </li>
                                        <li
                                            title={1}
                                            tabIndex={0}
                                            className="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
                                        >
                                            <a>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>1</font>
                                                </font>
                                            </a>
                                        </li>
                                        <li
                                            title="next page"
                                            aria-disabled="true"
                                            className="ant-pagination-disabled ant-pagination-next"
                                        >
                                            <a className="ant-pagination-item-link">
                                                <i
                                                    aria-label="icon: right"
                                                    className="anticon anticon-right"
                                                >
                                                    <svg
                                                        viewBox="64 64 896 896"
                                                        data-icon="right"
                                                        width="1em"
                                                        height="1em"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        className
                                                    >
                                                        <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" />
                                                    </svg>
                                                </i>
                                            </a>
                                        </li>
                                        <li className="ant-pagination-options">
                                            <div
                                                tabIndex={0}
                                                className="ant-select ant-select-enabled ant-select-sm ant-pagination-options-size-changer"
                                            >
                                                <div
                                                    role="combobox"
                                                    aria-autocomplete="list"
                                                    aria-haspopup="true"
                                                    aria-controls="983f8e7d-d4aa-45ac-9579-7dc3baf47f79"
                                                    className="ant-select-selection ant-select-selection--single"
                                                >
                                                    <div className="ant-select-selection__rendered">
                                                        <div
                                                            title="10 items/page"
                                                            className="ant-select-selection-selected-value"
                                                            style={{ display: "block", opacity: 1 }}
                                                        >
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    10 items/page
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
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/**/}
                </div>
            </div>
            {/* //change here  */}














            {addMiningShow &&
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
                            <button onClick={() => setAddMiningShow(false)}
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
                                                                                        type="number"
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
                                                                                        placeholder="please enter minimum_amount"
                                                                                        autoComplete="off"
                                                                                        min={-9007199254740991}
                                                                                        step={1}
                                                                                        type="number"
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
                                                                                        type="number"
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
                                                                                        type="number"
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
                                                                                        type="number"
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
                                                                                        type="number"
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
                                                                                        type="number"
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
                                    <button onClick={() => setAddMiningShow(false)} type="button" className="ant-btn" fdprocessedid="jb5jw">
                                        <span>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>closure</font>
                                            </font>
                                        </span>
                                    </button>
                                    <button onClick={()=>CreateSecondContractProduct()}
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
            }

        </div>
    );
}

export default MiningMachineProducts;
