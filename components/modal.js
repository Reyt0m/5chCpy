import React from "react";
import { useRef, useState, useEffect } from "react";

import header from "./header.module.scss";
import home from "../styles/Home.module.scss";
import Image from "next/image";

import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";

function Header() {
  const [isKey, setIsKey] = useState(null);
  const [addKey, setAddKey] = useState(null);

  const onClickAddKey = () => {
    setAddKey(isKey);
    setIsKey(null);
  };
  return (
    <>
      <Modal>
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
    </>
  );
}

export default Modal;
