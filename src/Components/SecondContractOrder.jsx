import React, { useContext, useEffect, useState } from "react";
import apis from "../Services";
import { MyContext } from "../Context/MyContext";
import { EditConractOrder } from "../Forms/EditContractOrder";
import { toast } from "react-hot-toast";

function SecondContractOrder() {
  const { contractOrder, contractProduct, user } = useContext(MyContext)

  const [filter ,setfilter] = useState(contractOrder) 



  useEffect(()=>{
    if(contractOrder.length > 0)
    {
      setfilter(contractOrder)
    }
  },[contractOrder])


  const [search, SetSearch] = useState({
    productId : "",
    user_address: "",
    status: "",
    result: "",
    createdAt: "",
  });

  const [showPopUp, setshowPopUp] = useState(0);
  const [showProduct, setShowProduct] = useState(0)
  const [showSearch, setShowSearch] = useState(0)

  ///This is add contract 
  const [addSecondOrder, setSecondOrder] = useState({
    product_name: "",
    user_address: "",
    currency: "",
    direction: "",
    amount: "",
    productId: "",
    opening_price: "",
    expected: ""
  });

  const getSearchedContract = async ()=> {
    if(!search?.productId=="" && !search?.user_address=="" && !search?.status =="" && !search?.result=="" &&
    !search?.createdAt==""){

      try {
        const result = await apis.getSearchedContract({
          "productId": search.productId,
          "user_address":search.user_address,
          "status":search.status,
          "result":search.result,
          "createdAt":search.createdAt
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
    setSecondOrder((prevState) => ({
      ...prevState,
      [name]: value, // Update the corresponding property based on the input name
    }));
  };

  const handleInputChange2 = (name, value) => {
    // const { name, value } = event.target;
    setSecondOrder((prevState) => ({
      ...prevState,
      [name]: value, // Update the corresponding property based on the input name
    }));
  };

  const CreateSecondContractOrder = async () => {
    console.log("caddSecondOrder", addSecondOrder);
    if (!addSecondOrder.product_name == "" &&
      !addSecondOrder.user_address == "" &&
      !addSecondOrder.currency == "" &&
      !addSecondOrder.direction == "" &&
      !addSecondOrder.amount == "" &&
      !addSecondOrder.coin == "" &&
      !addSecondOrder.productId == "" &&
      !addSecondOrder.opening_price == "" &&
      !addSecondOrder.expected == ""
    ) {
     

      const resut = await apis.createSecondContracOrder({
        "coin":addSecondOrder.product_name,
        "productId":addSecondOrder.productId,
        "user_address":addSecondOrder.user_address,
        "currency":addSecondOrder.currency,
        "opening_price":addSecondOrder.opening_price,
        "amount":addSecondOrder.amount,
        "expected":addSecondOrder.expected,
        "direction":addSecondOrder.direction
      })

      toast.success(resut.data.message, { id: 1 });

      setshowPopUp(0);
      setSecondOrder("")
    } else {
      toast.error("Please input data all required fields", { id: 1 });
    }
  }

  const handleInputChange3 = (name, value) => {
    // const { name, value } = event.target;
    SetSearch((prevState) => ({
      ...prevState,
      [name]: value, // Update the corresponding property based on the input name
    }));
  };

  const handleInputChange4 = (event) => {
    const { name, value } = event.target;
    SetSearch((prevState) => ({
      ...prevState,
      [name]: value, // Update the corresponding property based on the input name
    }));
  };



  return (
    <div>
      <div data-v-19524346 className="ant-card">
        <div className="ant-card-body">

          <div data-v-19524346 className="table-page-search-wrapper">
            <form data-v-19524346 className="ant-form ant-form-inline">
              <div
                data-v-19524346
                className="ant-row"
                style={{ marginLeft: "-12px", marginRight: "-12px" }}
              >
                <div
                  data-v-19524346
                  className="ant-col ant-col-sm-24 ant-col-md-12 ant-col-lg-11 ant-col-xl-10"
                  style={{ paddingLeft: "12px", paddingRight: "12px" }}
                >


                  <div data-v-19524346 className="ant-row ant-form-item">
                    <div
                      className="ant-col ant-form-item-label"
                      style={{ width: "35%" }}
                    >
                      <label title="creation date" className>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            creation date
                          </font>
                        </font>
                      </label>
                    </div>



                    <div className="ant-col ant-form-item-control-wrapper">
                      <div className="ant-form-item-control">
                        <span className="ant-form-item-children">
                          <span onClick={() => setshowPopUp(3)}
                            data-v-19524346
                            className="query-group-cust ant-calendar-picker"
                            style={{ minWidth: "195px" }}
                          >
                            <div className>
                              <input
                                placeholder="Please select a start time"
                                className="ant-calendar-picker-input ant-input"
                                type="date"
                                onChange={(e) => {handleInputChange3("createdAt", e.target.value) }}
                              />
                            </div>
                          </span>

                          <span
                            data-v-19524346
                            className="query-group-split-cust"
                          />

                          {/* <span
                            data-v-19524346
                            className="query-group-cust ant-calendar-picker"
                            style={{ minWidth: "195px" }}
                          >
                            <div className>
                              <input
                                readOnly="true"
                                placeholder="Please select an end time"
                                className="ant-calendar-picker-input ant-input"

                              />
                              <i
                                aria-label="icon: calendar"
                                className="anticon anticon-calendar ant-calendar-picker-icon"
                              >
                                <svg
                                  viewBox="64 64 896 896"
                                  data-icon="calendar"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  focusable="false"
                                  className
                                >
                                  <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" />
                                </svg>
                              </i>
                            </div>
                          </span>
                           */}
                        </span>

                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-19524346
                  className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-7 ant-col-xl-6"
                  style={{ paddingLeft: "12px", paddingRight: "12px" }}
                >
                  <div data-v-19524346 className="ant-row ant-form-item">
                    <div className="ant-col ant-form-item-label">
                      <label title="product" className>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            product
                          </font>
                        </font>
                      </label>
                    </div>
                    <div
                      className="ant-col ant-form-item-control-wrapper"
                      style={{ width: "155px" }}
                    >
                      <div className="ant-form-item-control">
                        <span className="ant-form-item-children">
                          <div
                            data-v-17b4e467
                            data-v-19524346
                            tabIndex={0}
                            className="ant-select ant-select-enabled"
                          >
                            <div
                              role="combobox"
                              aria-autocomplete="list"
                              aria-haspopup="true"
                              aria-controls="aeb04ccc-6d70-496f-e5e8-ff32de0bdbda"
                              className="ant-select-selection ant-select-selection--single"
                            >
                              <div className="ant-select-selection__rendered">
                                <div onClick={() => setShowSearch(1)}
                                  unselectable="on"
                                  
                                  className={search.product_name ? "ant-select-selection__placeholder1" : "ant-select-selection__placeholder"}
                                  style={{
                                    display: "block",
                                    userSelect: "none",
                                  }}
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                    {search.product_name ? search.product_name : "Please select a product" }
                                  
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
                        {showSearch == 1 &&
                          <div className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" style={{ width: '100%', left: '0px', top: '30px', display: 'flex' }}><div id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51" tabIndex={-1} className="ant-select-dropdown-content" style={{ overflow: 'auto', transform: 'translateZ(0px)', width: "100%" }}>
                            <ul role="listbox" onClick={() => { setShowSearch(0) }} tabIndex={0} className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root">
                              {contractOrder?.map((data, index) => {
                                return (
                                  <li onClick={() => { handleInputChange3("product_name",data?.productId?._id) }} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                    <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                          {data?.productId?.product_name}
                                        </font>
                                      </font>
                                    </span>
                                  </li>
                                )
                              })}
                            </ul></div></div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-19524346
                  className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-7 ant-col-xl-6"
                  style={{ paddingLeft: "12px", paddingRight: "12px" }}
                >
                  <div data-v-19524346 className="ant-row ant-form-item">
                    <div
                      className="ant-col ant-form-item-label"
                      style={{ width: "45%" }}
                    >
                      <label title="username" className>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            userAddress
                          </font>
                        </font>
                      </label>
                    </div>
                    <div className="ant-col ant-form-item-control-wrapper">
                      <div className="ant-form-item-control">
                        <span className="ant-form-item-children">
                          <input
                            data-v-19524346
                            placeholder="please enter user name"
                            type="text"
                            className="ant-input"
                            name="user_address"
                            value={search.user_address}
                            onChange={handleInputChange4}

                          />
                        </span>
                        {/**/}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  data-v-19524346
                  className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-7 ant-col-xl-6"
                  style={{ paddingLeft: "12px", paddingRight: "12px" }}
                >
                  <div data-v-19524346 className="ant-row ant-form-item">
                    <div 
                      className="ant-col ant-form-item-label"
                      style={{ width: "50%" }}
                    >
                      <label title="Order Status" className>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Order Status
                          </font>
                        </font>
                      </label>
                    </div>
                    <div
                      className="ant-col ant-form-item-control-wrapper"
                      style={{ width: "150px" }}
                    >
                      <div className="ant-form-item-control">
                        <span className="ant-form-item-children">
                          <div
                            data-v-17b4e467
                            data-v-19524346
                            tabIndex={0}
                            className="ant-select ant-select-enabled"
                          >
                            <div
                              role="combobox"
                              aria-autocomplete="list"
                              aria-haspopup="true"
                              aria-controls="a44e9446-0656-4b5c-886d-b5f1eda69378"
                              className="ant-select-selection ant-select-selection--single"
                            >
                              <div className="ant-select-selection__rendered">
                                <div onClick={() => setShowSearch(3)}
                                  unselectable="on"
                                  className={search?.status ? "ant-select-selection__placeholder1": "ant-select-selection__placeholder"}
                                  style={{
                                    display: "block",
                                    userSelect: "none",
                                  }}
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                     {search?.status ? search?.status : "Please select an order status"} 
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
                            {showSearch == 3 &&
                          <div className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" style={{ width: '100%', left: '0px', top: '30px', display: 'flex' }}><div id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51" tabIndex={-1} className="ant-select-dropdown-content" style={{ overflow: 'auto', transform: 'translateZ(0px)', width: "100%" }}>
                            <ul role="listbox" onClick={() => { setShowSearch(0) }} tabIndex={0} className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root">
                                
                                <li onClick={() => { handleInputChange3("status","completed") }} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                    <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                          completed 
                                        </font>
                                      </font>
                                    </span>
                                </li>
                                   
                                <li onClick={() => { handleInputChange3("status","progress") }} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                    <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                          progress 
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
                <div 
                  data-v-19524346
                  className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-7 ant-col-xl-6"
                  style={{ paddingLeft: "12px", paddingRight: "12px" }}
                >
                  <div  data-v-19524346 className="ant-row ant-form-item">
                    <div 
                    className="ant-col ant-form-item-label">
                      <label 
                       title="result" className>
                        <font 
                         style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            result
                          </font>
                        </font>
                      </label>
                    </div>
                    <div
                      className="ant-col ant-form-item-control-wrapper"
                      style={{ width: "165px" }}
                    >
                      <div className="ant-form-item-control">
                        <span className="ant-form-item-children">
                          <div 
                            data-v-17b4e467
                            data-v-19524346
                            tabIndex={0}
                            className="ant-select ant-select-enabled"
                          >
                            <div
                              role="combobox"
                              aria-autocomplete="list"
                              aria-haspopup="true"
                              aria-controls="60a11b11-9ead-47f7-ab89-3a3ef4cfa69d"
                              className="ant-select-selection ant-select-selection--single"
                            >
                              <div className="ant-select-selection__rendered">
                                <div onClick={() => setShowSearch(2)}
                                  unselectable="on"
                                  className={search?.result ? "ant-select-selection__placeholder1" : "ant-select-selection__placeholder" }
                                  style={{
                                    display: "block",
                                    userSelect: "none",
                                  }}
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                     {search?.result ? search?.result : "Please select a result" }
                                      
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
                              {showSearch == 2 &&
                          <div className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" style={{ width: '100%', left: '0px', top: '30px', display: 'flex' }}><div id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51" tabIndex={-1} className="ant-select-dropdown-content" style={{ overflow: 'auto', transform: 'translateZ(0px)', width: "100%" }}>
                            <ul role="listbox" onClick={() => {setShowSearch(0)}} tabIndex={0} className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root">
                             
                                  <li onClick={() => { handleInputChange3("result","draw") }} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                    <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                         draw
                                        </font>
                                      </font>
                                    </span>
                                  </li>
                                  <li onClick={() => { handleInputChange3("result","win") }} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                    <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                         win
                                        </font>
                                      </font>
                                    </span>
                                  </li>
                                  <li onClick={() => { handleInputChange3("result","loss") }} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                    <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                      <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>
                                         loss
                                        </font>
                                      </font>
                                    </span>
                                  </li>
                                
                            </ul></div></div>
                        }
                            </div>
                          </div>
                        </span>
                        {/**/}
                      </div>
                    </div>
                  </div>
                </div>
                {/**/}
                <div
                  data-v-19524346
                  className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-7 ant-col-xl-6"
                  style={{
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    margin: "10px 0",
                  }}
                >
                  <span
                    data-v-19524346
                    className="table-page-search-submitButtons"
                    style={{ float: "left", overflow: "hidden" }}
                  >
                    <button onClick={()=>getSearchedContract()}
                      data-v-19524346
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
                    <button onClick={()=>setfilter(contractOrder)}
                      data-v-19524346
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

          <div data-v-19524346 className="table-operator">
            <button
              onClick={() => {
                setshowPopUp(1);
              }}
              data-v-19524346
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
            <button
              data-v-19524346
              type="button"
              className="ant-btn ant-btn-primary"
            >
              <i aria-label="icon: reload" className="anticon anticon-reload">
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
                  <font style={{ verticalAlign: "inherit" }}>to refresh</font>
                </font>
              </span>
            </button>
          </div>
          <div data-v-19524346>
            <div
              data-v-19524346
              className="ant-alert ant-alert-info"
              style={{ marginBottom: "16px" }}
            >
              <i
                data-v-19524346
                className="anticon anticon-info-circle ant-alert-icon"
              />
              <font style={{ verticalAlign: "inherit" }} />
              <a data-v-19524346 style={{ fontWeight: 600 }}>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>0 </font>
                </font>
              </a>
              <font style={{ verticalAlign: "inherit" }}>
                <a data-v-19524346 style={{ marginLeft: "24px" }}>
                  <font style={{ verticalAlign: "inherit" }}>items </font>
                </a>
                <font style={{ verticalAlign: "inherit" }}></font>
                <font style={{ verticalAlign: "inherit" }}>
                  have been selected Clear
                </font>
              </font>
              <a data-v-19524346 style={{ marginLeft: "24px" }}>
                <font style={{ verticalAlign: "inherit" }} />
              </a>
            </div>
            <div
              data-v-19524346
              className="j-table-force-nowrap ant-table-wrapper"
            >
              <div className="ant-spin-nested-loading">
                <div className="ant-spin-container">
                  <div className="ant-table ant-table-middle ant-table-bordered ant-table-scroll-position-left">
                    <div className="ant-table-content">
                      <div className="ant-table-scroll">
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
                                  key="id"
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
                                            order ID
                                          </font>
                                        </font>
                                      </span>
                                      <span className="ant-table-column-sorter" />
                                    </div>
                                  </span>
                                </th>
                                <th
                                  key="createTime"
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
                                            creation date
                                          </font>
                                        </font>
                                      </span>
                                      <span className="ant-table-column-sorter" />
                                    </div>
                                  </span>
                                </th>
                                <th
                                  key="prodId_dictText"
                                  className="ant-table-column-has-actions ant-table-column-has-sorters ant-table-align-center"
                                  style={{ textAlign: "center" }}
                                >
                                  <span className="ant-table-header-column">
                                    <div className="ant-table-column-sorters">
                                      <span className="ant-table-column-title">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            product
                                          </font>
                                        </font>
                                      </span>
                                      <span className="ant-table-column-sorter">
                                        <div
                                          title="to sort"
                                          className="ant-table-column-sorter-inner ant-table-column-sorter-inner-full"
                                        >
                                          <i
                                            aria-label="Icon: caret-up"
                                            className="anticon anticon-caret-up ant-table-column-sorter-up off"
                                          >
                                            <svg
                                              viewBox="0 0 1024 1024"
                                              data-icon="caret-up"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                              focusable="false"
                                              className
                                            >
                                              <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" />
                                            </svg>
                                          </i>
                                          <i
                                            aria-label="Icon: caret-down"
                                            className="anticon anticon-caret-down ant-table-column-sorter-down off"
                                          >
                                            <svg
                                              viewBox="0 0 1024 1024"
                                              data-icon="caret-down"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                              focusable="false"
                                              className
                                            >
                                              <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                                            </svg>
                                          </i>
                                        </div>
                                      </span>
                                    </div>
                                  </span>
                                </th>
                                <th
                                  key="prod.second"
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
                                            seconds
                                          </font>
                                        </font>
                                      </span>
                                      <span className="ant-table-column-sorter" />
                                    </div>
                                  </span>
                                </th>
                                <th
                                  key="userName"
                                  className="ant-table-column-has-actions ant-table-column-has-sorters ant-table-align-center"
                                  style={{ textAlign: "center" }}
                                >
                                  <span className="ant-table-header-column">
                                    <div className="ant-table-column-sorters">
                                      <span className="ant-table-column-title">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            username
                                          </font>
                                        </font>
                                      </span>
                                      <span className="ant-table-column-sorter">
                                        <div
                                          title="to sort"
                                          className="ant-table-column-sorter-inner ant-table-column-sorter-inner-full"
                                        >
                                          <i
                                            aria-label="Icon: caret-up"
                                            className="anticon anticon-caret-up ant-table-column-sorter-up off"
                                          >
                                            <svg
                                              viewBox="0 0 1024 1024"
                                              data-icon="caret-up"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                              focusable="false"
                                              className
                                            >
                                              <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" />
                                            </svg>
                                          </i>
                                          <i
                                            aria-label="Icon: caret-down"
                                            className="anticon anticon-caret-down ant-table-column-sorter-down off"
                                          >
                                            <svg
                                              viewBox="0 0 1024 1024"
                                              data-icon="caret-down"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                              focusable="false"
                                              className
                                            >
                                              <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                                            </svg>
                                          </i>
                                        </div>
                                      </span>
                                    </div>
                                  </span>
                                </th>
                                <th
                                  key="symbol"
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
                                            Currency
                                          </font>
                                        </font>
                                      </span>
                                      <span className="ant-table-column-sorter" />
                                    </div>
                                  </span>
                                </th>
                                <th
                                  key="direction_dictText"
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
                                            direction
                                          </font>
                                        </font>
                                      </span>
                                      <span className="ant-table-column-sorter" />
                                    </div>
                                  </span>
                                </th>
                                <th
                                  key="prod.odds"
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
                                            odds
                                          </font>
                                        </font>
                                      </span>
                                      <span className="ant-table-column-sorter" />
                                    </div>
                                  </span>
                                </th>
                                <th
                                  key="amount"
                                  className="ant-table-column-has-actions ant-table-column-has-sorters ant-table-align-center"
                                  style={{ textAlign: "center" }}
                                >
                                  <span className="ant-table-header-column">
                                    <div className="ant-table-column-sorters">
                                      <span className="ant-table-column-title">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            the amount
                                          </font>
                                        </font>
                                      </span>
                                      <span className="ant-table-column-sorter">
                                        <div
                                          title="to sort"
                                          className="ant-table-column-sorter-inner ant-table-column-sorter-inner-full"
                                        >
                                          <i
                                            aria-label="Icon: caret-up"
                                            className="anticon anticon-caret-up ant-table-column-sorter-up off"
                                          >
                                            <svg
                                              viewBox="0 0 1024 1024"
                                              data-icon="caret-up"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                              focusable="false"
                                              className
                                            >
                                              <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" />
                                            </svg>
                                          </i>
                                          <i
                                            aria-label="Icon: caret-down"
                                            className="anticon anticon-caret-down ant-table-column-sorter-down off"
                                          >
                                            <svg
                                              viewBox="0 0 1024 1024"
                                              data-icon="caret-down"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                              focusable="false"
                                              className
                                            >
                                              <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                                            </svg>
                                          </i>
                                        </div>
                                      </span>
                                    </div>
                                  </span>
                                </th>
                                <th
                                  key="startPrice"
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
                                            Opening price
                                          </font>
                                        </font>
                                      </span>
                                      <span className="ant-table-column-sorter" />
                                    </div>
                                  </span>
                                </th>
                                <th
                                  key="endPrice"
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
                                            closing price
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
                                            Order Status
                                          </font>
                                        </font>
                                      </span>
                                      <span className="ant-table-column-sorter" />
                                    </div>
                                  </span>
                                </th>
                                <th
                                  key="handEndPrice"
                                  className="ant-table-column-has-actions ant-table-column-has-sorters ant-table-align-center"
                                  style={{ textAlign: "center" }}
                                >
                                  <span className="ant-table-header-column">
                                    <div className="ant-table-column-sorters">
                                      <span className="ant-table-column-title">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            manual closing price
                                          </font>
                                        </font>
                                      </span>
                                      <span className="ant-table-column-sorter">
                                        <div
                                          title="to sort"
                                          className="ant-table-column-sorter-inner ant-table-column-sorter-inner-full"
                                        >
                                          <i
                                            aria-label="Icon: caret-up"
                                            className="anticon anticon-caret-up ant-table-column-sorter-up off"
                                          >
                                            <svg
                                              viewBox="0 0 1024 1024"
                                              data-icon="caret-up"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                              focusable="false"
                                              className
                                            >
                                              <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" />
                                            </svg>
                                          </i>
                                          <i
                                            aria-label="Icon: caret-down"
                                            className="anticon anticon-caret-down ant-table-column-sorter-down off"
                                          >
                                            <svg
                                              viewBox="0 0 1024 1024"
                                              data-icon="caret-down"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                              focusable="false"
                                              className
                                            >
                                              <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                                            </svg>
                                          </i>
                                        </div>
                                      </span>
                                    </div>
                                  </span>
                                </th>
                                <th
                                  key="result_dictText"
                                  className="ant-table-column-has-actions ant-table-column-has-sorters ant-table-align-center"
                                  style={{ textAlign: "center" }}
                                >
                                  <span className="ant-table-header-column">
                                    <div className="ant-table-column-sorters">
                                      <span className="ant-table-column-title">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            result
                                          </font>
                                        </font>
                                      </span>
                                      <span className="ant-table-column-sorter">
                                        <div
                                          title="to sort"
                                          className="ant-table-column-sorter-inner ant-table-column-sorter-inner-full"
                                        >
                                          <i
                                            aria-label="Icon: caret-up"
                                            className="anticon anticon-caret-up ant-table-column-sorter-up off"
                                          >
                                            <svg
                                              viewBox="0 0 1024 1024"
                                              data-icon="caret-up"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                              focusable="false"
                                              className
                                            >
                                              <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" />
                                            </svg>
                                          </i>
                                          <i
                                            aria-label="Icon: caret-down"
                                            className="anticon anticon-caret-down ant-table-column-sorter-down off"
                                          >
                                            <svg
                                              viewBox="0 0 1024 1024"
                                              data-icon="caret-down"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                              focusable="false"
                                              className
                                            >
                                              <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                                            </svg>
                                          </i>
                                        </div>
                                      </span>
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
                           {filter?.length > 0 ? 
                          <>
                            {filter?.map((data, index) => {
                                return (
                                  <>
                                    <tr
                                      className="ant-table-row ant-table-row-level-0"
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
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            {index + 1}
                                          </font>
                                        </font>
                                      </td>
                                      <td
                                        className
                                        style={{ textAlign: "center" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            {data?.productId?._id}
                                          </font>
                                        </font>
                                      </td>
                                      <td
                                        className
                                        style={{ textAlign: "center" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            {data?.createdAt}
                                          </font>
                                        </font>
                                      </td>
                                      <td
                                        className="ant-table-column-has-actions ant-table-column-has-sorters"
                                        style={{ textAlign: "center" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            60 seconds ?
                                          </font>
                                        </font>
                                      </td>
                                      <td
                                        className
                                        style={{ textAlign: "center" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            60 ?
                                          </font>
                                        </font>
                                      </td>
                                      <td
                                        className="ant-table-column-has-actions ant-table-column-has-sorters"
                                        style={{ textAlign: "center" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            {data?.user_address}
                                          </font>
                                        </font>
                                      </td>
                                      <td
                                        className
                                        style={{ textAlign: "center" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            {data?.currency}
                                          </font>
                                        </font>
                                      </td>
                                      <td
                                        className
                                        style={{ textAlign: "center" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            {data?.direction}
                                          </font>
                                        </font>
                                      </td>
                                      <td
                                        className
                                        style={{ textAlign: "center" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            0.15?
                                          </font>
                                        </font>
                                      </td>
                                      <td
                                        className="ant-table-column-has-actions ant-table-column-has-sorters"
                                        style={{ textAlign: "center" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            {data?.amount}
                                          </font>
                                        </font>
                                      </td>
                                      <td
                                        className
                                        style={{ textAlign: "center" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            {data?.opening_price}
                                          </font>
                                        </font>
                                      </td>
                                      <td
                                        className
                                        style={{ textAlign: "center" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            {data?.closed_price}
                                          </font>
                                        </font>
                                      </td>
                                      <td
                                        className
                                        style={{ textAlign: "center" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            {data?.status}
                                          </font>
                                        </font>
                                      </td>
                                      <td
                                        className="ant-table-column-has-actions ant-table-column-has-sorters"
                                        style={{ textAlign: "center" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            ?
                                          </font>
                                        </font>
                                      </td>

                                      <td
                                        className="ant-table-column-has-actions ant-table-column-has-sorters"
                                        style={{ textAlign: "center" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            {data?.result}
                                          </font>
                                        </font>
                                      </td>
                                      <td
                                        className="ant-table-fixed-columns-in-body ant-table-row-cell-break-word"
                                        style={{ textAlign: "center" }}
                                      >
                                        <span data-v-19524346></span>
                                      </td>
                                    </tr>
                                  </>
                                )
                              })}
                          </> 
                          :
                          <>
                            <>No Record Found</>
                                                    </>
                          }
                        
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="ant-table-fixed-right">
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
                                <tr style={{ height: "48.5px" }}>
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
                                {contractOrder?.map((data, index) => {
                                  return (
                                    <EditConractOrder />
                                  );
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
                          1-10 A total of 2288 items
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
                      title={2}
                      tabIndex={0}
                      className="ant-pagination-item ant-pagination-item-2"
                    >
                      <a>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>2</font>
                        </font>
                      </a>
                    </li>
                    <li
                      title={3}
                      tabIndex={0}
                      className="ant-pagination-item ant-pagination-item-3"
                    >
                      <a>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>3</font>
                        </font>
                      </a>
                    </li>
                    <li
                      title={4}
                      tabIndex={0}
                      className="ant-pagination-item ant-pagination-item-4"
                    >
                      <a>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>4</font>
                        </font>
                      </a>
                    </li>
                    <li
                      title={5}
                      tabIndex={0}
                      className="ant-pagination-item ant-pagination-item-5 ant-pagination-item-before-jump-next"
                    >
                      <a>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>5</font>
                        </font>
                      </a>
                    </li>
                    <li
                      title="5 pages back"
                      tabIndex={0}
                      className="ant-pagination-jump-next ant-pagination-jump-next-custom-icon"
                    >
                      <a className="ant-pagination-item-link">
                        <div className="ant-pagination-item-container">
                          <i
                            aria-label="Icon: double-right"
                            className="anticon anticon-double-right ant-pagination-item-link-icon"
                          >
                            <svg
                              viewBox="64 64 896 896"
                              data-icon="double-right"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                              focusable="false"
                              className
                            >
                              <path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" />
                            </svg>
                          </i>
                          <span className="ant-pagination-item-ellipsis">
                            <font style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                •••
                              </font>
                            </font>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li
                      title={229}
                      tabIndex={0}
                      className="ant-pagination-item ant-pagination-item-229"
                    >
                      <a>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>229</font>
                        </font>
                      </a>
                    </li>
                    <li
                      title="next page"
                      tabIndex={0}
                      className=" ant-pagination-next"
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
                          aria-controls="14efe404-8441-404f-f14c-4e37a322c587"
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
                      <div className="ant-pagination-options-quick-jumper">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            jump to
                          </font>
                        </font>
                        <input type="text" />
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>Page</font>
                        </font>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopUp == 1 && (
        <>
          <div class="ant-modal-mask"></div>
          <div
            tabIndex={-1}
            role="dialog"
            aria-labelledby="rcDialogTitle8"
            className="ant-modal-wrap "
          >
            <div
              role="document"
              className="ant-modal"
              style={{ width: "800px", transformOrigin: "55.5px 7px" }}
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
                  onClick={() => {
                    setshowPopUp(0);
                  }}
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
                  <div id="rcDialogTitle8" className="ant-modal-title">
                    <button
                      type="button"
                      className="ant-modal-close ant-modal-close-x ant-btn ant-btn-link ant-btn-icon-only ant-btn-background-ghost"
                      onClick={() => {
                        setshowPopUp(0);
                      }}
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
                    <div className="j-modal-title-row ant-row-flex">
                      <div className="left ant-col">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Add
                          </font>
                        </font>
                      </div>
                      <div className="right ant-col">
                        <button
                          type="button"
                          className="ant-modal-close ant-modal-close-x ant-btn ant-btn-link ant-btn-icon-only ant-btn-background-ghost"
                          fdprocessedid="1bj728"
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
                                    <label title="product" className>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          product
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
                                            aria-controls="44baef9e-e679-46a4-b7b0-722bcb7cf102"
                                            className="ant-select-selection ant-select-selection--single"
                                          >
                                            <div onClick={() => setShowProduct(1)} className="ant-select-selection__rendered">
                                              <div className={addSecondOrder?.product_name ? "ant-select-selection__placeholder1" : "ant-select-selection__placeholder"}
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
                                                    {addSecondOrder?.product_name ? addSecondOrder?.product_name : "Please select a product"}
                                                  </font>
                                                </font>

                                              </div>
                                            </div>
                                            {showProduct == 1 &&
                                              <div className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" style={{ width: '100%', left: '0px', top: '30px', display: 'flex' }}><div id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51" tabIndex={-1} className="ant-select-dropdown-content" style={{ overflow: 'auto', transform: 'translateZ(0px)', width: "100%" }}>
                                                <ul role="listbox" onClick={() => { setShowProduct(0) }} tabIndex={0} className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root">
                                                  {contractProduct?.map((data, index) => {
                                                    return (
                                                      <li onClick={() => { handleInputChange2("product_name", data?.product_name) }} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                        <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                                          <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                              {data?.product_name}
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
                                    <label title="username" className>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
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
                                            aria-controls="f5ba17c7-1d86-4d36-cd6a-34463d0161d0"
                                            className="ant-select-selection ant-select-selection--single"
                                          >
                                            <div onClick={() => { setShowProduct(2) }} className="ant-select-selection__rendered">
                                              <div className={addSecondOrder?.user_address ? "ant-select-selection__placeholder1" : "ant-select-selection__placeholder"}
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
                                                    {addSecondOrder?.user_address ? addSecondOrder?.user_address : "Please select a username"}

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
                                            {showProduct == 2 &&
                                              <div className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" style={{ width: '100%', left: '0px', top: '30px', display: 'flex' }}><div id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51" tabIndex={-1} className="ant-select-dropdown-content" style={{ overflow: 'auto', transform: 'translateZ(0px)', width: "100%" }}>
                                                <ul role="listbox" onClick={() => { setShowProduct(0) }} tabIndex={0} className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root">
                                                  {user?.map((data, index) => {
                                                    return (
                                                      <li onClick={() => { handleInputChange2("user_address", data?.user_address) }} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                        <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                                          <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                              {data?.user_address}
                                                            </font>
                                                          </font>
                                                        </span>
                                                      </li>
                                                    )
                                                  })}
                                                </ul></div></div>
                                            }
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
                                    <label title="Currency" className>
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
                                            aria-controls="13f65edc-f7eb-47e4-a6d1-604e23ae88a8"
                                            className="ant-select-selection ant-select-selection--single"
                                          >
                                            <div onClick={() => { setShowProduct(3) }} className="ant-select-selection__rendered">
                                              <div
                                                className={addSecondOrder?.currency ? "ant-select-selection__placeholder1" : "ant-select-selection__placeholder"}
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
                                                    {addSecondOrder?.currency ? addSecondOrder?.currency : "Please select currency"}

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
                                            {showProduct == 3 &&
                                              <div className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" style={{ width: '100%', left: '0px', top: '30px', display: 'flex' }}><div id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51" tabIndex={-1} className="ant-select-dropdown-content" style={{ overflow: 'auto', transform: 'translateZ(0px)', width: "100%" }}>
                                                <ul role="listbox" onClick={() => { setShowProduct(0) }} tabIndex={0} className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root">
                                                  {contractProduct?.map((data, index) => {
                                                    return (
                                                      <li onClick={() => { handleInputChange2("currency", data?.currency) }} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                        <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                                          <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                              {data?.currency}
                                                            </font>
                                                          </font>
                                                        </span>
                                                      </li>
                                                    )
                                                  })}
                                                </ul></div></div>
                                            }
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
                                    <label title="direction" className>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          direction
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
                                            aria-controls="9d3d8142-2adf-4a50-d9e7-69701f1f7837"
                                            className="ant-select-selection ant-select-selection--single"
                                          >
                                            <div onClick={() => { setShowProduct(4) }} className="ant-select-selection__rendered">
                                              <div className={addSecondOrder?.direction ? "ant-select-selection__placeholder1" : "ant-select-selection__placeholder"}
                                                unselectable="on"
                                                // className="ant-select-selection__placeholder"
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
                                                    {addSecondOrder?.direction ? addSecondOrder?.direction : "Please select direction"}

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
                                            {showProduct == 4 &&
                                              <div className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft" style={{ width: '100%', left: '0px', top: '30px', display: 'flex' }}><div id="edbb712f-f4d4-4f34-88e6-a4a5aa1e1b51" tabIndex={-1} className="ant-select-dropdown-content" style={{ overflow: 'auto', transform: 'translateZ(0px)', width: "100%" }}>
                                                <ul role="listbox" onClick={() => { setShowProduct(0) }} tabIndex={0} className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root">
                                                  {contractOrder?.map((data, index) => {
                                                    return (
                                                      <li onClick={() => { handleInputChange2("direction", data?.direction) }} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
                                                        <span data-v-17b4e467 title="BTC" style={{ display: 'inline-block', width: '100%' }}>
                                                          <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                              {data?.direction}
                                                            </font>
                                                          </font>
                                                        </span>
                                                      </li>
                                                    )
                                                  })}
                                                </ul></div></div>
                                            }
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
                                    <label title="the amount" className>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          the amount
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
                                              placeholder="Please enter the amount"
                                              autoComplete="off"
                                              min={-9007199254740991}
                                              step={1}
                                              type="number"
                                              className="ant-input-number-input"
                                              fdprocessedid="15e0wa"
                                              name="amount"
                                              value={addSecondOrder.amount}
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
                    <button
                      onClick={() => {
                        setshowPopUp(0);
                      }}
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
                    <button onClick={()=>CreateSecondContractOrder()}
                      type="button"
                      className="ant-btn ant-btn-primary"
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
      {showPopUp == 2 && (
        <>
          <div
            data-v-3d25e7a4
            className="j-super-query-modal ant-modal-root j-super-query-modal j-modal-box j-super-query-modal j-modal-box"
            width={1000}
            style={{ top: "5%", /* display: 'none', */ maxHeight: "95%" }}
          >
            <div
              tabIndex={-1}
              role="dialog"
              aria-labelledby="rcDialogTitle13"
              className="ant-modal-wrap "
              style={{}}
            >
              <div
                role="document"
                className="ant-modal"
                style={{ width: "1000px", transformOrigin: "420px 63px" }}
              >
                <div
                  tabIndex={0}
                  aria-hidden="true"
                  style={{ width: "0px", height: "0px", overflow: "hidden" }}
                />
                <div className="ant-modal-content">
                  <button
                    type="button"
                    onClick={() => {
                      setshowPopUp(0);
                    }}
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
                    <div id="rcDialogTitle13" className="ant-modal-title">
                      <div className="j-modal-title-row ant-row-flex">
                        <div className="left ant-col">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Advanced Query Builder
                            </font>
                          </font>
                        </div>
                        {/**/}
                      </div>
                    </div>
                  </div>
                  <div className="ant-modal-body">
                    <div data-v-3d25e7a4 className="ant-spin-nested-loading">
                      <div className="ant-spin-container">
                        <div data-v-3d25e7a4 className="ant-row">
                          <div
                            data-v-3d25e7a4
                            className="ant-col ant-col-sm-24 ant-col-md-19"
                          >
                            <form
                              data-v-3d25e7a4
                              className="ant-form ant-form-inline"
                            >
                              <div
                                data-v-3d25e7a4
                                className="ant-row"
                                style={{ marginBottom: "12px" }}
                              >
                                <div
                                  data-v-3d25e7a4
                                  className="ant-col ant-col-xs-24 ant-col-md-12"
                                >
                                  <div
                                    data-v-3d25e7a4
                                    className="ant-row ant-form-item"
                                    style={{ width: "100%" }}
                                  >
                                    <div className="ant-col ant-col-xs-24 ant-col-md-6 ant-form-item-label">
                                      <label title="filter match" className>
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            filter match
                                          </font>
                                        </font>
                                      </label>
                                    </div>
                                    <div className="ant-col ant-col-xs-24 ant-col-md-18 ant-form-item-control-wrapper">
                                      <div className="ant-form-item-control">
                                        <span className="ant-form-item-children">
                                          <div
                                            data-v-3d25e7a4
                                            tabIndex={0}
                                            className="ant-select ant-select-enabled"
                                            style={{ width: "100%" }}
                                          >
                                            <div
                                              role="combobox"
                                              aria-autocomplete="list"
                                              aria-haspopup="true"
                                              aria-controls="69cb627b-1905-4dd1-d02d-83a057b4ba6a"
                                              className="ant-select-selection ant-select-selection--single"
                                            >
                                              <div className="ant-select-selection__rendered">
                                                <div
                                                  title="AND (all conditions are required to match)"
                                                  className="ant-select-selection-selected-value"
                                                  style={{
                                                    display: "block",
                                                    opacity: 1,
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
                                                      {queryPopUpValue}
                                                    </font>
                                                  </font>
                                                </div>
                                              </div>

                                              <span
                                                unselectable="on"
                                                className="ant-select-arrow"
                                                style={{ userSelect: "none" }}
                                                onClick={() =>
                                                  setQueryPopUp(!queryPopUp)
                                                }
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
                                        <div
                                          className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft"
                                          style={{
                                            width: "283px",
                                            left: "0px",
                                            top: "36px",
                                            display: `${queryPopUp ? "flex" : "none"
                                              }`,
                                          }}
                                        >
                                          <div
                                            id="f8b29f11-d814-40b3-9353-f37dd02dc439"
                                            tabIndex={-1}
                                            className="ant-select-dropdown-content"
                                            style={{
                                              overflow: "auto",
                                              transform: "translateZ(0px)",
                                            }}
                                          >
                                            <ul
                                              role="listbox"
                                              tabIndex={0}
                                              className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root"
                                            >
                                              <li
                                                onClick={(e) =>
                                                  setqueryPopUpValue(
                                                    e.target.textContent
                                                  )
                                                }
                                                role="option"
                                                className="ant-select-dropdown-menu-item"
                                                unselectable="on"
                                                style={{ userSelect: "none" }}
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
                                                    AND (all conditions are
                                                    required to match)
                                                  </font>
                                                </font>
                                              </li>

                                              <li
                                                onClick={(e) =>
                                                  setqueryPopUpValue(
                                                    e.target.textContent
                                                  )
                                                }
                                                role="option"
                                                className="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-selected"
                                                unselectable="on"
                                                style={{ userSelect: "none" }}
                                                aria-selected="true"
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
                                                    OR (any one of the
                                                    conditions matches)
                                                  </font>
                                                </font>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>

                                        {/**/}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                data-v-3d25e7a4
                                className="ant-row-flex"
                                style={{
                                  marginLeft: "-8px",
                                  marginRight: "-8px",
                                  marginBottom: "10px",
                                }}
                              >
                                <div
                                  data-v-3d25e7a4
                                  className="ant-col ant-col-xs-24 ant-col-md-8"
                                  style={{
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                    marginBottom: "12px",
                                  }}
                                >
                                  <span
                                    data-v-3d25e7a4
                                    role="combobox"
                                    aria-haspopup="listbox"
                                    tabIndex={0}
                                    className="ant-select ant-select-enabled ant-select-allow-clear"
                                    style={{ width: "100%" }}
                                  >
                                    <span className="ant-select-selection ant-select-selection--single">
                                      <span className="ant-select-selection__rendered">
                                        <span className="ant-select-selection__placeholder">
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            <font
                                              style={{
                                                verticalAlign: "inherit",
                                              }}
                                            >
                                              {selectQueryFieldValue}
                                            </font>
                                          </font>
                                        </span>
                                      </span>

                                      <span
                                        className="ant-select-arrow"
                                        style={{ outline: "none" }}
                                      >
                                        <i
                                          onClick={() =>
                                            setSelectQueryField(
                                              !selectQueryField
                                            )
                                          }
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
                                      {selectQueryField && (
                                        <div
                                          className="ant-select-dropdown ant-select-tree-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft"
                                          style={{
                                            maxHeight: "400px",
                                            overflow: "auto",
                                            left: "0px",
                                            top: "35px",
                                            minWidth: "241px",
                                          }}
                                        >
                                          <div
                                            role="listbox"
                                            id="rc-tree-select-list_10"
                                            tabIndex={-1}
                                            className="ant-select-dropdown-content"
                                          >
                                            <span className="ant-select-dropdown-search">
                                              <span className="ant-select-search__field__wrap">
                                                <input
                                                  type="text"
                                                  aria-label="filter select"
                                                  aria-autocomplete="list"
                                                  aria-controls="rc-tree-select-list_10"
                                                  aria-multiline="false"
                                                  className="ant-select-search__field"
                                                />

                                                <span className="ant-select-search__field__mirror">
                                                  &nbsp;
                                                </span>
                                              </span>
                                            </span>
                                            <ul
                                              role="tree"
                                              unselectable="on"
                                              className="ant-select-tree"
                                            >
                                              <li
                                                role="treeitem"
                                                className="ant-select-tree-treenode-switcher-open"
                                                onClick={(e) =>
                                                  setselectQueryFieldValue(
                                                    e.target.textContent
                                                  )
                                                }
                                              >
                                                <span className="ant-select-tree-switcher ant-select-tree-switcher-noop" />

                                                <span
                                                  title="product name"
                                                  className="ant-select-tree-node-content-wrapper ant-select-tree-node-content-wrapper-normal"
                                                >
                                                  <span className="ant-select-tree-title">
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
                                                        product name
                                                      </font>
                                                    </font>
                                                  </span>
                                                </span>
                                              </li>

                                              <li
                                                role="treeitem"
                                                className="ant-select-tree-treenode-switcher-open"
                                                onClick={(e) =>
                                                  setselectQueryFieldValue(
                                                    e.target.textContent
                                                  )
                                                }
                                              >
                                                <span className="ant-select-tree-switcher ant-select-tree-switcher-noop" />

                                                <span
                                                  title="Delivery time (seconds)"
                                                  className="ant-select-tree-node-content-wrapper ant-select-tree-node-content-wrapper-normal"
                                                >
                                                  <span className="ant-select-tree-title">
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
                                                        Delivery time (seconds)
                                                      </font>
                                                    </font>
                                                  </span>
                                                </span>
                                              </li>

                                              <li
                                                role="treeitem"
                                                className="ant-select-tree-treenode-switcher-open"
                                                onClick={(e) =>
                                                  setselectQueryFieldValue(
                                                    e.target.textContent
                                                  )
                                                }
                                              >
                                                <span className="ant-select-tree-switcher ant-select-tree-switcher-noop" />

                                                <span
                                                  title="odds"
                                                  className="ant-select-tree-node-content-wrapper ant-select-tree-node-content-wrapper-normal"
                                                >
                                                  <span className="ant-select-tree-title">
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
                                                        odds
                                                      </font>
                                                    </font>
                                                  </span>
                                                </span>
                                              </li>

                                              <li
                                                role="treeitem"
                                                className="ant-select-tree-treenode-switcher-open"
                                                onClick={(e) =>
                                                  setselectQueryFieldValue(
                                                    e.target.textContent
                                                  )
                                                }
                                              >
                                                <span className="ant-select-tree-switcher ant-select-tree-switcher-noop" />

                                                <span
                                                  title="maximum amount"
                                                  className="ant-select-tree-node-content-wrapper ant-select-tree-node-content-wrapper-normal"
                                                >
                                                  <span className="ant-select-tree-title">
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
                                                        maximum amount
                                                      </font>
                                                    </font>
                                                  </span>
                                                </span>
                                              </li>

                                              <li
                                                role="treeitem"
                                                className="ant-select-tree-treenode-switcher-open"
                                                onClick={(e) =>
                                                  setselectQueryFieldValue(
                                                    e.target.textContent
                                                  )
                                                }
                                              >
                                                <span className="ant-select-tree-switcher ant-select-tree-switcher-noop" />

                                                <span
                                                  title="minimum amount"
                                                  className="ant-select-tree-node-content-wrapper ant-select-tree-node-content-wrapper-normal"
                                                >
                                                  <span className="ant-select-tree-title">
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
                                                        minimum amount
                                                      </font>
                                                    </font>
                                                  </span>
                                                </span>
                                              </li>

                                              <li
                                                role="treeitem"
                                                className="ant-select-tree-treenode-switcher-open"
                                                onClick={(e) =>
                                                  setselectQueryFieldValue(
                                                    e.target.textContent
                                                  )
                                                }
                                              >
                                                <span className="ant-select-tree-switcher ant-select-tree-switcher-noop" />

                                                <span
                                                  title="Remark"
                                                  className="ant-select-tree-node-content-wrapper ant-select-tree-node-content-wrapper-normal"
                                                >
                                                  <span className="ant-select-tree-title">
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
                                                        Remark
                                                      </font>
                                                    </font>
                                                  </span>
                                                </span>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      )}
                                    </span>
                                  </span>
                                </div>
                                <div
                                  className="ant-select-dropdown ant-select-tree-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft"
                                  style={{
                                    display: `${queryFieldPopUp ? "flex" : "none"
                                      }`,
                                    maxHeight: "400px",
                                    overflow: "auto",
                                    left: "0px",
                                    top: "85px",
                                    minWidth: "240px",
                                  }}
                                >
                                  <div
                                    role="listbox"
                                    id="rc-tree-select-list_25"
                                    tabIndex={-1}
                                    className="ant-select-dropdown-content"
                                  >
                                    <span className="ant-select-dropdown-search">
                                      <span className="ant-select-search__field__wrap">
                                        <input
                                          type="text"
                                          aria-label="filter select"
                                          aria-autocomplete="list"
                                          aria-controls="rc-tree-select-list_25"
                                          aria-multiline="false"
                                          className="ant-select-search__field"
                                        />

                                        <span className="ant-select-search__field__mirror">
                                          &nbsp;
                                        </span>
                                      </span>
                                    </span>
                                    <ul
                                      role="tree"
                                      unselectable="on"
                                      className="ant-select-tree"
                                    >
                                      <li
                                        role="treeitem"
                                        className="ant-select-tree-treenode-switcher-open"
                                      >
                                        <span className="ant-select-tree-switcher ant-select-tree-switcher-noop" />

                                        <span
                                          title="product name"
                                          className="ant-select-tree-node-content-wrapper ant-select-tree-node-content-wrapper-normal"
                                        >
                                          <span className="ant-select-tree-title">
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
                                                product name
                                              </font>
                                            </font>
                                          </span>
                                        </span>
                                      </li>

                                      <li
                                        role="treeitem"
                                        className="ant-select-tree-treenode-switcher-open"
                                      >
                                        <span className="ant-select-tree-switcher ant-select-tree-switcher-noop" />

                                        <span
                                          title="Delivery time (seconds)"
                                          className="ant-select-tree-node-content-wrapper ant-select-tree-node-content-wrapper-normal"
                                        >
                                          <span className="ant-select-tree-title">
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
                                                Delivery time (seconds)
                                              </font>
                                            </font>
                                          </span>
                                        </span>
                                      </li>

                                      <li
                                        role="treeitem"
                                        className="ant-select-tree-treenode-switcher-open"
                                      >
                                        <span className="ant-select-tree-switcher ant-select-tree-switcher-noop" />

                                        <span
                                          title="odds"
                                          className="ant-select-tree-node-content-wrapper ant-select-tree-node-content-wrapper-normal"
                                        >
                                          <span className="ant-select-tree-title">
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
                                                odds
                                              </font>
                                            </font>
                                          </span>
                                        </span>
                                      </li>

                                      <li
                                        role="treeitem"
                                        className="ant-select-tree-treenode-switcher-open"
                                      >
                                        <span className="ant-select-tree-switcher ant-select-tree-switcher-noop" />

                                        <span
                                          title="maximum amount"
                                          className="ant-select-tree-node-content-wrapper ant-select-tree-node-content-wrapper-normal"
                                        >
                                          <span className="ant-select-tree-title">
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
                                                maximum amount
                                              </font>
                                            </font>
                                          </span>
                                        </span>
                                      </li>

                                      <li
                                        role="treeitem"
                                        className="ant-select-tree-treenode-switcher-open"
                                      >
                                        <span className="ant-select-tree-switcher ant-select-tree-switcher-noop" />

                                        <span
                                          title="minimum amount"
                                          className="ant-select-tree-node-content-wrapper ant-select-tree-node-content-wrapper-normal"
                                        >
                                          <span className="ant-select-tree-title">
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
                                                minimum amount
                                              </font>
                                            </font>
                                          </span>
                                        </span>
                                      </li>

                                      <li
                                        role="treeitem"
                                        className="ant-select-tree-treenode-switcher-open"
                                      >
                                        <span className="ant-select-tree-switcher ant-select-tree-switcher-noop" />

                                        <span
                                          title="Remark"
                                          className="ant-select-tree-node-content-wrapper ant-select-tree-node-content-wrapper-normal"
                                        >
                                          <span className="ant-select-tree-title">
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
                                                Remark
                                              </font>
                                            </font>
                                          </span>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <div
                                  data-v-3d25e7a4
                                  className="ant-col ant-col-xs-24 ant-col-md-4"
                                  style={{
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                    marginBottom: "12px",
                                  }}
                                >
                                  <div
                                    data-v-3d25e7a4
                                    tabIndex={0}
                                    className="ant-select ant-select-enabled"
                                  >
                                    <div
                                      role="combobox"
                                      aria-autocomplete="list"
                                      aria-haspopup="true"
                                      aria-controls="c853abc9-e967-4e46-d75f-a709e0587925"
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
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            <font
                                              style={{
                                                verticalAlign: "inherit",
                                              }}
                                            >
                                              matching rules
                                            </font>
                                          </font>
                                        </div>
                                        <div
                                          title="equal"
                                          className="ant-select-selection-selected-value"
                                          style={{
                                            display: "block",
                                            opacity: 1,
                                          }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            <font
                                              style={{
                                                verticalAlign: "inherit",
                                              }}
                                            >
                                              {QueryEqualto}
                                            </font>
                                          </font>
                                        </div>
                                      </div>
                                      {showQueryEqualto && (
                                        <div
                                          className="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft"
                                          style={{
                                            width: "110px",
                                            left: "0px",
                                            top: "35px",
                                            display: "flex",
                                          }}
                                        >
                                          <div
                                            id="19513122-2649-4ce2-c6e5-003c222ab6a0"
                                            tabIndex={-1}
                                            className="ant-select-dropdown-content"
                                            style={{
                                              overflow: "auto",
                                              transform: "translateZ(0px)",
                                            }}
                                          >
                                            <ul
                                              role="listbox"
                                              tabIndex={0}
                                              className="ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root"
                                            >
                                              <li
                                                role="option"
                                                aria-selected="true"
                                                className="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-selected"
                                                unselectable="on"
                                                style={{ userSelect: "none" }}
                                                onClick={(e) =>
                                                  setQueryEqualto(
                                                    e.target.textContent
                                                  )
                                                }
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
                                                    equal
                                                  </font>
                                                </font>
                                              </li>

                                              <li
                                                role="option"
                                                className="ant-select-dropdown-menu-item"
                                                unselectable="on"
                                                style={{ userSelect: "none" }}
                                                onClick={(e) =>
                                                  setQueryEqualto(
                                                    e.target.textContent
                                                  )
                                                }
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
                                                    Include
                                                  </font>
                                                </font>
                                              </li>

                                              <li
                                                role="option"
                                                className="ant-select-dropdown-menu-item"
                                                unselectable="on"
                                                style={{ userSelect: "none" }}
                                                onClick={(e) =>
                                                  setQueryEqualto(
                                                    e.target.textContent
                                                  )
                                                }
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
                                                    start with
                                                  </font>
                                                </font>
                                              </li>

                                              <li
                                                onClick={(e) =>
                                                  setQueryEqualto(
                                                    e.target.textContent
                                                  )
                                                }
                                                role="option"
                                                className="ant-select-dropdown-menu-item"
                                                unselectable="on"
                                                style={{ userSelect: "none" }}
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
                                                    ends with
                                                  </font>
                                                </font>
                                              </li>

                                              <li
                                                role="option"
                                                className="ant-select-dropdown-menu-item"
                                                unselectable="on"
                                                style={{ userSelect: "none" }}
                                                onClick={(e) =>
                                                  setQueryEqualto(
                                                    e.target.textContent
                                                  )
                                                }
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
                                                    in
                                                  </font>
                                                </font>
                                              </li>

                                              <li
                                                role="option"
                                                className="ant-select-dropdown-menu-item"
                                                unselectable="on"
                                                style={{ userSelect: "none" }}
                                                onClick={(e) =>
                                                  setQueryEqualto(
                                                    e.target.textContent
                                                  )
                                                }
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
                                                    not equal to
                                                  </font>
                                                </font>
                                              </li>

                                              <li
                                                role="option"
                                                className="ant-select-dropdown-menu-item"
                                                unselectable="on"
                                                style={{ userSelect: "none" }}
                                                onClick={(e) =>
                                                  setQueryEqualto(
                                                    e.target.textContent
                                                  )
                                                }
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
                                                    more than the
                                                  </font>
                                                </font>
                                              </li>

                                              <li
                                                role="option"
                                                className="ant-select-dropdown-menu-item"
                                                unselectable="on"
                                                style={{ userSelect: "none" }}
                                                onClick={(e) =>
                                                  setQueryEqualto(
                                                    e.target.textContent
                                                  )
                                                }
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
                                                    greater or equal to
                                                  </font>
                                                </font>
                                              </li>

                                              <li
                                                role="option"
                                                className="ant-select-dropdown-menu-item"
                                                unselectable="on"
                                                style={{ userSelect: "none" }}
                                                onClick={(e) =>
                                                  setQueryEqualto(
                                                    e.target.textContent
                                                  )
                                                }
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
                                                    less than
                                                  </font>
                                                </font>
                                              </li>

                                              <li
                                                role="option"
                                                className="ant-select-dropdown-menu-item"
                                                unselectable="on"
                                                style={{ userSelect: "none" }}
                                                onClick={(e) =>
                                                  setQueryEqualto(
                                                    e.target.textContent
                                                  )
                                                }
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
                                                    less than or equal to
                                                  </font>
                                                </font>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      )}

                                      <span
                                        unselectable="on"
                                        className="ant-select-arrow"
                                        style={{ userSelect: "none" }}
                                      >
                                        <i
                                          onClick={() =>
                                            setshowQueryEqualto(
                                              !showQueryEqualto
                                            )
                                          }
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
                                </div>

                                <div
                                  data-v-3d25e7a4
                                  className="ant-col ant-col-xs-24 ant-col-md-8"
                                  style={{
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                    marginBottom: "12px",
                                  }}
                                >
                                  <input
                                    data-v-3d25e7a4
                                    placeholder="Please enter a value"
                                    type="text"
                                    className="ant-input"
                                  />
                                </div>
                                <div
                                  data-v-3d25e7a4
                                  className="ant-col ant-col-xs-0 ant-col-md-4"
                                  style={{
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                    marginBottom: "12px",
                                  }}
                                >
                                  <button
                                    data-v-3d25e7a4
                                    type="button"
                                    className="ant-btn ant-btn-icon-only"
                                  >
                                    <i
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
                                  &nbsp;
                                  <button
                                    data-v-3d25e7a4
                                    type="button"
                                    className="ant-btn ant-btn-icon-only"
                                  >
                                    <i
                                      aria-label="Icon: minus"
                                      className="anticon anticon-minus"
                                    >
                                      <svg
                                        viewBox="64 64 896 896"
                                        data-icon="minus"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        focusable="false"
                                        className
                                      >
                                        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                                      </svg>
                                    </i>
                                  </button>
                                </div>

                                <div
                                  data-v-3d25e7a4
                                  className="ant-col ant-col-xs-24 ant-col-md-0"
                                  style={{
                                    paddingLeft: "8px",
                                    paddingRight: "8px",
                                    marginBottom: "12px",
                                    textAlign: "right",
                                  }}
                                >
                                  <button
                                    data-v-3d25e7a4
                                    type="button"
                                    className="ant-btn ant-btn-icon-only"
                                  >
                                    <i
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
                                  &nbsp;
                                  <button
                                    data-v-3d25e7a4
                                    type="button"
                                    className="ant-btn ant-btn-icon-only"
                                  >
                                    <i
                                      aria-label="Icon: minus"
                                      className="anticon anticon-minus"
                                    >
                                      <svg
                                        viewBox="64 64 896 896"
                                        data-icon="minus"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        focusable="false"
                                        className
                                      >
                                        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                                      </svg>
                                    </i>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div
                            data-v-3d25e7a4
                            className="ant-col ant-col-sm-24 ant-col-md-5"
                          >
                            <div
                              data-v-3d25e7a4
                              className="j-super-query-history-card ant-card ant-card-bordered"
                            >
                              <div className="ant-card-head">
                                <div className="ant-card-head-wrapper">
                                  <div className="ant-card-head-title">
                                    <div data-v-3d25e7a4>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          saved query
                                        </font>
                                      </font>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ant-card-body">
                                <div
                                  data-v-3d25e7a4
                                  className="j-super-query-history-empty ant-empty"
                                >
                                  <div className="ant-empty-image">
                                    <svg
                                      width={184}
                                      height={152}
                                      viewBox="0 0 184 152"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g fill="none" fillrule="evenodd">
                                        <g transform="translate(24 31.67)">
                                          <ellipse
                                            fillopacity=".8"
                                            fill="#F5F5F7"
                                            cx="67.797"
                                            cy="106.89"
                                            rx="67.797"
                                            ry="12.668"
                                          />
                                          <path
                                            d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                                            fill="#AEB8C2"
                                          />
                                          <path
                                            d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
                                            fill="url(#linearGradient-1)"
                                            transform="translate(13.56)"
                                          />
                                          <path
                                            d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                                            fill="#F5F5F7"
                                          />
                                          <path
                                            d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                                            fill="#DCE0E6"
                                          />
                                        </g>
                                        <path
                                          d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                                          fill="#DCE0E6"
                                        />
                                        <g
                                          transform="translate(149.65 15.383)"
                                          fill="#FFF"
                                        >
                                          <ellipse
                                            cx="20.654"
                                            cy="3.167"
                                            rx="2.849"
                                            ry="2.815"
                                          />
                                          <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                  <p className="ant-empty-description">
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font
                                        style={{ verticalAlign: "inherit" }}
                                      >
                                        no queries saved
                                      </font>
                                    </font>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**/}
                  </div>
                  <div className="ant-modal-footer">
                    <div data-v-3d25e7a4 style={{ float: "left" }}>
                      <button data-v-3d25e7a4 type="button" className="ant-btn">
                        <span>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              reset
                            </font>
                          </font>
                        </span>
                      </button>
                      <button data-v-3d25e7a4 type="button" className="ant-btn">
                        <span>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              save query
                            </font>
                          </font>
                        </span>
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        setshowPopUp(0);
                      }}
                      data-v-3d25e7a4
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
                      data-v-3d25e7a4
                      type="button"
                      className="ant-btn ant-btn-primary"
                    >
                      <span>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Inquire
                          </font>
                        </font>
                      </span>
                    </button>
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

export default SecondContractOrder;
