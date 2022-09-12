import { useRef, useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import BlogList from "../components/bloglist";
import Header from "../components/header";
import Sidebar from "../components/side";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row } from "react-bootstrap";

const HomePage = ({ blogData }) => {
  //push articles
  const [loadBlogs, setLoadBlogs] = useState(10);
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
      setLoadBlogs(loadBlogs + 0);
  };

//   追加しても出てこない。
  const addLodingThread = () => {
    setLoadBlogs(loadBlogs + 1);
  };
  //   add article when reached bottom
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [loadBlogs]);

  return (
    <>
      <title>5chcpy</title>
      <div>
        <Header> </Header>
        <div className={styles.main}>
          <div className={styles.main__part} onScroll={handleScroll}>
            <Row>
              <Col md={8}>
                {/* <div> */}
                <div className={styles.post_item_box}>
                  {blogs.map(() => {
                    return (
                      <>
                        <BlogList></BlogList>
                        {/* {i == blogs.length - 1 ? (
                          <span className="last-blog" />
                        ) : null} */}
                      </>
                    );
                  })}
                </div>
                <center>
                  <div class={`${styles.more_posts}`}>
                    <a href="javascript:void(0)" id="more_news_index">
                      <h3>
                        もっと見る
                        <span class="glyphicon glyphicon-arrow-down"></span>
                      </h3>
                    </a>
                    <input type="hidden" value="0" id="recent_page" />
                    <input type="hidden" value="0" onClick={addLodingThread} />
                  </div>
                </center>
              </Col>
              <Col md={4}>
                <Sidebar></Sidebar>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
