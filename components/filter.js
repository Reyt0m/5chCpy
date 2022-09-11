import React from "react";
import { useRef, useState, useEffect } from "react";

import header from "./header.module.scss";

import "bootstrap/dist/css/bootstrap.css";

import Modal from "react-bootstrap/Modal";

import data from "./data.json";
import BlogList from "./bloglist";

const Filter = () => {
	const [addKey, setAddKey] = useState([]);
	const [keywords, setKeywords] = useState([""]);

  const handleClick = () => {
	setKeywords(addKey);
	setAddKey('')
  };

  // 複数単語フィルタ
  const filtered = data.threadData.filter((threadData) => {
	if (keywords === null)
		return setKeywords([])
	else
    	return !keywords.some(kw => threadData.title.includes(kw)||threadData.body.includes(kw));
  });

// 追加されたワードでフィルタ



  //   const filteredData = data.threadData.map((threadData) => {
  // 	const filteredThreads = [];
  // 	if ( iskey =! null)
  // 		filteredThreads = []
  // 	else
  // 		filteredThreads = []
  //   }

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
          value={addKey}
        //   onChange={(event) => setKeywords(event.target.value)}
	  onChange={(e) => setAddKey([...addKey,e.target.value])}
        />
      </p>
      <input
        onClick={handleClick()}
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
      {filtered.map((filtered) => {
        return (
          <div key={filtered.id}>
            <div>{filtered.title} </div>
          </div>
        );
      })}
      {keywords.map((keywords) => {
        return (
            <div>{keywords} </div>
        );
      })}
    </div>
  );
};
export default Filter;
