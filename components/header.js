import React from "react";
import header from "./header.module.scss";
import home from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faRightToBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
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

  const hidePost = () => {
    alert(document.getElementsByClassName("last-blog").length);
  };

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
  }
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
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
			<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="nav justify-content-end ml-auto">
                <li className={`${header.nav_item}nav-item`}>
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
                </li>
                <li className={`${header.nav_item}nav-item`}>
                  <a className="nav-link" href="/">
                    <FontAwesomeIcon
                      className={header.icon}
                      icon={faRightToBracket}
                    ></FontAwesomeIcon>
                    ログイン
                  </a>
                </li>
                <li className={`${header.nav_item}nav-item`}>
                  <a className="nav-link" href="/">
                    掲示板
                  </a>
                </li>
                <li className={`${header.nav_item}nav-item`}>
                  <a className="nav-link" href="/">
                    スマホ板
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className={header.sub}>
        <div className={header.container__sub}>
          <div className={header.under_header}>
            {/* <br></br>
			<br></br>
			<br></br> */}
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
                    onClick={hidePost}
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
