import React from "react";
import { useState, useEffect, useLayoutEffect, createContext } from "react";
import header from "./header.module.scss";

import "bootstrap/dist/css/bootstrap.css";

import Modal from "react-bootstrap/Modal";

import data from "./data.json";
import { BlogList } from "./bloglist";

// データ元設定
export const FilterData = createContext();

const Filter = () => {
  const storageKeywords = JSON.parse(localStorage.getItem("keywords"));
  const [addKey, setAddKey] = useState([]);
  const [keywords, setKeywords] = useState(
    localStorage.getItem("keywords") ? storageKeywords : []
  );
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setKeywords((keywords) => [...keywords, addKey]);
    setAddKey([]);
  };

  const handleHide = () => {
    setHide(!hide);
  };

  const handleDelete = () => {
    if (confirm("フィルターされたキーワードを削除してもよろしいですか？"))
      setKeywords([]);
    else return;
  };

  // 複数単語フィルタ
  const filtered = data.threadData.filter((threadData) => {
    return !keywords.some(
      (kw) => threadData.title.includes(kw) || threadData.body.includes(kw)
    );
  });

  useEffect(() => {
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  // この方法の方が描画が綺麗らしいがよくわかっていない。
  //   useLayoutEffect(() => {
  //     if (localStorage.getItem('keywords')) {
  //       setKeywords(JSON.parse(localStorage.getItem('keywords'))
  //     } else {
  //       localStorage.setItem('keywords', JSON.stringify(keywords))
  //     }
  //   }, [])
  return (
    <div className={`modal-body`}>
      <FilterData.Provider value={keywords}>
        {data ? null : <BlogList />}
        {console.log(keywords)}
      </FilterData.Provider>
      <span className={`close`}>×</span>
      キーワードを入れる:
      <input
        type="text"
        id="filter_keyword"
        name="keyword"
        minLength="3"
        maxLength="32"
        className={`form-control`}
        placeholder="キーワード"
        value={addKey}
        // ref={keyRef}
        //   onChange={(event) => setKeywords(event.target.value)}
        onChange={(e) => setAddKey([e.target.value])}
      />
      <input
        onClick={() => handleClick()}
        className={`btn btn-lg ${header.nav__btn} btn-block`}
        id="filter_add"
        type="button"
        value="追加"
      />
      <div align="center" className={`filter_keywords_list_box`}>
        <span className={`filter_keywords_item`}>
          <a
            href="javascript:void(0)"
            className={`filter_keywords_list_button`}
            onClick={() => handleHide()}
          >
            {hide ? "[リスト表示]" : "[リストを非表示にする]"}
          </a>
          <a
            href="javascript:void(0)"
            className={`filter_keywords_clear_all_button`}
            onClick={() => handleDelete()}
          >
            [フィルタをクリア]
          </a>
          <a href="/" className={`filter_keywords_refresh_page_button`}>
            [ページの更新]
          </a>
        </span>
        {hide ? null : (
          <span className={`filter_keywords_item`} id="filter_keywords_list">
            {keywords.map((keywords) => {
              return (
                <div class="row">
                  <div className={`col filter_keyword_text`}>{keywords} </div>
                  <div class="col filter_keyword_action_remove">
                    <a
                      href="javascript:void(0)"
                      class="filter_keywords_remove"
                      data-keyword={keywords}
                    >
                      x
                    </a>
                  </div>
                </div>
              );
            })}
          </span>
        )}
      </div>
    </div>
  );
};
export default Filter;
