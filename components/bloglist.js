import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import blog from "./blog.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/Home.module.scss";
import data from "./data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBolt } from "@fortawesome/free-solid-svg-icons";

const BlogList = ({ threadData }) => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);

  const reveal = () => {
    // 切り替え
    // setShow(true);
    show ? setShow(false) : setShow(true);
    console.log("show");
  };
  //   parseできない。
  //   const jsonData = JSON.parse
  //   const [key,setKey] = useState("");
  const keywords = "スマホ";


//   const filteredThreads = data.threadData
//     .filter((threadData) => {
//       if (
//         data.threadData.title.toLowerCase().includes(keywords.toLowerCase()) ||
//         data.threadData.body.toLowerCase().includes(keywords.toLowerCase())
//       )
//         return threadData;
//       else return threadData;
//     })
//     .map((threadData) => {
//       console.log(threadData.id);
//     });

const [filteredArticle, setFilteredArticle] = useState({});

  useEffect((data) => {
    let filteredArticle = data.find((e) => e.id == 2);
    setFilteredArticle(filteredArticle);
  }, []);

  const threadContent = data.threadData.map((threadData) => {
    return (
      <div key={threadData.id}>
        {hide ? (
          <div className={blog.thread__item}>
            <div className={blog.public_nav} align="right">ｗ
              <div className={blog.post_nav_buttons}>
                <a
                  href="javascript:void(0)"
                  onClick={() => setHide(!hide)}
                  className={blog.hide_post}
                >
                  [隠す]
                </a>
              </div>
            </div>
            <div className={blog.thread__box}>
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
                  <p>{threadData.title}</p>
                </Link>
              </div>
            </div>
            <div className={blog.thread__content}>
              <p
                onClick={reveal}
                className={`${show ? null : blog.thread__hidden} ${
                  blog.thread__text
                }`}
              >
                {threadData.body}
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
              <span className={blog.poster_info__name}>夜のけいちゃん ★</span>
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
              <span className="thread_detail_child" title="ban be user"></span>
            </div>
          </div>
        ) : null}
      </div>
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
