import React, { useContext, useEffect, useRef, useState } from "react";
import apis from "../Services";
import { MyContext } from "../Context/MyContext";
import EditQuantitaveProduct from "../Forms/EditQuantitaveProduct";
import { toast } from "react-hot-toast";

function AIQuantitativeProduct() {
    const { getproducts, quantitativeProduct, getQuantitativeProduct } = useContext(MyContext)
    
    const [filter ,setfilter] = useState(quantitativeProduct)
    useEffect(()=>{
        if(quantitativeProduct.length > 0)
        {
          setfilter(quantitativeProduct)
        }
      },[quantitativeProduct])
    
    
    const [showAdd, setShowAdd] = useState(false);
    const [selectedImagesNFT, setSelectedImagesNFT] = useState("");
    const [testingImage, setTestingImage] = useState('')
    const [showStatus, setShowStatus]=useState(false)
    const [showCurrency, setshowCurrency] = useState(false);
    
    const [addQuantitaveProduct, setQuantitaveProduct] = useState({
        product_name: "",
        product_life: "",
        product_to_sort: "",
        product_status: "",
        maximum_amount: "",
        minimum_amount: "",
        maximum_yield: "",
        minimum_rate_of_return: "",
        image: testingImage,
    });

    const [search, setSearch] = useState({
        product_name: "",
        product_status: ""
    })

    const getSearchedQuantitativeProduct = async ()=> {
        if(!search?.product_status=="" && !search?.product_status==""){
    
          try {
            const result = await apis.getSearchedQuantitativeProduct({
              "product_name": search.product_name,
              "product_status":search.product_status,
            })   
           
            if(result.status){
              setfilter(result.data?.data)
            }
    
          } catch (error) {
           console.log("Record Not Found");
          }
          
        }
        else
        {
          toast.error("Please fill all fields");
        }
        
    
    }







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




    const CreateQuantitaveProduct = async () => {

        if (!addQuantitaveProduct?.product_name == "" &&
            !addQuantitaveProduct?.product_life == "" &&
            !addQuantitaveProduct?.product_to_sort == "" &&
            !addQuantitaveProduct?.product_status == "" &&
            !addQuantitaveProduct?.maximum_amount == "" &&
            !addQuantitaveProduct?.minimum_amount == "" &&
            !addQuantitaveProduct?.maximum_yield == "" &&
            !addQuantitaveProduct?.minimum_rate_of_return == "" &&
            !testingImage == ""
        ) {

           if(addQuantitaveProduct?.minimum_amount > addQuantitaveProduct?.maximum_amount){
            toast.error("minimum amount must be less than maximum amount");
            return
           } 
           
           else if(addQuantitaveProduct?.minimum_rate_of_return > addQuantitaveProduct?.maximum_yield){
            toast.error("maximum yield amount must be less than minimum rate of return amount");
            return
           } 
            
            const sendData = new FormData();

            sendData.append("product_name", addQuantitaveProduct.product_name)
            sendData.append("product_life", addQuantitaveProduct.product_life)
            sendData.append("product_to_sort", addQuantitaveProduct.product_to_sort)
            sendData.append("product_status", addQuantitaveProduct.product_status)
            sendData.append("maximum_amount", addQuantitaveProduct.maximum_amount)
            sendData.append("minimum_amount", addQuantitaveProduct.minimum_amount)
            sendData.append("maximum_yield", addQuantitaveProduct.maximum_yield)
            sendData.append("minimum_rate_of_return", addQuantitaveProduct.minimum_rate_of_return)


            for (let i = 0; i < testingImage.length; i++) {

                console.log("mew", testingImage[i][0]);
                sendData.append('image', testingImage[i][0]);
                // }

            }


            const resut = await apis.createQuantitativeProduct(sendData);
            console.log("resut", resut);
            toast.success("Quantitative product created successfully", { id: 1 });
            setQuantitaveProduct("");
            setShowAdd(false);

        }
        else{

            toast.error("Please input data all required fields", { id: 1 });
        }

    }






    // getSearchedQuantitativeProduct


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
        <div>
            <div data-v-140419ff className="ant-card">
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
                                        <button onClick={()=>getSearchedQuantitativeProduct()}
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
                                        <button onClick={()=>setfilter(quantitativeProduct)}
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

                    <div data-v-140419ff className="table-operator">
                        <button onClick={() => setShowAdd(true)}
                            data-v-140419ff
                            type="button"
                            className="ant-btn ant-btn-primary"
                            ant-click-animating-without-extra-node="false"
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
                    <div data-v-140419ff>
                        <div
                            data-v-140419ff
                            className="ant-alert ant-alert-info"
                            style={{ marginBottom: "16px" }}
                        >
                            <i
                                data-v-140419ff
                                className="anticon anticon-info-circle ant-alert-icon"
                            />
                            <font style={{ verticalAlign: "inherit" }} />
                            <a data-v-140419ff style={{ fontWeight: 600 }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>0 </font>
                                </font>
                            </a>
                            <font style={{ verticalAlign: "inherit" }}>
                                <a data-v-140419ff style={{ marginLeft: "24px" }}>
                                    <font style={{ verticalAlign: "inherit" }}>items </font>
                                </a>
                                <font style={{ verticalAlign: "inherit" }}></font>
                                <font style={{ verticalAlign: "inherit" }}>
                                    have been selected Clear
                                </font>
                            </font>
                            <a data-v-140419ff style={{ marginLeft: "24px" }}>
                                <font style={{ verticalAlign: "inherit" }} />
                            </a>
                        </div>
                        <div
                            data-v-140419ff
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
                                                        className="ant-table-fixed "
                                                        style={{ width: "max-content" , display:"contents"}}
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
                                                                    key="type_dictText"
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
                                                                                        product type
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
                                                                                        maximum amount
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

                                                            {/* start Here */}

                                                            {filter.length > 0 ?
                                                            
                                                            filter?.map((data, index) => {
                                                                return (
                                                                    <tr
                                                                        className="ant-table-row ant-table-row-level-0"
                                                                        data-row-key={1596486446243954689}
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
                                                                                    {data?.product_name}
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
                                                                                    0.008-0.01??
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
                                                                        <td
                                                                            className="ant-table-fixed-columns-in-body ant-table-row-cell-break-word"
                                                                            style={{ textAlign: "center" }}
                                                                        >
                                                                            <span data-v-140419ff>
                                                                                <a data-v-140419ff>
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
                                                                                    data-v-140419ff
                                                                                    role="separator"
                                                                                    className="ant-divider ant-divider-vertical"
                                                                                />
                                                                                <a
                                                                                    data-v-140419ff
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
                                                                                        data-v-140419ff
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
                                                                    </tr>

                                                                )
                                                            })

                                                            :
                                                            <div className="d-flex justify-content-center align-items-center" >
                                                            Record Not Found </div>

                                                            }



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
                                                                {quantitativeProduct?.map((data, index) => {
                                                                    return (

                                                                        <EditQuantitaveProduct data={data} index={index} />

                                                                    )
                                                                })}
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
                                                    aria-controls="b0705e7c-0d1f-47ed-c52e-7daf40bce572"
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
                </div>
            </div>

            {showAdd && (
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
                                            onClick={() => setShowAdd(false)}
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
                                                                                        value={addQuantitaveProduct?.product_name
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
                                                                                                placeholder="Please Inpt value in Days"
                                                                                                autoComplete="off"
                                                                                                min={-9007199254740991}
                                                                                                step={1}
                                                                                                className="ant-input-number-input"
                                                                                                fdprocessedid="10e12d"
                                                                                                name="product_life"
                                                                                                value={addQuantitaveProduct?.product_life
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
                                                                                                placeholder="Please select sort"
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
                                                                                                type="number"
                                                                                                placeholder="Please enter minimum_amount"
                                                                                                autoComplete="off"
                                                                                                min={-9007199254740991}
                                                                                                step={1}
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
                                                                                                placeholder="Please enter maximum_yield"
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
                                                                                                placeholder="Please enter minimum_rate_of_return"
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
                                                onClick={() => setShowAdd(false)}
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
                                                onClick={() => CreateQuantitaveProduct()}
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
        </div>
    );
}

export default AIQuantitativeProduct;
