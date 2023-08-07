import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext'
import EditWalletManagement from '../Forms/EditWalletManagement'

const WalletManagement = () => {

const{alluserWallets}=useContext(MyContext)


return (

<main
    className="ant-layout-content"
    style={{ height: "100%", paddingTop: "0px" }}
  >
    <ul
      data-v-99248454
      role="menu"
      className="contextmenu ant-menu ant-menu-vertical ant-menu-root ant-menu-light"
      style={{ left: "658px", top: "77px", zIndex: 9999, display: "none" }}
    >
      <li data-v-99248454 role="menuitem" className="ant-menu-item">
        <i
          data-v-99248454
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
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>to refresh</font>
        </font>
      </li>
      <li data-v-99248454 role="menuitem" className="ant-menu-item">
        <i
          data-v-99248454
          aria-label="Icon: arrow-left"
          className="anticon anticon-arrow-left"
        >
          <svg
            viewBox="64 64 896 896"
            data-icon="arrow-left"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className
          >
            <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
          </svg>
        </i>
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>close left</font>
        </font>
      </li>
      <li data-v-99248454 role="menuitem" className="ant-menu-item">
        <i
          data-v-99248454
          aria-label="Icon: arrow-right"
          className="anticon anticon-arrow-right"
        >
          <svg
            viewBox="64 64 896 896"
            data-icon="arrow-right"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className
          >
            <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z" />
          </svg>
        </i>
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>close right</font>
        </font>
      </li>
      <li data-v-99248454 role="menuitem" className="ant-menu-item">
        <i
          data-v-99248454
          aria-label="icon: close"
          className="anticon anticon-close"
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
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>close other</font>
        </font>
      </li>
    </ul>
    <div style={{ margin: "12px 12px 0px" }}>
      <div className="main">
        {/**/}
        <div data-v-3a3b3d16 className="ant-card">
          <div className="ant-card-body">
            <div data-v-3a3b3d16 className="table-page-search-wrapper">
              <form data-v-3a3b3d16 className="ant-form ant-form-inline">
                <div
                  data-v-3a3b3d16
                  className="ant-row"
                  style={{ marginLeft: "-12px", marginRight: "-12px" }}
                >
                  <div
                    data-v-3a3b3d16
                    className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-7 ant-col-xl-6"
                    style={{ paddingLeft: "12px", paddingRight: "12px" }}
                  >
                    <div data-v-3a3b3d16 className="ant-row ant-form-item">
                      <div className="ant-col ant-form-item-label">
                        <label title="username" className>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              username
                            </font>
                          </font>
                        </label>
                      </div>
                      <div className="ant-col ant-form-item-control-wrapper">
                        <div className="ant-form-item-control">
                          <span className="ant-form-item-children">
                            <input
                              data-v-3a3b3d16
                              placeholder="please enter user name"
                              type="text"
                              className="ant-input"
                              fdprocessedid="gnz2kd"
                            />
                          </span>
                          {/**/}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-3a3b3d16
                    className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-7 ant-col-xl-6"
                    style={{ paddingLeft: "12px", paddingRight: "12px" }}
                  >
                    <div data-v-3a3b3d16 className="ant-row ant-form-item">
                      <div className="ant-col ant-form-item-label">
                        <label title="actual name" className>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              actual name
                            </font>
                          </font>
                        </label>
                      </div>
                      <div className="ant-col ant-form-item-control-wrapper">
                        <div className="ant-form-item-control">
                          <span className="ant-form-item-children">
                            <div
                              data-v-5a3a4f6c
                              data-v-3a3b3d16
                              tabIndex={0}
                              className="ant-select ant-select-enabled ant-select-allow-clear"
                              style={{ width: "100%" }}
                            >
                              <div
                                role="combobox"
                                aria-autocomplete="list"
                                aria-haspopup="true"
                                aria-controls="4a3ff67d-2249-4bc7-9d51-1850eb19d98f"
                                className="ant-select-selection ant-select-selection--single"
                              >
                                <div className="ant-select-selection__rendered">
                                  <div
                                    unselectable="on"
                                    className="ant-select-selection__placeholder"
                                    style={{
                                      display: "block",
                                      userSelect: "none",
                                    }}
                                  >
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font style={{ verticalAlign: "inherit" }}>
                                        Please choose your real name
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
                  <div
                    data-v-3a3b3d16
                    className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-7 ant-col-xl-6"
                    style={{ paddingLeft: "12px", paddingRight: "12px" }}
                  >
                    <div data-v-3a3b3d16 className="ant-row ant-form-item">
                      <div className="ant-col ant-form-item-label">
                        <label title="user agent" className>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              user agent
                            </font>
                          </font>
                        </label>
                      </div>
                      <div className="ant-col ant-form-item-control-wrapper">
                        <div className="ant-form-item-control">
                          <span className="ant-form-item-children">
                            <div
                              data-v-17b4e467
                              data-v-3a3b3d16
                              tabIndex={0}
                              className="ant-select ant-select-enabled"
                            >
                              <div
                                role="combobox"
                                aria-autocomplete="list"
                                aria-haspopup="true"
                                aria-controls="62567e65-3cd8-4082-9b9f-e8ef424221e8"
                                className="ant-select-selection ant-select-selection--single"
                              >
                                <div className="ant-select-selection__rendered">
                                  <div
                                    unselectable="on"
                                    className="ant-select-selection__placeholder"
                                    style={{
                                      display: "block",
                                      userSelect: "none",
                                    }}
                                  >
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font style={{ verticalAlign: "inherit" }}>
                                        Please choose an agent
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
                          {/**/}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-3a3b3d16
                    className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-7 ant-col-xl-6"
                    style={{ paddingLeft: "12px", paddingRight: "12px" }}
                  >
                    <div data-v-3a3b3d16 className="ant-row ant-form-item">
                      <div className="ant-col ant-form-item-label">
                        <label title="account type" className>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              account type
                            </font>
                          </font>
                        </label>
                      </div>
                      <div className="ant-col ant-form-item-control-wrapper">
                        <div className="ant-form-item-control">
                          <span className="ant-form-item-children">
                            <div
                              data-v-17b4e467
                              data-v-3a3b3d16
                              tabIndex={0}
                              className="ant-select ant-select-enabled"
                            >
                              <div
                                role="combobox"
                                aria-autocomplete="list"
                                aria-haspopup="true"
                                aria-controls="79bdb257-757c-4ca6-ebaa-68c1fcccdcbf"
                                className="ant-select-selection ant-select-selection--single"
                              >
                                <div className="ant-select-selection__rendered">
                                  <div
                                    unselectable="on"
                                    className="ant-select-selection__placeholder"
                                    style={{
                                      display: "block",
                                      userSelect: "none",
                                    }}
                                  >
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font style={{ verticalAlign: "inherit" }}>
                                        Please select account type
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
                          {/**/}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-3a3b3d16
                    className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-7 ant-col-xl-6"
                    style={{ paddingLeft: "12px", paddingRight: "12px" }}
                  >
                    <div data-v-3a3b3d16 className="ant-row ant-form-item">
                      <div className="ant-col ant-form-item-label">
                        <label title="Currency" className>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Currency
                            </font>
                          </font>
                        </label>
                      </div>
                      <div className="ant-col ant-form-item-control-wrapper">
                        <div className="ant-form-item-control">
                          <span className="ant-form-item-children">
                            <div
                              data-v-17b4e467
                              data-v-3a3b3d16
                              tabIndex={0}
                              className="ant-select ant-select-enabled"
                            >
                              <div
                                role="combobox"
                                aria-autocomplete="list"
                                aria-haspopup="true"
                                aria-controls="91bb8c2d-2b97-4003-9cd9-4d385cc8c75a"
                                className="ant-select-selection ant-select-selection--single"
                              >
                                <div className="ant-select-selection__rendered">
                                  <div
                                    unselectable="on"
                                    className="ant-select-selection__placeholder"
                                    style={{
                                      display: "block",
                                      userSelect: "none",
                                    }}
                                  >
                                    <font style={{ verticalAlign: "inherit" }}>
                                      <font style={{ verticalAlign: "inherit" }}>
                                        Please select currency
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
                          {/**/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div
                    data-v-3a3b3d16
                    className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-7 ant-col-xl-6"
                    style={{ paddingLeft: "12px", paddingRight: "12px" }}
                  >
                    <span
                      data-v-3a3b3d16
                      className="table-page-search-submitButtons"
                      style={{ float: "left", overflow: "hidden" }}
                    >
                      <button
                        data-v-3a3b3d16
                        type="button"
                        className="ant-btn ant-btn-primary"
                        fdprocessedid="01lznr"
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
                        data-v-3a3b3d16
                        type="button"
                        className="ant-btn ant-btn-primary"
                        fdprocessedid="b3er8c"
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
                      <a data-v-3a3b3d16 style={{ marginLeft: "8px" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>expand</font>
                        </font>
                        <i
                          data-v-3a3b3d16
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
                  </div>
                </div>
              </form>
            </div>
            <div data-v-3a3b3d16 className="table-operator">
              <button
                data-v-3a3b3d16
                type="button"
                className="ant-btn ant-btn-primary"
                fdprocessedid="0dp7mk"
              >
                <i
                  aria-label="icon: download"
                  className="anticon anticon-download"
                >
                  <svg
                    viewBox="64 64 896 896"
                    data-icon="download"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    className
                  >
                    <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" />
                  </svg>
                </i>
                <span>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>export</font>
                  </font>
                </span>
              </button>
            </div>
            <div data-v-3a3b3d16>
              <div
                data-v-3a3b3d16
                className="ant-alert ant-alert-info"
                style={{ marginBottom: "16px" }}
              >
                <i
                  data-v-3a3b3d16
                  className="anticon anticon-info-circle ant-alert-icon"
                />
                <font style={{ verticalAlign: "inherit" }} />
                <a data-v-3a3b3d16 style={{ fontWeight: 600 }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>0</font>
                  </font>
                </a>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}> items</font>
                  <font style={{ verticalAlign: "inherit" }}>
                    have been selected{" "}
                  </font>
                </font>
                <a data-v-3a3b3d16 style={{ marginLeft: "24px" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>to clear</font>
                  </font>
                </a>
              </div>
              <div
                data-v-3a3b3d16
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
                                    key="userGroup_dictText"
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
                                              user agent
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
                                    key="realName"
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
                                              actual name
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
                                              account type
                                            </font>
                                          </font>
                                        </span>
                                        <span className="ant-table-column-sorter" />
                                      </div>
                                    </span>
                                  </th>
                                  <th
                                    key="symbol_dictText"
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
                                    key="balance"
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
                                              balance
                                            </font>
                                          </font>
                                        </span>
                                        <span className="ant-table-column-sorter" />
                                      </div>
                                    </span>
                                  </th>
                                  <th
                                    key="frozenBalance"
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
                                              frozen amount
                                            </font>
                                          </font>
                                        </span>
                                        <span className="ant-table-column-sorter" />
                                      </div>
                                    </span>
                                  </th>
                                  <th
                                    key="state_dictText"
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
                                              state
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
                               {alluserWallets?.map((data,index)=>{
                                return(

                               <tr
                                 className="ant-table-row ant-table-row-level-0"
                                 data-row-key={1687915884332015618}
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
                                     {index + 1 }
                                     </font>
                                   </font>
                                 </td>
                                 <td
                                   className="ant-table-column-has-actions ant-table-column-has-sorters"
                                   style={{ textAlign: "center" }}
                                 >
                                   <font style={{ verticalAlign: "inherit" }}>
                                     <font style={{ verticalAlign: "inherit" }}>
                                       {data?.user_address}
                                     </font>
                                   </font>
                                 </td>
                                 <td
                                   className="ant-table-column-has-actions ant-table-column-has-sorters"
                                   style={{ textAlign: "center" }}
                                 />
                                 <td
                                   className="ant-table-column-has-actions ant-table-column-has-sorters"
                                   style={{ textAlign: "center" }}
                                 />
                                 <td className style={{ textAlign: "center" }}>
                                   <font style={{ verticalAlign: "inherit" }}>
                                     <font style={{ verticalAlign: "inherit" }}>
                                       balance account??
                                     </font>
                                   </font>
                                 </td>
                                 <td className style={{ textAlign: "center" }}>
                                   <font style={{ verticalAlign: "inherit" }}>
                                     <font style={{ verticalAlign: "inherit" }}>
                                    {data?.currency}
                                     </font>
                                   </font>
                                 </td>
                                 <td className style={{ textAlign: "center" }}>
                                   <font style={{ verticalAlign: "inherit" }}>
                                     <font style={{ verticalAlign: "inherit" }}>
                                       {data?.balance}
                                     </font>
                                   </font>
                                 </td>
                                 <td className style={{ textAlign: "center" }}>
                                   <font style={{ verticalAlign: "inherit" }}>
                                     <font style={{ verticalAlign: "inherit" }}>
                                      {data?.ferozen}
                                     </font>
                                   </font>
                                 </td>
                                 <td className style={{ textAlign: "center" }}>
                                   <font style={{ verticalAlign: "inherit" }}>
                                     <font style={{ verticalAlign: "inherit" }}>
                                     {data?.state}
                                     </font>
                                   </font>
                                 </td>
                                 <td
                                   className="ant-table-fixed-columns-in-body ant-table-row-cell-break-word"
                                   style={{ textAlign: "center" }}
                                 >
                                   <span data-v-3a3b3d16>
                                     <a data-v-3a3b3d16>
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
                                     <a data-v-3a3b3d16>
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

                                )
                               })

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
                                {alluserWallets?.map((data,index)=>{
                                return(


                                 <EditWalletManagement data={data} index={index} />
                                
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
                            1-10 A total of 1614 items
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
                        title={162}
                        tabIndex={0}
                        className="ant-pagination-item ant-pagination-item-162"
                      >
                        <a>
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>162</font>
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
                            aria-controls="51aa288a-a683-4a69-9d0d-43f62c44940a"
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
                          <input type="text" fdprocessedid="tgpmj" />
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
      </div>
    </div>
  </main>
  )
}

export default WalletManagement