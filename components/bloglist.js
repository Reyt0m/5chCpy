import React, { useState, useEffect, useContext } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import blog from "./blog.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/Home.module.scss";
import data from "./data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBolt } from "@fortawesome/free-solid-svg-icons";

import FilterData from "./filter";

//  ここにfiltered props 受け渡し
const BlogList = () => {
  const [show, setShow] = useState([]);
  const [hide, setHide] = useState([]);
  const [change, setChange] = useState([]);

  // filter jsのデータテスト
  // const filtered = useContext(JSON.parse(FilterData));
  //   const keywords = useContext(FilterData);

  // かなり強引な解決方法 あとは、keywordsの変更を検知する必要がある。
  const keywords =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("keywords"))
      : [];

  //   State変更が無いので機能しない。
  //   useEffect(() => {
  //     JSON.parse(localStorage.getItem("keywords"));
  //   });
  //   console.log("FilterData  \n" + FilterData);
  //   console.log("keywords \n " + keywords);

  // filter
  const filtered = data.threadData.filter((threadData) => {
    return !keywords?.some(
      (kw) => threadData.title.includes(kw) || threadData.body.includes(kw)
    );
  });

  const reveal = (i) => {
    // 切り替え
    // setShow(true);
    // show ? setShow(false) : setShow(true);
    setShow((t) => [...t, i]);
  };

  //   隠すべきindexの取得
  const hideArticle = (i) => {
    setHide((t) => [...t, i]);
  };

  //   mapの一要素だけかくすというより、それを押したときに、そのidだけ飛ばすとかそういう感じで。
  const threadContent = filtered.map((threadContent, index) => {
    //   const threadContent = data.threadData.map((threadContent) => {
    return (
      <>
        {hide.includes(index) ? null : (
          <div
            key={threadContent.id}
            className={`${index % 2 == 1 ? blog.thread__background : null}`}
          >
            <div className={blog.thread__item}>
              <div className={blog.thread__box}>
                <div className={blog.public_nav} align="right">
                  <div className={blog.post_nav_buttons}>
                    <a
                      href="javascript:void(0)"
                      onClick={() => hideArticle(index)}
                      className={blog.hide_post}
                    >
                      [隠す]
                    </a>
                  </div>
                </div>
                <div className={blog.thread__box__wrap}>
                  <Image
                    className={blog.thread__title__image}
                    src="/images/5ch_article.png"
                    width={100}
                    height={100}
                    align="left"
                  ></Image>
                </div>
                <div className={blog.thread__title}>
                  <Link href="/">
                    <p>{threadContent.title}</p>
                  </Link>
                </div>
                <div className={blog.thread__content}>
                  <p
                    onClick={() => reveal(index)}
                    className={`${
                      show.includes(index)
                        ? null
                        : index % 2 == 1
                        ? blog.thread__odd_hidden
                        : blog.thread__hidden
                    } ${blog.thread__text}`}
                  >
                    {threadContent.body}
                    <a
                      rel="nofollow noopener"
                      href="https://asahi.5ch.net/test/read.cgi/newsplus/1657443224/"
                      target="_blank"
                    >
                      https://asahi.5ch.net/test/read.cgi/newsplus/1657443224/
                    </a>
                  </p>
                </div>
                <div className={blog.poster_info}>
                  <span className={blog.poster_info__name}>
                    夜のけいちゃん ★
                  </span>
                  <span className={blog.poster_info__date}>
                    2022/07/10(日) 19:14:09.24 ID:T0Aiayy/9
                  </span>
                </div>
                <div className={` ${blog.thread__detail} ${blog.text_right}`}>
                  <span className={blog.thread__detail__child}>
                    <Link href="/pages/board.js">
                      <span className={blog.thread__detail__child}>
                        <FontAwesomeIcon className={blog.icon} icon={faComment}>
                          {" "}
                        </FontAwesomeIcon>
                        45
                      </span>
                    </Link>
                  </span>
                  <span className={blog.thread__detail__child}>
                    <span className={blog.thread__detail__child__value}>
                      <Link href="/pages/news.js">ニュース速報+</Link>
                    </span>
                  </span>
                  <span className={blog.thread__detail__child}>
                    {" "}
                    <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>
                    18520
                  </span>
                  <span className={blog.thread__detail__child}>
                    <button className="btn btn-info btn-sm follow-button">
                      フォローする
                    </button>
                  </span>
                  <span
                    className="thread_detail_child"
                    title="ban be user"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  });
  return (
    <div className={blog.list}>
      <div className={blog.thread}>
        <div className={blog.thread}>
          <div>{threadContent} </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default BlogList;
