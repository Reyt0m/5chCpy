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
import Filter from "./filter";

function Header({ keywords, setKeywords }) {
  const reView = () => {
    if (confirm("非表示の投稿を本当に再表示しますか"))
      document.location.reload();
    else return;
  };

  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Navbar
        className={`nav navbar navbar-expand-lg navbar-dark bg-white border-bottom fixed-top ${header.nav} ${header.nav__container}  ${header.nav__items}`}
        expand="lg"
      >
        <Navbar.Brand>
          <div className={`${header.nav__logo}`}>
            <Link href="/">
              <div className={`${header.nav__logo}`}>
                <Image
                  src="/images/5ch_head.png"
                  width={50}
                  height={50}
                  align="left"
                ></Image>
              </div>
            </Link>
            <Link href="/">
              <span className={`${header.nav__logo__img}`}>
                <Image
                  src="/images/5ch_logo.png"
                  width={100}
                  height={30}
                  align="left"
                ></Image>
              </span>
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          className={`${header.nav__toggle} justify-content-end`}
          aria-controls="toggle"
        />
        <Navbar.Collapse id="toggle" className={``}>
          <Nav className={`navbar-nav ml-auto`}>
            <div className={`${header.form__group}  form-group has-search `}>
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
      </Navbar>
      <div className={header.sub}>
        <div className={header.container__sub}>
          <div className={header.under_header}>
            <span className={header.nav__public}>
              <span className="menu_item">
                <a href="/"> [ホーム]</a>
              </span>
              <span className="menu_item">
                <a href="/pages/FAQ"> [FAQ]</a>
              </span>
              <span className="menu_item">
                <a href="/pages/phone"> [びんたん]</a>
              </span>
              <span className="menu_item">
                <a href="" onClick={reView}>
                  [クリア]
                </a>
              </span>
              <span className="menu_item">
                <a href="javascript:void(0)" onClick={showModal}>
                  {" "}
                  [フィルタ]
                </a>
              </span>
            </span>
            <Modal
              className={`${header.modal} `}
              show={isOpen}
              onHide={hideModal}
              size="lg"
              backdrop={true}
              backdropClassName={header.modal_backdrop}
              dialogClassName={header.modal_dialog}
              contentClassName={header.modal_content}
              fade={false}
              animation={false}
            >
              <Modal.Body ClassName={header.modal_content__body}>
                <div>
                  <span>キーワードを入れる:</span>
                  <span className={`${header.close}`} onClick={hideModal}>
                    ×
                  </span>
                </div>
                <Filter keywords={keywords} setKeywords={setKeywords}></Filter>
              </Modal.Body>
            </Modal>
            <div className="btn-group sortby-dropdown"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
