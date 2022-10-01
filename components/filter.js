import React from "react";
import { useState, useEffect, createContext } from "react";
import header from "./header.module.scss";

import "bootstrap/dist/css/bootstrap.css";

export default function Filter({ keywords, setKeywords }) {
  const [addKey, setAddKey] = useState([]);
  const [hide, setHide] = useState(false);
  const [deleteKey,setDeleteKey] = useState([]);

  const handleClick = () => {
    setKeywords([...keywords, addKey]);
    setAddKey([]);
  };

  useEffect(() => {
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  const handleHide = () => {
    setHide(!hide);
  };

  const handleClear = () => {
    if (confirm("フィルターされたキーワードを削除してもよろしいですか？"))
      setKeywords([]);
    else return;
  };

  const handleDelete = (delKey,i) => {
            setKeywords([...keywords.slice(0,i),...keywords.slice(i+1)]);
  };


  return (
    <>
      <p>
        <input
          type="text"
          id="filter_keyword"
          name="keyword"
          minLength="3"
          maxLength="32"
          className={`form-control`}
          placeholder="キーワード"
          value={addKey}
          onChange={(e) => setAddKey([e.target.value])}
        />
      </p>
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
          <a
            href="/"
            className={`${header.filter_keywords_refresh_page_button}`}
          >
            [ページの更新]
          </a>
        </span>
        {hide ? null : (
          <span
            className={`${header.filter_keywords_item}`}
            id="filter_keywords_list"
          >
            {keywords.map((filterKeywords, i) => {
              return (
                <div
                  className={`row ${
                    i % 2 == 0 ? header.filter_keywords_item__background : null
                  }`}
                  key={i}
                >
                  <div className={`col ${header.filter_keyword_text} `}>
                    {filterKeywords}{}
                  </div>
                  <div className={`col ${header.filter_keyword_action_remove}`}>
                    <a
                      href="javascript:void(0)"
                      className={`${header.filter_keywords_remove}`}
                      onClick={() =>
						handleDelete(filterKeywords,i)
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
}
