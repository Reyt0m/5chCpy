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
  //   detect window reached bottom
  const handleScroll = () => {
    if (
      window.innerHeight +
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) >=
      document.documentElement.offsetHeight - 100
    )
      setLoadBlogs(loadBlogs + 1);
  };
  //   add article
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [loadBlogs]);

  return (
    <>
      <Head>
        <title>5ちゃんねる</title>
      </Head>
      <Header> </Header>
      <div className={styles.main}>
        <div className={styles.container} onScroll={handleScroll}>
          <Row>
            <Col xs={9}>
              <ui>
                {blogs.map((blog, i) => {
                  return (
                    <>
                      <h1>{i + 1}</h1>
                      <BlogList key={i} blogData={blog}></BlogList>
                      {i == blogs.length - 1 ? (
                        <span className="last-blog" />
                      ) : null}
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
