import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import blog from "./styles.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../styles/Home.module.scss";

const BlogList = ({ blogData }) => {
  return (
    <div classNameName={blog.thread_list}>
      <div className={blog.thread}>
        <div className={blog.thread_item}>
          <div className="public_nav" align="right">
            <div className="post_nav_buttons">
              <a className="hide_post">[隠す]</a>
            </div>
          </div>
          <Image
            src="/images/5ch_article.png"
            width={100}
            height={100}
            align="left"
          ></Image>
          <div className={blog.thread_title}>
            <Link href="/">
              <p>
                【神奈川】路上で「ばか、死ね」スマホでライブ配信をしながら歩いていた女子高校生の腹部をキャリーバッグで殴る　78歳男逮捕★2
                [夜のけいちゃん★]
              </p>
            </Link>
          </div>
          <div
            className={`${blog.thread__content} ${blog.thread__fade_bottom}`}
          >
            <p className={blog.thread__text}>
              7/8(金) 20:21 <br />
              <br />
              　神奈川県警浦賀署は８日、暴行の疑いで横須賀市池田町６丁目、無職の男（７８）を現行犯逮捕した。
              <br />
              <br />
              　逮捕容疑は同日午前９時１５分ごろ、自宅近くの路上で、キャリーバッグ（高さ約９０センチ、幅約４０センチ、奥行き約３０センチ）で市内に住む高校３年の女子生徒（１７）の腹部を殴ったという。女子生徒にけがはなかった。調べに対し、「何も悪いことはしていない」などと否認しているという。
              <br />
              <br />
              　署によると、２人に面識はなく、スマートフォンでライブ配信をしながら歩いていた女子生徒が男の前を通りかかった際に、「ばか、死ね」などと突然罵声を浴びせられたため、「何がしたいのですか」と問いかけると、男が右手でキャリーバッグを持ち上げ振り回し、女子生徒の腹部に当たったという。
              <br />
              <br />
              　そのまま男は北久里浜方面に歩いて逃走。女子生徒が追跡すると近くの交番に駆け込み、交番相談員の男性に「あの女につきまとわれている」と訴えたという。相談員が女子生徒に事情を聴き、逆に男を取り押さえた。
              <br />
              <br />
              ソース　
              <a href="https://jump.5ch.net/?https://news.yahoo.co.jp/articles/87222031e4584ed606c6ef6ba877bc5074675d21"></a>
              <br />
              <br />
              1がたった日時 2022/710 17:53 <br />
              前スレ <br />
              【神奈川】路上で「ばか、死ね」スマホでライブ配信をしながら歩いていた女子高校生の腹部をキャリーバッグで殴る　78歳男逮捕
              [夜のけいちゃん★] <br />
              <a
                rel="nofollow noopener"
                href="https://asahi.5ch.net/test/read.cgi/newsplus/1657443224/"
                target="_blank"
              >
                https://asahi.5ch.net/test/read.cgi/newsplus/1657443224/
              </a>
            </p>
          </div>
          <div className="poster_info">
            <span className="name">夜のけいちゃん ★</span>
            <span className="date">
              2022/07/10(日) 19:14:09.24 ID:T0Aiayy/9
            </span>
          </div>
          <div className="thread_detail text-right">
            <span className="thread_detail_child">
              <Link href="/pages/board.js">
                <span className="thread_detail_child_value">45</span>
              </Link>
            </span>
            <span className="thread_detail_child">
              <span className="thread_detail_child_value">
                <Link href="/pages/news.js">ニュース速報+</Link>
              </span>
            </span>
            <span className="thread_detail_child">
              <span className="fa fa-flash"></span>
              <span className="thread_detail_child_value">18520</span>
            </span>
            <span className="thread_detail_child">
              <button
                data-boardid="newsplus"
                type="button"
                className="btn btn-info btn-sm follow-button"
              >
                フォローする
              </button>
            </span>
            <span className="thread_detail_child"></span>
          </div>
        </div>
      </div>{" "}

    </div>
  );
};

export default BlogList;
