import { useRef, useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import BlogList from "../components/blogList/bloglist";
import Header from "../components/header";
import Sidebar from "../components/side";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row } from "react-bootstrap";

const HomePage = ({ blogData }) => {
	  // 記事ローディング
	  const [loadBlogs, setLoadBlogs] = useState(1);
	  const blogs = [];
	  for (let i = 0; i < loadBlogs; i++) {
		blogs.push(blogData);
	  }

  //   const y = getLastBlog.current.offsetTop
  //   loadBlogsの値と一致するkeyを持つ要素を取得
  // last child のクラスがある画面にたどり着いたら次の記事を読み込む。とする場合、last child があるクラスの
  //

  // ボツ
  // const handleScroll = (position) => {
  // 	console.log(position);
  // 	const bottom = position.target.scrollHeight - position.target.scrollTop;
  // 	if (bottom == 0) {
  // 		console.log(bottom);
  // 	}
  // }

  // ボツ
  // const lastBlogY = document.querySelector(".last-blog");
  // const getLastBlogY = lastBlogY.offsetTop;

  //   const getLastBlog = useRef();
  //   const [y, setY] = useState(false);
  const handleScroll = () => {
    if (
      window.innerHeight +
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) >=
      document.documentElement.offsetHeight
    ){
		// console.log(window.innerHeight);
		// console.log(window.pageYOffset);
		// console.log(document.documentElement.scrollTop);
		// console.log(document.body.scrollTop);
		// console.log(document.documentElement.offsetHeight);
		console.log("bottom");
		setLoadBlogs(loadBlogs + 1)
	}
    // setY(true);
  };
  useEffect(() => {
	console.log(loadBlogs-1  +  "から1増加")
    window.addEventListener("scroll", handleScroll);
    return () => {
		setLoadBlogs(loadBlogs + 1);
		console.log(loadBlogs);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Head>
        <title>5ちゃんねる</title>
      </Head>
      <Header> </Header>
      <div className={styles.main}>
        {/* <div className={styles.container } onScroll={handleScroll}> */}
        {/* onScrollが動いていない。 */}
        <div className={styles.container} onScroll={handleScroll}>
          <Row>
            <Col xs={9}>
              {/* ブログデータ読み込み。 */}
              <button
                onClick={() => {
                  setLoadBlogs(loadBlogs + 1);
                }}
              >
                load {loadBlogs}
              </button>
              <ui>
                {blogs.map((blog, i) => {
                  return (
                    <>
                      <h1>{i + 1}</h1>
                      <BlogList key={i} blogData={blog}></BlogList>
                      {i == blogs.length - 1 ? (
                        <span className="last-blog" />
                      ) : null}
                      <button
                        onClick={(position) => {
                          console.log(window.pageYOffset);
                          console.log(document.documentElement.scrollTop);
                          console.log(document.body.scrollTop);
                        }}
                      >
                        場所チェック
                      </button>
                    </>
                  );
                })}
              </ui>
            </Col>
            <Col xs={3}>
              <Sidebar></Sidebar>
            </Col>
          </Row>
        </div>
      </div>

    </>
  );
};
export default HomePage;
