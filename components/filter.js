import React from "react";
import { useState, useEffect, useLayoutEffect, createContext } from "react";
import header from "./header.module.scss";

import "bootstrap/dist/css/bootstrap.css";

import Modal from "react-bootstrap/Modal";

import data from "./data.json";
import { BlogList } from "./bloglist";

// データ元設定
export const FilterData = createContext([]);

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

  const handleClear = () => {
    if (confirm("フィルターされたキーワードを削除してもよろしいですか？"))
      setKeywords([]);
    else return;
  };

  //   xのクリックでkeywordsを削除
  const handleDelete = (word) => {
    console.log("word\n" + word);
    // setKeywords(keywords.filter((e) => e !== word));
  };

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
      <>
        <FilterData.Provider value={{ keywords }}>
          {data ? null : <BlogList />}
        </FilterData.Provider>
        {/* {data ? null : <BlogList keywords={keywords} setKeywords={set}/>} */}
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
        <div align="center" className={`${header.filter_keywords_list_box}`}>
          <span className={`${header.filter_keywords_item}`}>
            <a
              href="javascript:void(0)"
              className={`${header.filter_keywords_list_button}`}
              onClick={() => handleHide()}
            >
              {hide ? "[リスト表示]" : "[リストを非表示にする]"}
            </a>
            <a
              href="javascript:void(0)"
              className={`${header.filter_keywords_clear_all_button}`}
              onClick={() => handleClear()}
            >
              [フィルタをクリア]
            </a>
            <a href="/" className={`${header.filter_keywords_refresh_page_button}`}>
              [ページの更新]
            </a>
          </span>
          {hide ? null : (
            <span className={`${header.filter_keywords_item}`} id="filter_keywords_list">
              {keywords.map((keywords, i) => {
                return (
                  <div class="row" key={i}>
                    <div className={`col filter_keyword_text`}>{keywords} </div>
                    <div class="col filter_keyword_action_remove">
                      <a
                        href="javascript:void(0)"
                        className={`${header.filter_keywords_remove}`}
                        //   data-keyword={keywords}
                        onClick={() =>
                          setKeywords([
                            ...keywords.slice(0, i),
                            ...keywords.slice(i + 1, keywords.length),
                          ])
                        }
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
      </>
  );
};
export default Filter;
