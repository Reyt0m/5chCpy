import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import BlogList from "../components/blogList/bloglist";
import Header from "../components/header";
import Sidebar from "../components/side";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row } from "react-bootstrap";
// import { getSortedPostsData } from "../components/mdBlog";
// import fs from 'fs';
import path from "path";

// const HomePage = ({ blogData,allPostsData}) => {
const HomePage = ({ blogData }) => {
  return (
    <>
      <Head>
        <title>5ちゃんねる</title>
      </Head>
      <Header> </Header>
      <Row>
        <Col xs={9}>This is main part.
      <div className={styles.main}>
        <div className={styles.container}>
          {/* ブログデータ読み込み。 */}

          <BlogList blogData={blogData} />
          <BlogList blogData={blogData} />
          <BlogList blogData={blogData} />
        </div>
		</div>

		</Col>
        <Col xs={3}>
			<Sidebar></Sidebar>
        </Col>
      </Row>
      <Sidebar></Sidebar>


    </>
  );
};
export default HomePage;
