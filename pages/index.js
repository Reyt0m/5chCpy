import { useRef, useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import BlogList from "../components/bloglist";
import Header from "../components/header";
import { Filter } from "../components/filter";
import Sidebar from "../components/side";
import Footer from "../components/footer";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Container } from "react-bootstrap";

const HomePage = ({ blogData }) => {
  // initial key
  const [keywords, setKeywords] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("keywords"))
      : []
  );
  //push articles
  const [loadBlogs, setLoadBlogs] = useState(3);
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

  //   add article when reached bottom
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [loadBlogs]);

  return (
    <>
      <title>5chcpy</title>
      <div>
        <Header keywords={keywords} setKeywords={setKeywords}>
          {" "}
        </Header>
        <div className={styles.main}>
            <Container onScroll={handleScroll}>
              <Row>
                <Col lg={8}>
                  <div className={styles.post_item_box}>
                    {blogs.map(() => {
                      return (
                        <>
                          <BlogList keywords={keywords}></BlogList>
                        </>
                      );
                    })}
                  </div>
                  <center>
                    <div class={`${styles.more_posts}`}>
                      <a
                        href="javascript:void(0)"
                        id="more_news_index"
                        onClick={() => setLoadBlogs(loadBlogs + 3)}
                      >
                        <h3>
                          もっと見る
                          <span class="glyphicon glyphicon-arrow-down"></span>
                        </h3>
                      </a>
                      <input type="hidden" value="0" id="recent_page" />
                      <input type="hidden" value="0" />
                    </div>
                  </center>
                </Col>
                <Col md={4} className={styles.side}>
                  <Sidebar></Sidebar>
                </Col>
              </Row>
            </Container>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
