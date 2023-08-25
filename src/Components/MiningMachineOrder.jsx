import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context/MyContext";
import EditMiningOrder from "../Forms/EditMiningOrder";
import { toast } from "react-hot-toast";
import apis from "../Services";

function MiningMachineOrder() {
const { miningOrder,getMiningProductProduct, miningProduct} =useContext(MyContext);

const [filter ,setfilter] = useState(miningOrder) 

useEffect(()=>{
  getMiningProductProduct();
},[])

useEffect(()=>{
  if(miningOrder.length > 0)
  {
    setfilter(miningOrder)
  }
},[miningOrder])


const [showAdd, setShowAdd] = useState(false);
const [showProduct, setShowProduct] = useState(0);

const [addMiningOrder, setMiningOrder] = useState({
  user_address:"",
  product_name:"",
  productId: "",
  userId: "",
  amount: "",
});

console.log(miningProduct,miningOrder);

const [showSearch, setShowSearch] = useState(0)
const [search, SetSearch] = useState({
  product_name: "",
  productId:"",
  user_address: "",
  status: "",
  result: "",
  createdAt: "",
});

const handleInputChange2 = (name, value) => {
    setMiningOrder((prevState) => ({
      ...prevState,
      [name]: value, // Update the corresponding property based on the input name
    }));
};

// Event handler to update the state on input change
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMiningOrder((prevState) => ({
        ...prevState,
        [name]: value, // Update the corresponding property based on the input name
    }));
};




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


const CreateMiningProduct = async () => {

  if (!addMiningOrder?.productId == "" && !addMiningOrder?.userId == "" && !addMiningOrder?.amount == "") {

      const resut = await apis.getSearchedMiningOrder({
          "productId": addMiningOrder?.productId,
          "userId": addMiningOrder?.userId,
          "amount": addMiningOrder?.amount,  
      })
      toast.success(resut.data.message, { id: 1 });
      setMiningOrder("")
      setShowAdd(false)
  } else {
      toast.error("Please input data all required fields", { id: 1 });
  }
}


const getSearchedMiningOrder = async ()=> {
  if(!search?.productId=="" && !search?.user_address=="" && !search?.status =="" &&
  !search?.createdAt==""){

    try {
      const result = await apis.getSearchedMiningOrder({
        "productId": search.productId,
        "user_address":search.user_address,
        "status":search.status,
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




return (
    <div>
      <div data-v-c86d1862 className="ant-card">
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
                            {console.log(miningProduct)}
                            {miningProduct?.map((data, index) => {
                              return (
                                  <li onClick={() => { handleInputChange3("product_name",data?.product_name), handleInputChange3("productId",data?._id)}} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
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
                    <button onClick={()=>getSearchedMiningOrder()}
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
                    <button onClick={()=>setfilter(miningOrder)}
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
          
          
          
          <div data-v-c86d1862 className="table-operator">
            <button onClick={() => setShowAdd(true)}
              data-v-c86d1862
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
          </div>
          <div data-v-c86d1862>
            <div
              data-v-c86d1862
              className="ant-alert ant-alert-info"
              style={{ marginBottom: "16px" }}
            >
              <i
                data-v-c86d1862
                className="anticon anticon-info-circle ant-alert-icon"
              />
              <font style={{ verticalAlign: "inherit" }} />
              <a data-v-c86d1862 style={{ fontWeight: 600 }}>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>0 </font>
                </font>
              </a>
              <font style={{ verticalAlign: "inherit" }}>
                <a data-v-c86d1862 style={{ marginLeft: "24px" }}>
                  <font style={{ verticalAlign: "inherit" }}>items </font>
                </a>
                <font style={{ verticalAlign: "inherit" }}></font>
                <font style={{ verticalAlign: "inherit" }}>
                  have been selected Clear
                </font>
              </font>
              <a data-v-c86d1862 style={{ marginLeft: "24px" }}>
                <font style={{ verticalAlign: "inherit" }} />
              </a>
            </div>
            <div
              data-v-c86d1862
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
                                  key="userName"
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
                                            username
                                          </font>
                                        </font>
                                      </span>
                                      <span className="ant-table-column-sorter" />
                                    </div>
                                  </span>
                                </th>
                                <th
                                  key="number"
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
                                            Number of mining machines
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
                                  key="prod.detail.unitPrice"
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
                                            unit price
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
                                  key="cycle"
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
                                            remaining cycle
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
                                  key="prod.cycle"
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
                                            cycle
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
                                            product name
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
                                  key="prodIncome"
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
                                            product revenue
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
                                  key="todayIncome"
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
                                            Today's Earnings
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
                                  key="totalIncome"
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
                                            Total revenue
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
                                  key="status_dictText"
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
                                            Order Status
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
                            {filter.length > 0 ? 
                            
                            filter?.map((data,index)=>{
                              return(
                              <tr
                                className="ant-table-row ant-table-row-level-0"
                                data-row-key={1669911332563509250}
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
                                      {data?.createdAt}
                                    </font>
                                  </font>
                                </td>
                                <td className style={{ textAlign: "center" }}>
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      {data?.userId?.user_address}
                                    </font>
                                  </font>
                                </td>
                                <td
                                  className="ant-table-column-has-actions ant-table-column-has-sorters"
                                  style={{ textAlign: "center" }}
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                     1
                                    </font>
                                  </font>
                                </td>
                                <td
                                  className="ant-table-column-has-actions ant-table-column-has-sorters"
                                  style={{ textAlign: "center" }}
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                    {data?.productId?.unit_price}
                                    </font>
                                  </font>
                                </td>
                                <td
                                  className="ant-table-column-has-actions ant-table-column-has-sorters"
                                  style={{ textAlign: "center" }}
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                    {data?.amount}
                                    </font>
                                  </font>
                                </td>
                                <td
                                  className="ant-table-column-has-actions ant-table-column-has-sorters"
                                  style={{ textAlign: "center" }}
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      86
                                    </font>
                                  </font>
                                </td>
                                <td
                                  className="ant-table-column-has-actions ant-table-column-has-sorters"
                                  style={{ textAlign: "center" }}
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                  {data?.productId?.product_life}
                                    </font>
                                  </font>
                                </td>
                                <td
                                  className="ant-table-column-has-actions ant-table-column-has-sorters"
                                  style={{ textAlign: "center" }}
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                    {data?.productId?.product_name}
                                    
                                    </font>
                                  </font>
                                </td>
                                <td
                                  className="ant-table-column-has-actions ant-table-column-has-sorters"
                                  style={{ textAlign: "center" }}
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      12-16.5?
                                    </font>
                                  </font>
                                </td>
                                <td
                                  className="ant-table-column-has-actions ant-table-column-has-sorters"
                                  style={{ textAlign: "center" }}
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      12.41?
                                    </font>
                                  </font>
                                </td>
                                <td
                                  className="ant-table-column-has-actions ant-table-column-has-sorters"
                                  style={{ textAlign: "center" }}
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      56.93?
                                    </font>
                                  </font>
                                </td>
                                <td
                                  className="ant-table-column-has-actions ant-table-column-has-sorters"
                                  style={{ textAlign: "center" }}
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                   {data?.status}
                                    </font>
                                  </font>
                                </td>
                                <td
                                  className="ant-table-fixed-columns-in-body ant-table-row-cell-break-word"
                                  style={{ textAlign: "center" }}
                                >
                                  {/* <span data-v-c86d1862>
                                    <a data-v-c86d1862>
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
                                      data-v-c86d1862
                                      role="separator"
                                      className="ant-divider ant-divider-vertical"
                                    />
                                    <a
                                      data-v-c86d1862
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
                                        data-v-c86d1862
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
                                  </span> */}
                                </td>
                              </tr>
                              )
                            })
                            :
                            <>Record Not Found</>
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
                              {miningOrder?.map((data,index)=>{
                              return(
                              <EditMiningOrder data={data} index={index}/>
                              )})}

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
                          1-10 total 88 items
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
                      className="ant-pagination-item ant-pagination-item-5"
                    >
                      <a>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>5</font>
                        </font>
                      </a>
                    </li>
                    <li
                      title={6}
                      tabIndex={0}
                      className="ant-pagination-item ant-pagination-item-6"
                    >
                      <a>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>6</font>
                        </font>
                      </a>
                    </li>
                    <li
                      title={7}
                      tabIndex={0}
                      className="ant-pagination-item ant-pagination-item-7"
                    >
                      <a>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>7</font>
                        </font>
                      </a>
                    </li>
                    <li
                      title={8}
                      tabIndex={0}
                      className="ant-pagination-item ant-pagination-item-8"
                    >
                      <a>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>8</font>
                        </font>
                      </a>
                    </li>
                    <li
                      title={9}
                      tabIndex={0}
                      className="ant-pagination-item ant-pagination-item-9"
                    >
                      <a>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>9</font>
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
                          aria-controls="3044df80-1d57-409e-a71a-9dbd6f571786"
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
          {/**/}
        </div>
      </div>

      {showAdd &&
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
                                    <span onClick={() => setShowAdd(false)}
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
                                                                                                    {miningOrder?.map((data, index) => {
                                                                                                        return (
                                                                                                            <li onClick={() => { handleInputChange2("productId", data?.productId?._id),handleInputChange2("product_name",data?.productId?.product_name) }} role="option" className="ant-select-dropdown-menu-item" unselectable="on" style={{ userSelect: 'none' }}>
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
                                        <button onClick={() => setShowAdd(false)}
                                            type="button" className="ant-btn" fdprocessedid="xgbx4o">
                                            <span>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>closure</font>
                                                </font>
                                            </span>
                                        </button>
                                        <button onClick={()=>CreateMiningProduct()}
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
      }


    </div>
  );
}

export default MiningMachineOrder;
