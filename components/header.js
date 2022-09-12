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

import data from "./data.json";
import BlogList from "./bloglist";
import Filter from "./filter";

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

  return (
    <>
      <div>
        <nav
          className={`nav navbar navbar-expand-lg navbar-dark bg-white border-bottom fixed-top ${header.nav}`}
        >
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
            <Navbar
              className={`justify-content-end ml-auto ${header.nav__items}`}
              expand="lg"
            >
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
            <Modal className={`${header.modal}`}show={isOpen} onHide={hideModal} >
              <Modal.Body>
                <div className={header.modal_content}>
                  <span className={header.close} onClick={hideModal}>×</span>
                  <Filter></Filter>
                </div>
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
