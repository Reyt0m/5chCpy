import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import blog from "./blog.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/Home.module.scss";

const BlogList = ({ blogData }) => {
  const [hide, setHide] = useState(true);
  //   非表示から表示変え。
  const [show, setShow] = useState(false);
  const reveal = () => {
    // 切り替え
    // setShow(true);
    show ? setShow(false) : setShow(true);
    console.log("show");
    // 余裕があったらjsonに変換
    // const jsonThreadContent =
  };

  return (
    <div className={blog.list}>
      <div className={blog.thread}>
        {hide ? (
          <div className={blog.thread__item}>
            <div className={blog.public_nav} align="right">
              <div className={blog.post_nav_buttons}>
                <a onClick={() => setHide(!hide)} className={blog.hide_post}>
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
                  // layout="fill"
                  align="left"
                ></Image>
              </div>
              <div className={blog.thread__title}>
                <Link href="/">
                  <p>
                    【神奈川】路上で「ばか、死ね」スマホでライブ配信をしながら歩いていた女子高校生の腹部をキャリーバッグで殴る　78歳男逮捕★2
                    [夜のけいちゃん★]
                  </p>
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
            <div className={blog.poster_info}>
              <span className={blog.poster_info__name}>夜のけいちゃん ★</span>
              <span className={blog.poster_info__date}>
                2022/07/10(日) 19:14:09.24 ID:T0Aiayy/9
              </span>
            </div>
            <div className={` ${blog.thread__detail} ${blog.text_right}`}>
              <span className={blog.thread__detail__child}>
                <Link href="/pages/board.js">
                  <span className={blog.thread_detail_child_value}>45</span>
                </Link>
              </span>
              <span className={blog.thread_detail_child}>
                <span className={blog.thread_detail_child_value}>
                  <Link href="/pages/news.js">ニュース速報+</Link>
                </span>
              </span>
              <span className={blog.thread_detail_child}>
                <span className={`${blog.fa} ${blog.fa_flash}`}></span>
                <span className={blog.thread_detail_child_value}>18520</span>
              </span>
              <span className={blog.thread_detail_child}>
                <button
                  data-boardid="newsplus"
                  type="button"
                  className={"btn btn_info btn_sm follow_button"}
                >
                  フォローする
                </button>
              </span>
              <span className={blog.thread_detail_child}></span>
            </div>
          </div>
        ) : null}
      </div>{" "}
      {/* 一旦保留 */}
      {/* <ui className="blog-list__list">
				{blogs.length > 0 && blogs.map((blog, index) => {
					return (
						<li className="blog-list__item" key={index}>
							<span>{blog.name}</span>
						</li>
					)
				}
			)}
			</ui> */}
      {/* {loading && <h1 className="blog-list__loading">Loading...</h1>} */}
    </div>
  );
};

export default BlogList;

// const [blogs, setBlogs] = useState([])
// 	const router = useRouter()
// const [loading, setLoading] = useState([])
// const startLoading = () => setLoading(true)
// const stopLoading = () => setLoading(false)

// // set blog data from blogData
// useEffect(() => {
// 	if (blogData){
// 		if(blogData.error){
// 			console.log(blogData.error);
// 		}
// 	} else {
// 		// setBlogs(blogData.blogs)
// 	}
// }, [blogData])

// // Router event handler
// useEffect(() => {
// 	Router.events.on('routeChangeStart', startLoading)
// 	Router.events.on('routeChangeComplete', stopLoading)
// 	return () => {
// 		Router.events.off('routeChangeStart', startLoading)
// 		Router.events.off('routeChangeComplete', stopLoading)
// 	}
// }, [])

// // Listen to scroll position for loading more data on scroll
// useEffect(() => {
// 	window.addEventListener('scroll', handleScroll);
// 	return () => {
// 		window.removeEventListener('scroll', handleScroll);
// 		}
// })

// const handleScroll = () => {
// 	// to get page offset of last blog
// 	const lastBlogLoaded = document.querySelector('.blog-list > blog:last-child');
// 	if (lastBlogLoaded) {
// 		const lastBlogLoadedOffset = lastBlog.offsetTop + lastBlog.clientHeight;
// 		const pageOffset = window.pageYOffset + window.innerHeight;
// 		// Detect when user scrolls down till the last blog
// 		if (pageOffset > lastBlogLoadedOffset) {
// 			// load more data
// 			console.log('load more data');
// 			// Stop loading more data
// 			//
// 			if (blogData.currentPage < blogData.totalPages && !loading) {
// 				// trigger fetch
// 				const query = router.query;
// 				query.page = parseInt(blogData.currentPage) + 1;
// 				router.push({
// 					pathname: router.pathname,
// 					query: query,
// 				});
// 			}
// 		}
// 	}
// }
