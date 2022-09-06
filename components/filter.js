import React from "react";
import { useRef, useState, useEffect } from "react";

import header from "./header.module.scss";

import "bootstrap/dist/css/bootstrap.css";

import Modal from "react-bootstrap/Modal";

import data from "./data.json";
import BlogList from "./bloglist";

const Filter = () => {

  const [isKey, setIsKey] = useState(null);
  const [addKey, setAddKey] = useState(null);

  const onClickAddKey = () => {
    setAddKey(isKey);
    setIsKey(null);
  };

  // const filteredData = () => {
  //   return(
  // 	  <BlogList id = {[1,2,3]}></BlogList>
  //   );
  // };
  // const [filteredArticle, setFilteredArticle] = useState({});

  // useEffect(() => {
  //   let filtered = data.threadData.find((e) => e.id == 2);
  //   console.log(filtered);
  //   setFilteredArticle(threadData);
  // }, []);

  return (
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
          <a href="javascript:void(0)" className="filter_keywords_list_button">
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
        <span className="filter_keywords_item" id="filter_keywords_list"></span>
      </div>
      <p>{addKey}</p>
    </div>
  );
};
export default Filter;
