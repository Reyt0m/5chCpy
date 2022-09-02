import React from "react";
import { useRef, useState, useEffect } from "react";

import header from "./header.module.scss";
import home from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.css";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faRightToBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Hamburger from "hamburger-react";

function Header() {
  const reView = () => {
    alert("非表示の投稿を本当に再表示しますか");
    document.location.reload();
  };

  const [isHmOpen, setHmOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };


  const [isKey, setIsKey] = useState(null);
  const [addKey, setAddKey] = useState(null);

  const onClickAddKey = () => {
	setAddKey(isKey);
	setIsKey(null);
  };
  /*
  // 定義
  // stateでarrayに追加して保存する=>そこにアクセスする。
  // function getFilterKeywordsList() {
  // 	if (localStorage.filterKeywords) {
  // 	  return JSON.parse(localStorage.filterKeywords);
  // 	} else {
  // 	  return [];
  // 	}
  //   }
  // フィルターされたものを隠す
  function hideFilterKeywords() {
    // var fkw_arr_list = getFilterKeywordsList();
    const fkw_arr_list = ["女子学生"];
    fkw_arr_list.forEach(function (fkw) {
      var post_contents = function () {
        // このthisを入れ替えて上げる必要がある。 .thread-content一個一個の
        li_thread_content = $(this).parent().parent().parent();
        // その場所以下のテキストをすべて取得？
        comment = $(this).html();
        if (comment.toString().match(fkw)) {
          li_thread_content.hide();
        }
      };
      $(".thread-content").each(post_contents);
    });

	JSONデータにフィルタをかけ、それをmapにわたして生成することになる？
*/
  return (
    <>
      <div>
        <nav className="nav navbar navbar-expand-lg navbar-dark bg-white border-bottom fixed-top">
          <div className={header.container}>
            <a className="navbar-brand">
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
            </a>
            {/* :TODO  change the following elements margin */}
            <Navbar className={`justify-content-end ml-auto`} expand="lg">
              <Container>
                <Navbar.Toggle
                  className={`${header.nav__toggle}`}
                  aria-controls="toggle"
                />
                <Navbar.Collapse id="toggle">
                  <Nav className="me-auto">
                    <div
                      className={`${header.form__group}  form-group has-search `}
                    >
                      <span className={`${header.form_control_feedback}`}>
                        <FontAwesomeIcon
                          className={header.icon}
                          icon={faSearch}
                        ></FontAwesomeIcon>
                      </span>
                      <input
                        id="search_input"
                        type="text"
                        className={`${header.form__control} form-control`}
                        placeholder="スレッドタイトル検索"
                      />
                    </div>
                    <a className={`nav-link ${header.nav__link}`} href="/">
                      <FontAwesomeIcon
                        className={header.icon}
                        icon={faRightToBracket}
                      ></FontAwesomeIcon>
                      ログイン
                    </a>
                    <a className={`nav-link ${header.nav__link}`} href="/">
                      掲示板
                    </a>
                    <a className={`nav-link ${header.nav__link}`} href="/">
                      スマホ板
                    </a>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </nav>
      </div>
      <div className={header.sub}>
        <div className={header.container__sub}>
          <div className={header.under_header}>
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
					  value={isKey}
                      onChange={(event) => setIsKey(event.target.value)}
                    />
                  </p>
                  <input
                    onClick={setAddKey}
                    className={`btn btn-lg ${header.nav__btn} btn-block`}
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
				  <p>{addKey}</p>
                </div>
              </Modal.Body>
            </Modal>
            <span className={header.nav__public}>
              <span className="menu_item">
                <a href="/"> [ホーム]</a>
              </span>
              <span className="menu_item">
                <a href="/"> [FAQ]</a>
              </span>
              <span className="menu_item">
                <a href="/"> [びんたん]</a>
              </span>
              <span className="menu_item">
                {/* 隠したものを表示 */}
                <a href="" onClick={reView}>
                  [クリア]
                </a>
              </span>
              <span className="menu_item">
                {/* キーワードで検索 */}
                <a href="javascript:void(0)" onClick={showModal}>
                  {" "}
                  [フィルタ]
                </a>
              </span>
            </span>
            <div className="btn-group sortby-dropdown"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
