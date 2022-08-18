import React from "react";
import header from "./header.module.scss";
import home from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";

function Header() {
  const reView = () => {
    alert("非表示の投稿を本当に再表示しますか");
    document.location.reload();
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="nav navbar navbar-expand-lg navbar-dark bg-light fixed-top">
        <div className="container">
          <p className="navbar-brand">
            <Link href="/">
              <Image
                src="/images/5ch_head.png"
                width={50}
                height={50}
                align="left"
              ></Image>
            </Link>
            <Link href="/">
              <Image
                src="/images/5ch_logo.png"
                width={100}
                height={30}
                align="left"
              ></Image>
            </Link>
          </p>
          <button
            className="navbar-toggler"
            id="humbugger-menu"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            あいうえお
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav__item">
                <div className="form-group has-search">
                  <input
                    id="search_input"
                    type="text"
                    className="form-control"
                    placeholder="スレッドタイトル検索"
                  />
                </div>
              </li>
              <li className="nav__item dropdown">
                <Link className="nav-link" href="/pages/login.js">
                  <a className={header.navbarBrand} href="/">
                    {" "}
                    ログイン{" "}
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav-link" href="/pages/login.js">
                  <a className={header.navbarBrand} href="/">
                    {" "}
                    掲示板{" "}
                  </a>
                </Link>
                <a clas s="nav-link" href="https://www2.5ch.net/5ch.html">
                  スマホ板
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={header.sub}>
        <div className={header.container}>
          <div id={header.under_header}>
            <span className={header.nav__public}>
              <span className="menu_item">
                <Link href="/"> [ホーム]</Link>
              </span>
              <span className="menu_item">
                <Link href="/"> [FAQ]</Link>
              </span>
              <span className="menu_item">
                <Link href="/"> [びんたん]</Link>
              </span>
              <span className="menu_item">
                {/* 隠したものを表示 */}
                <a onClick={reView}>[クリア]</a>
              </span>
              <span className="menu_item">
                {/* キーワードで検索 */}

                <a onClick={showModal}> [フィルタ]</a>
              </span>
            </span>
            <div className="btn-group sortby-dropdown"></div>
            <Modal show={isOpen} onHide={hideModal}>
              <Modal.Body>
                <div className="modal-body">
                  <p>
                    <span className="close">×</span>
                    キーワードを入れる:
                    <input
                      type="text"
                      id="filter_keyword"
                      name="fkeyword"
                      minLength="3"
                      maxLength="32"
                      className="form-control"
                      placeholder="キーワード"
                    />
                  </p>
                  <input
                    className="btn btn-lg btn-primary btn-block"
                    id="filter_add"
                    type="button"
                    value="追加"
                  />
                  <div align="center" className="filter_keywords_list_box">
                    <span className="filter_keywords_item">
                      <a
                        href="javascript:void(0)"
                        className="filter_keywords_list_button"
                      >
                        [リスト表示]
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="filter_keywords_clear_all_button"
                      >
                        [フィルタをクリア]
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="filter_keywords_refresh_page_button"
                      >
                        [ページの更新]
                      </a>
                    </span>
                    <span
                      className="filter_keywords_item"
                      id="filter_keywords_list"
                    ></span>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
