import React from "react";
import { useState, useEffect, createContext } from "react";
import header from "./header.module.scss";

import "bootstrap/dist/css/bootstrap.css";

import data from "./data.json";
import { BlogList } from "./bloglist";

const Filter = ({}) => {
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

  useEffect(() => {
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  const sendKeywords = () => {
    return { keywords, setKeywords };
  };

  const handleHide = () => {
    setHide(!hide);
  };

  const handleClear = () => {
    if (confirm("フィルターされたキーワードを削除してもよろしいですか？"))
      setKeywords([]);
    else return;
  };

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
      {/* <FilterData.Provider value={sendKeywords()}>
        {children}
      </FilterData.Provider> */}
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
          // ref={keyRef}
          //   onChange={(event) => setKeywords(event.target.value)}
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
            {keywords.map((keywords, i) => {
              return (
                <div
                  className={`row ${
                    i % 2 == 0 ? header.filter_keywords_item__background : null
                  }`}
                  key={i}
                >
                  <div className={`col ${header.filter_keyword_text} `}>
                    {keywords}{" "}
                  </div>
                  <div className={`col ${header.filter_keyword_action_remove}`}>
                    <a
                      href="javascript:void(0)"
                      className={`${header.filter_keywords_remove}`}
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

// FilterData.defaultProps = {
//   children: null,
// };

// FilterData.propTypes = {
//   children: PropTypes.node,
// };

// export const useFilterHook = () => useContext(FilterData);

// データ元設定
export const FilterData = React.createContext(Filter.sendKeywords);
