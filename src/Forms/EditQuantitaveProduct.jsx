import React, { useContext, useRef } from "react";
import { useState, useEffect } from "react";
import apis from "../Services";
import { toast } from "react-hot-toast";
import { MyContext } from "../Context/MyContext";

const EditQuantitaveProduct = ({ data, index }) => {
    const { getQuantitativeProduct } = useContext(MyContext)

    const [showCurrency, setshowCurrency] = useState(false);
    const [OpenDropDown, setOpenDropDown] = useState(false);
    const [showDetails, setshowDetails] = useState(false);
    const [showConfirmation, setshowConfirmation] = useState(false);
    const [showStatus, setshowStatus] = useState(false);
    const [selectedImagesNFT, setSelectedImagesNFT] = useState([data?.currency_icons]);
    const [testingImage, setTestingImage] = useState("")

    const [addQuantitaveProduct, setQuantitaveProduct] = useState({
        product_name: data?.product_name,
        product_life: data?.product_life,
        product_to_sort: data?.product_to_sort,
        product_status: data?.product_status,
        maximum_amount: data?.maximum_amount,
        minimum_amount: data?.minimum_amount,
        maximum_yield: data?.maximum_yield,
        minimum_rate_of_return: data?.minimum_rate_of_return,
        image: [testingImage],
    });

    console.log("addQuantitaveProduct",selectedImagesNFT);
    // Event handler to update the state on input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setQuantitaveProduct((prevState) => ({
            ...prevState,
            [name]: value, // Update the corresponding property based on the input name
        }));
    };

    const handleInputChange2 = (name, value) => {
        setQuantitaveProduct((prevState) => ({
            ...prevState,
            [name]: value, // Update the corresponding property based on the input name
        }));
    };



    const handleFileUpload = (event) => {
        console.log(event);
        const files = event.target.files;;

        for (let i = 0; i < files.length; i++) {
            // const file = files[i];
            console.log("Done", files[i]);

            setTestingImage((prevState) => ([...prevState, files]))



            const imageUrls = Array.from(files).map((file) =>
                URL.createObjectURL(file)

            );


         


            setSelectedImagesNFT([...selectedImagesNFT, ...imageUrls]);
        }

       
    };



    const fileInputRef2 = useRef(null);

    const handleButtonClick2 = (event) => {
        event.preventDefault();
        fileInputRef2.current.click();
    };

    const handleRemoveImage = (index) => {
        const newArray = [...selectedImagesNFT];
        newArray.splice(index, 1);
        setSelectedImagesNFT(newArray);
    };


    const CreateQuantitaveProduct = async (id) => {


        console.log(
            "!!!!!",
            addQuantitaveProduct?.product_name,
            addQuantitaveProduct?.product_life,
            addQuantitaveProduct?.product_to_sort,
            addQuantitaveProduct?.product_status,
            addQuantitaveProduct?.maximum_amount,
            addQuantitaveProduct?.minimum_amount,
            addQuantitaveProduct?.maximum_yield,
            addQuantitaveProduct?.minimum_rate_of_return,
            addQuantitaveProduct?.image,
        );
        
        if(addQuantitaveProduct?.minimum_amount > addQuantitaveProduct?.maximum_amount){
            toast.error("minimum amount must be less than maximum amount");
            return
        } 


        const formdata = new FormData();
        
            formdata.append("product_name", addQuantitaveProduct.product_name)
            formdata.append("product_life", addQuantitaveProduct.product_life)
            formdata.append("product_to_sort",addQuantitaveProduct.product_to_sort)
            formdata.append("product_status",addQuantitaveProduct.product_status)
            formdata.append("maximum_amount",addQuantitaveProduct.maximum_amount)
            formdata.append( "minimum_amount",addQuantitaveProduct.minimum_amount)
            formdata.append("maximum_yield",addQuantitaveProduct.maximum_yield)
            formdata.append("minimum_rate_of_return",addQuantitaveProduct.minimum_rate_of_return)
            
           
                    for (let i = 0; i < testingImage.length; i++) {

                        if (testingImage[i][0]?.slice(0,7) == "http://") {
                                    
                            } else {
                                console.log("mew",testingImage[i][0]);
                                formdata.append('image', testingImage[i][0]);
                            }   
                        
                        
                        

                    }

     
        // for (let [key, value] of Object.entries(addQuantitaveProduct)) {
        //     if (key === "image") {
        //         for (let i = 0; i < addQuantitaveProduct?.image.length; i++) {
        //             console.log("key", addQuantitaveProduct?.image[i][i]?.slice(0, 7));

        //             if (addQuantitaveProduct?.image[i][i]?.slice(0, 7) == "http://") {
        //                 // formdata.append('image',addQuantitaveProduct?.image[i][i][i]);
        //             } else {
        //                 console.log("mew");
        //                 formdata.append('image', addQuantitaveProduct?.image[i]);
        //             }

        //         }
        //     }
        //     else {
        //         formdata.append([key], [value])
        //     }
        // }

        const resut = await apis.UpdateQuantitativeProduct(id, formdata);
        toast.success(resut.data?.message, { id: 1 });
        setQuantitaveProduct("");
        setshowStatus(false);
        getproducts();
    };

    useEffect(() => {
        setQuantitaveProduct((prevState) => ({
            ...prevState,
            image: [testingImage], // Update the corresponding property based on the input name
        }));
    }, [testingImage])

    useEffect(() => {
        getQuantitativeProduct();
    }, [addQuantitaveProduct])



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
                            {showConfirmation && (
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
                                                <div
                                                    className="ant-popover-buttons"
                                                    style={{ display: "flex" }}
                                                >
                                                    <button
                                                        type="button"
                                                        className="ant-btn ant-btn-sm"
                                                        onClick={() => setshowConfirmation(false)}
                                                    >
                                                        <span>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    Cancel
                                                                </font>
                                                            </font>
                                                        </span>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="ant-btn ant-btn-primary ant-btn-sm"
                                                    >
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
                                    </div>
                                </div>
                            )}

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
                                //   className="ant-popover ant-popover-placement-top"
                                //   style={{
                                //       position: "fixed",
                                //       left: "90%",
                                //       top: "48%",
                                //       zIndex: "9999",
                                //       transformOrigin: "50% 103px",
                                //       display: `${OpenDropDown ? "flex" : "none"}`,
                                //   }}
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
                                                                                        value={
                                                                                            addQuantitaveProduct?.product_name
                                                                                        }
                                                                                        onChange={handleInputChange}
                                                                                    // defaultValue={data?.product_name}
                                                                                    />
                                                                                </span>
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
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
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
                                                                                                aria-valuemin={
                                                                                                    -9007199254740991
                                                                                                }
                                                                                                type="number"
                                                                                                placeholder="Please enter product life"
                                                                                                autoComplete="off"
                                                                                                min={-9007199254740991}
                                                                                                step={1}
                                                                                                className="ant-input-number-input"
                                                                                                fdprocessedid="10e12d"
                                                                                                name="product_life"
                                                                                                value={
                                                                                                    addQuantitaveProduct?.product_life
                                                                                                }
                                                                                                onChange={handleInputChange}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
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
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
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
                                                                                                aria-valuemin={
                                                                                                    -9007199254740991
                                                                                                }
                                                                                                type="number"
                                                                                                placeholder="Please enter sort"
                                                                                                autoComplete="off"
                                                                                                min={-9007199254740991}
                                                                                                step={1}
                                                                                                className="ant-input-number-input"
                                                                                                fdprocessedid="10e12d"
                                                                                                name="product_to_sort"
                                                                                                value={addQuantitaveProduct?.product_to_sort}
                                                                                                onChange={handleInputChange}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
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
                                                                                                            {addQuantitaveProduct?.product_status
                                                                                                                ? addQuantitaveProduct?.product_status
                                                                                                                : data?.product_status}
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
                                                                                                                    "Not Available"
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
                                                                                                                    "It has been added to"
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
                                                                                                aria-valuemin={
                                                                                                    -9007199254740991
                                                                                                }
                                                                                                type="number"
                                                                                                placeholder="Please enter maximum amount"
                                                                                                autoComplete="off"
                                                                                                min={-9007199254740991}
                                                                                                step={1}
                                                                                                className="ant-input-number-input"
                                                                                                fdprocessedid="10e12d"
                                                                                                name="maximum_amount"
                                                                                                value={
                                                                                                    addQuantitaveProduct?.maximum_amount
                                                                                                }
                                                                                                onChange={handleInputChange}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
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
                                                                                                placeholder="Please enter minimum amount"
                                                                                                autoComplete="off"
                                                                                                min={-9007199254740991}
                                                                                                step={1}
                                                                                                type="number"
                                                                                                className="ant-input-number-input"
                                                                                                aria-valuenow={60}
                                                                                                // defaultValue={data?.deliveryTime}
                                                                                                name="minimum_amount"
                                                                                                Value={
                                                                                                    addQuantitaveProduct?.minimum_amount
                                                                                                }
                                                                                                onChange={handleInputChange}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ant-col ant-col-24">
                                                                    <div className="ant-row ant-form-item">
                                                                        <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                            <label
                                                                                title="maximum yield"
                                                                                className="ant-form-item-required"
                                                                            >
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        maximum yield
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
                                                                                                aria-valuemin={
                                                                                                    -9007199254740991
                                                                                                }
                                                                                                type="number"
                                                                                                placeholder="Please enter maximum yield"
                                                                                                autoComplete="off"
                                                                                                min={-9007199254740991}
                                                                                                step={1}
                                                                                                className="ant-input-number-input"
                                                                                                fdprocessedid="10e12d"
                                                                                                name="maximum_yield"
                                                                                                Value={
                                                                                                    addQuantitaveProduct?.maximum_yield
                                                                                                }
                                                                                                onChange={handleInputChange}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ant-col ant-col-24">
                                                                    <div className="ant-row ant-form-item">
                                                                        <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                            <label
                                                                                title="minimum rate of return"
                                                                                className="ant-form-item-required"
                                                                            >
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        {" "}
                                                                                        minimum rate of return
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
                                                                                                aria-valuemin={
                                                                                                    -9007199254740991
                                                                                                }
                                                                                                type="number"
                                                                                                placeholder="Please enter minimum rate of return"
                                                                                                autoComplete="off"
                                                                                                min={-9007199254740991}
                                                                                                step={1}
                                                                                                className="ant-input-number-input"
                                                                                                fdprocessedid="10e12d"
                                                                                                name="minimum_rate_of_return"
                                                                                                Value={
                                                                                                    addQuantitaveProduct?.minimum_rate_of_return
                                                                                                }
                                                                                                onChange={handleInputChange}
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ant-row ant-form-item">
                                                                <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                    <label
                                                                        title="Quantitative currency icon (20*20 pixels)"
                                                                        className="ant-form-item-required"
                                                                    >
                                                                        <font
                                                                            style={{ verticalAlign: "inherit" }}
                                                                        >
                                                                            <font
                                                                                style={{ verticalAlign: "inherit" }}
                                                                            >
                                                                                Quantitative currency icon (20*20
                                                                                pixels)
                                                                            </font>
                                                                        </font>
                                                                    </label>
                                                                </div>
                                                                <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                    <div className="ant-form-item-control">
                                                                        <span className="ant-form-item-children">
                                                                            <div data-v-a6435686 className="img">
                                                                                <span
                                                                                    data-v-a6435686
                                                                                    className="ant-upload-picture-card-wrapper"
                                                                                >
                                                                                    <div className="ant-upload-list ant-upload-list-picture-card">

                                                                                        <>

                                                                                            <div className="ant-upload-list-picture-card-container">
                                                                                                <span>
                                                                                                    <div className="ant-upload-list-item ant-upload-list-item-done ant-upload-list-item-list-type-picture-card">
                                                                                                        <div className="ant-upload-list-item-info">
                                                                                                            <span>
                                                                                                                <a
                                                                                                                    href="https://trading-pro.oss-accelerate.aliyuncs.com/temp/bitflyer_1669466964110.webp"
                                                                                                                    target="_blank"
                                                                                                                    rel="noopener noreferrer"
                                                                                                                    className="ant-upload-list-item-thumbnail"
                                                                                                                >
                                                                                                                    <img
                                                                                                                        src={data.currency_icons}
                                                                                                                        alt="bitflyer_1669466964110.webp"
                                                                                                                        className="ant-upload-list-item-image"
                                                                                                                    />
                                                                                                                </a>
                                                                                                                {/* <a
                                                                                                                    target="_blank"
                                                                                                                    rel="noopener noreferrer"
                                                                                                                    title="bitflyer_1669466964110.webp"
                                                                                                                    href="https://trading-pro.oss-accelerate.aliyuncs.com/temp/bitflyer_1669466964110.webp"
                                                                                                                    className="ant-upload-list-item-name ant-upload-list-item-name-icon-count-1"
                                                                                                                >
                                                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                                                                            bitflyer_1669466964110.webp
                                                                                                                        </font>
                                                                                                                    </font>
                                                                                                                </a> */}
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <span className="ant-upload-list-item-actions">
                                                                                                            <a
                                                                                                                href="https://trading-pro.oss-accelerate.aliyuncs.com/temp/bitflyer_1669466964110.webp"
                                                                                                                target="_blank"
                                                                                                                rel="noopener noreferrer"
                                                                                                                title="preview file"
                                                                                                            >
                                                                                                                <i
                                                                                                                    aria-label="Icon: eye-o"
                                                                                                                    className="anticon anticon-eye-o"
                                                                                                                >
                                                                                                                    <svg
                                                                                                                        viewBox="64 64 896 896"
                                                                                                                        data-icon="eye"
                                                                                                                        width="1em"
                                                                                                                        height="1em"
                                                                                                                        fill="currentColor"
                                                                                                                        aria-hidden="true"
                                                                                                                        focusable="false"
                                                                                                                        className
                                                                                                                    >
                                                                                                                        <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                                                                                                                    </svg>
                                                                                                                </i>
                                                                                                            </a>
                                                                                                            <i
                                                                                                                aria-label="icon: delete"
                                                                                                                tabIndex={-1}
                                                                                                                className="anticon anticon-delete"
                                                                                                                title="Delete Files"
                                                                                                                onClick={() => handleRemoveImage(index)}
                                                                                                            >
                                                                                                                <svg
                                                                                                                    viewBox="64 64 896 896"
                                                                                                                    data-icon="delete"
                                                                                                                    width="1em"
                                                                                                                    height="1em"
                                                                                                                    fill="currentColor"
                                                                                                                    aria-hidden="true"
                                                                                                                    focusable="false"
                                                                                                                    className
                                                                                                                >
                                                                                                                    <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
                                                                                                                </svg>
                                                                                                            </i>
                                                                                                        </span>

                                                                                                    </div>
                                                                                                </span>
                                                                                            </div>


                                                                                        </>


                                                                                        {selectedImagesNFT == "" ?

                                                                                            null :
                                                                                            <>
                                                                                                {selectedImagesNFT?.map((data, index) => {
                                                                                                    return (
                                                                                                        <div className="ant-upload-list-picture-card-container">
                                                                                                            <span>
                                                                                                                <div className="ant-upload-list-item ant-upload-list-item-done ant-upload-list-item-list-type-picture-card">
                                                                                                                    <div className="ant-upload-list-item-info">
                                                                                                                        <span>
                                                                                                                            <a
                                                                                                                                href="https://trading-pro.oss-accelerate.aliyuncs.com/temp/bitflyer_1669466964110.webp"
                                                                                                                                target="_blank"
                                                                                                                                rel="noopener noreferrer"
                                                                                                                                className="ant-upload-list-item-thumbnail"
                                                                                                                            >
                                                                                                                                <img
                                                                                                                                    src={data}
                                                                                                                                    alt="bitflyer_1669466964110.webp"
                                                                                                                                    className="ant-upload-list-item-image"
                                                                                                                                />
                                                                                                                            </a>
                                                                                                                            <a
                                                                                                                                target="_blank"
                                                                                                                                rel="noopener noreferrer"
                                                                                                                                title="bitflyer_1669466964110.webp"
                                                                                                                                href="https://trading-pro.oss-accelerate.aliyuncs.com/temp/bitflyer_1669466964110.webp"
                                                                                                                                className="ant-upload-list-item-name ant-upload-list-item-name-icon-count-1"
                                                                                                                            >
                                                                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                                                                        bitflyer_1669466964110.webp
                                                                                                                                    </font>
                                                                                                                                </font>
                                                                                                                            </a>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <span className="ant-upload-list-item-actions">
                                                                                                                        <a
                                                                                                                            href="https://trading-pro.oss-accelerate.aliyuncs.com/temp/bitflyer_1669466964110.webp"
                                                                                                                            target="_blank"
                                                                                                                            rel="noopener noreferrer"
                                                                                                                            title="preview file"
                                                                                                                        >
                                                                                                                            <i
                                                                                                                                aria-label="Icon: eye-o"
                                                                                                                                className="anticon anticon-eye-o"
                                                                                                                            >
                                                                                                                                <svg
                                                                                                                                    viewBox="64 64 896 896"
                                                                                                                                    data-icon="eye"
                                                                                                                                    width="1em"
                                                                                                                                    height="1em"
                                                                                                                                    fill="currentColor"
                                                                                                                                    aria-hidden="true"
                                                                                                                                    focusable="false"
                                                                                                                                    className
                                                                                                                                >
                                                                                                                                    <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                                                                                                                                </svg>
                                                                                                                            </i>
                                                                                                                        </a>
                                                                                                                        <i
                                                                                                                            aria-label="icon: delete"
                                                                                                                            tabIndex={-1}
                                                                                                                            className="anticon anticon-delete"
                                                                                                                            title="Delete Files"
                                                                                                                            onClick={() => handleRemoveImage(index)}
                                                                                                                        >
                                                                                                                            <svg
                                                                                                                                viewBox="64 64 896 896"
                                                                                                                                data-icon="delete"
                                                                                                                                width="1em"
                                                                                                                                height="1em"
                                                                                                                                fill="currentColor"
                                                                                                                                aria-hidden="true"
                                                                                                                                focusable="false"
                                                                                                                                className
                                                                                                                            >
                                                                                                                                <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
                                                                                                                            </svg>
                                                                                                                        </i>
                                                                                                                    </span>

                                                                                                                </div>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    )
                                                                                                })}
                                                                                            </>
                                                                                        }

                                                                                    </div>
                                                                                    <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                                        <span
                                                                                            role="button"
                                                                                            tabIndex={0}
                                                                                            className="ant-upload"
                                                                                        >
                                                                                            <input
                                                                                                ref={fileInputRef2}
                                                                                                type="file"
                                                                                                id="image"
                                                                                                style={{ display: "none" }}
                                                                                                multiple
                                                                                                onChange={handleFileUpload}
                                                                                            />
                                                                                            <button
                                                                                                onClick={handleButtonClick2}
                                                                                                className="button-styling "
                                                                                                style={{ background: 'transparent', border: 'none', outline: 'none' }}
                                                                                            >
                                                                                                <i
                                                                                                    data-v-a6435686
                                                                                                    aria-label="icon: plus"
                                                                                                    className="anticon anticon-plus"
                                                                                                >
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
                                                                                            </button>


                                                                                        </span>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </span>
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
                                            <button
                                                onClick={() => CreateQuantitaveProduct(data?._id)}
                                                type="button"
                                                className="ant-btn ant-btn-primary"
                                            >
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
                                            onClick={() => setshowDetails(false)}
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

                                                                                        value={
                                                                                            addQuantitaveProduct?.product_name
                                                                                        }

                                                                                    // defaultValue={data?.product_name}
                                                                                    />
                                                                                </span>
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
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
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
                                                                                                aria-valuemin={
                                                                                                    -9007199254740991
                                                                                                }
                                                                                                type="number"
                                                                                                placeholder="Please enter product life"
                                                                                                autoComplete="off"
                                                                                                min={-9007199254740991}
                                                                                                step={1}
                                                                                                className="ant-input-number-input"
                                                                                                fdprocessedid="10e12d"

                                                                                                value={
                                                                                                    addQuantitaveProduct?.product_life
                                                                                                }

                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
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
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
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
                                                                                                aria-valuemin={
                                                                                                    -9007199254740991
                                                                                                }
                                                                                                type="number"
                                                                                                placeholder="Please enter sort"
                                                                                                autoComplete="off"
                                                                                                min={-9007199254740991}
                                                                                                step={1}
                                                                                                className="ant-input-number-input"
                                                                                                fdprocessedid="10e12d"

                                                                                                value={addQuantitaveProduct?.product_to_sort}

                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
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
                                                                                                            {addQuantitaveProduct?.product_status
                                                                                                                ? addQuantitaveProduct?.product_status
                                                                                                                : data?.product_status}
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
                                                                                </span>
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
                                                                                                aria-valuemin={
                                                                                                    -9007199254740991
                                                                                                }
                                                                                                type="number"
                                                                                                placeholder="Please enter maximum_amount"
                                                                                                autoComplete="off"
                                                                                                min={-9007199254740991}
                                                                                                step={1}
                                                                                                className="ant-input-number-input"
                                                                                                fdprocessedid="10e12d"

                                                                                                value={
                                                                                                    addQuantitaveProduct?.maximum_amount
                                                                                                }

                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
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
                                                                                                placeholder="Please enter minimum_amount"
                                                                                                autoComplete="off"
                                                                                                min={-9007199254740991}
                                                                                                step={1}
                                                                                                type="number"
                                                                                                className="ant-input-number-input"
                                                                                                aria-valuenow={60}
                                                                                                // defaultValue={data?.deliveryTime}

                                                                                                defaultValue={
                                                                                                    addQuantitaveProduct?.minimum_amount
                                                                                                }

                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ant-col ant-col-24">
                                                                    <div className="ant-row ant-form-item">
                                                                        <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                            <label
                                                                                title="maximum yield"
                                                                                className="ant-form-item-required"
                                                                            >
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        maximum yield
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
                                                                                                aria-valuemin={
                                                                                                    -9007199254740991
                                                                                                }
                                                                                                type="number"
                                                                                                placeholder="Please enter maximum_yield"
                                                                                                autoComplete="off"
                                                                                                min={-9007199254740991}
                                                                                                step={1}
                                                                                                className="ant-input-number-input"
                                                                                                fdprocessedid="10e12d"
                                                                                                defaultValue={
                                                                                                    addQuantitaveProduct?.maximum_yield
                                                                                                }

                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ant-col ant-col-24">
                                                                    <div className="ant-row ant-form-item">
                                                                        <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                            <label
                                                                                title="minimum rate of return"
                                                                                className="ant-form-item-required"
                                                                            >
                                                                                <font
                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                >
                                                                                    <font
                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                    >
                                                                                        {" "}
                                                                                        minimum rate of return
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
                                                                                                aria-valuemin={
                                                                                                    -9007199254740991
                                                                                                }
                                                                                                type="number"
                                                                                                placeholder="Please enter minimum_rate_of_return"
                                                                                                autoComplete="off"
                                                                                                min={-9007199254740991}
                                                                                                step={1}
                                                                                                className="ant-input-number-input"
                                                                                                fdprocessedid="10e12d"
                                                                                                defaultValue={
                                                                                                    addQuantitaveProduct?.minimum_rate_of_return
                                                                                                }

                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="ant-row ant-form-item">
                                                                <div className="ant-col ant-col-xs-24 ant-col-sm-5 ant-form-item-label">
                                                                    <label
                                                                        title="Quantitative currency icon (20*20 pixels)"
                                                                        className="ant-form-item-required"
                                                                    >
                                                                        <font
                                                                            style={{ verticalAlign: "inherit" }}
                                                                        >
                                                                            <font
                                                                                style={{ verticalAlign: "inherit" }}
                                                                            >
                                                                                Quantitative currency icon (20*20
                                                                                pixels)
                                                                            </font>
                                                                        </font>
                                                                    </label>
                                                                </div>
                                                                <div className="ant-col ant-col-xs-24 ant-col-sm-16 ant-form-item-control-wrapper">
                                                                    <div className="ant-form-item-control">
                                                                        <span className="ant-form-item-children">
                                                                            <div data-v-a6435686 className="img">
                                                                                <span
                                                                                    data-v-a6435686
                                                                                    className="ant-upload-picture-card-wrapper"
                                                                                >
                                                                                    <div className="ant-upload-list ant-upload-list-picture-card">
                                                                                        {/* <>

                                                                                            <div className="ant-upload-list-picture-card-container">
                                                                                                <span>
                                                                                                    <div className="ant-upload-list-item ant-upload-list-item-done ant-upload-list-item-list-type-picture-card">
                                                                                                        <div className="ant-upload-list-item-info">
                                                                                                            <span>
                                                                                                                <a
                                                                                                                    href="https://trading-pro.oss-accelerate.aliyuncs.com/temp/bitflyer_1669466964110.webp"
                                                                                                                    target="_blank"
                                                                                                                    rel="noopener noreferrer"
                                                                                                                    className="ant-upload-list-item-thumbnail"
                                                                                                                >
                                                                                                                    <img
                                                                                                                        src={addQuantitaveProduct.image}
                                                                                                                        alt="bitflyer_1669466964110.webp"
                                                                                                                        className="ant-upload-list-item-image"
                                                                                                                    />
                                                                                                                </a>
                                                                                                                <a
                                                                                                                    target="_blank"
                                                                                                                    rel="noopener noreferrer"
                                                                                                                    title="bitflyer_1669466964110.webp"
                                                                                                                    href="https://trading-pro.oss-accelerate.aliyuncs.com/temp/bitflyer_1669466964110.webp"
                                                                                                                    className="ant-upload-list-item-name ant-upload-list-item-name-icon-count-1"
                                                                                                                >
                                                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                                                                            bitflyer_1669466964110.webp
                                                                                                                        </font>
                                                                                                                    </font>
                                                                                                                </a>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <span className="ant-upload-list-item-actions">
                                                                                                            <a
                                                                                                                href="https://trading-pro.oss-accelerate.aliyuncs.com/temp/bitflyer_1669466964110.webp"
                                                                                                                target="_blank"
                                                                                                                rel="noopener noreferrer"
                                                                                                                title="preview file"
                                                                                                            >
                                                                                                                <i
                                                                                                                    aria-label="Icon: eye-o"
                                                                                                                    className="anticon anticon-eye-o"
                                                                                                                >
                                                                                                                    <svg
                                                                                                                        viewBox="64 64 896 896"
                                                                                                                        data-icon="eye"
                                                                                                                        width="1em"
                                                                                                                        height="1em"
                                                                                                                        fill="currentColor"
                                                                                                                        aria-hidden="true"
                                                                                                                        focusable="false"
                                                                                                                        className
                                                                                                                    >
                                                                                                                        <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                                                                                                                    </svg>
                                                                                                                </i>
                                                                                                            </a>
                                                                                                            <i
                                                                                                                aria-label="icon: delete"
                                                                                                                tabIndex={-1}
                                                                                                                className="anticon anticon-delete"
                                                                                                                title="Delete Files"
                                                                                                                onClick={() => handleRemoveImage(index)}
                                                                                                            >
                                                                                                                <svg
                                                                                                                    viewBox="64 64 896 896"
                                                                                                                    data-icon="delete"
                                                                                                                    width="1em"
                                                                                                                    height="1em"
                                                                                                                    fill="currentColor"
                                                                                                                    aria-hidden="true"
                                                                                                                    focusable="false"
                                                                                                                    className
                                                                                                                >
                                                                                                                    <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
                                                                                                                </svg>
                                                                                                            </i>
                                                                                                        </span>

                                                                                                    </div>
                                                                                                </span>
                                                                                            </div>


                                                                                        </> */}
                                                                                       {selectedImagesNFT == "" ?

                                                                                            null :
                                                                                            <>
                                                                                                {selectedImagesNFT?.map((data, index) => {
                                                                                                    return (
                                                                                                        <div className="ant-upload-list-picture-card-container">
                                                                                                            <span>
                                                                                                                <div className="ant-upload-list-item ant-upload-list-item-done ant-upload-list-item-list-type-picture-card">
                                                                                                                    <div className="ant-upload-list-item-info">
                                                                                                                        <span>
                                                                                                                            <a
                                                                                                                                href="https://trading-pro.oss-accelerate.aliyuncs.com/temp/bitflyer_1669466964110.webp"
                                                                                                                                target="_blank"
                                                                                                                                rel="noopener noreferrer"
                                                                                                                                className="ant-upload-list-item-thumbnail"
                                                                                                                            >
                                                                                                                                <img
                                                                                                                                    src={data[0]}
                                                                                                                                    alt="bitflyer_1669466964110.webp"
                                                                                                                                    className="ant-upload-list-item-image"
                                                                                                                                />
                                                                                                                            </a>
                                                                                                                        
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                    <span className="ant-upload-list-item-actions">
                                                                                                                        <a
                                                                                                                            href="https://trading-pro.oss-accelerate.aliyuncs.com/temp/bitflyer_1669466964110.webp"
                                                                                                                            target="_blank"
                                                                                                                            rel="noopener noreferrer"
                                                                                                                            title="preview file"
                                                                                                                        >
                                                                                                                            <i
                                                                                                                                aria-label="Icon: eye-o"
                                                                                                                                className="anticon anticon-eye-o"
                                                                                                                            >
                                                                                                                                <svg
                                                                                                                                    viewBox="64 64 896 896"
                                                                                                                                    data-icon="eye"
                                                                                                                                    width="1em"
                                                                                                                                    height="1em"
                                                                                                                                    fill="currentColor"
                                                                                                                                    aria-hidden="true"
                                                                                                                                    focusable="false"
                                                                                                                                    className
                                                                                                                                >
                                                                                                                                    <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                                                                                                                                </svg>
                                                                                                                            </i>
                                                                                                                        </a>
                                                                                                                        <i
                                                                                                                            aria-label="icon: delete"
                                                                                                                            tabIndex={-1}
                                                                                                                            className="anticon anticon-delete"
                                                                                                                            title="Delete Files"
                                                                                                                            
                                                                                                                        >
                                                                                                                            <svg
                                                                                                                                viewBox="64 64 896 896"
                                                                                                                                data-icon="delete"
                                                                                                                                width="1em"
                                                                                                                                height="1em"
                                                                                                                                fill="currentColor"
                                                                                                                                aria-hidden="true"
                                                                                                                                focusable="false"
                                                                                                                                className
                                                                                                                            >
                                                                                                                                <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
                                                                                                                            </svg>
                                                                                                                        </i>
                                                                                                                    </span>

                                                                                                                </div>
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    )
                                                                                                })}
                                                                                            </>
                                                                                        }

                                                                                    </div>
                                                                                    <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                                        <span
                                                                                            role="button"
                                                                                            tabIndex={0}
                                                                                            className="ant-upload"
                                                                                        >
                                                                                            <input
                                                                                                ref={fileInputRef2}
                                                                                                type="file"
                                                                                            
                                                                                                style={{ display: "none" }}
                                                                                            
                                                                                            />
                                                                                            <button
                                                                                                
                                                                                                className="button-styling "
                                                                                                style={{ background: 'transparent', border: 'none', outline: 'none' }}
                                                                                            >
                                                                                                <i
                                                                                                    data-v-a6435686
                                                                                                    aria-label="icon: plus"
                                                                                                    className="anticon anticon-plus"
                                                                                                >
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
                                                                                            </button>


                                                                                        </span>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </span>
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
                                                onClick={() => setshowDetails(false)}
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
                                            <button
                                                onClick={() => CreateQuantitaveProduct(data?._id)}
                                                type="button"
                                                className="ant-btn ant-btn-primary"
                                            >
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
        </>
    );
};

export default EditQuantitaveProduct;
