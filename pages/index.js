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
  //ブログデータを回数分表示したいだけなので、forの方がいいと考えるとどうなる。
  const blogs = [];
  for (let i = 0; i < 100; i++) {
    blogs.push(blogData);
  }
  return (
    <>
      <Head>
        <title>5ちゃんねる</title>
      </Head>
      <Header> </Header>
      <div className={styles.main}>
        <div className={styles.container}>
          <Row>
            <Col xs={9}>
              {/* ブログデータ読み込み。 */}
              <ui>
                {blogs.map((blog, i) => {
                  return (
                    <>
                      <h1>{i+1}</h1>
                      <BlogList key={i} blogData={blog} />
                    </>
                  );
                })}
                {/* <BlogList blogData={blogData} /> */}
              </ui>
            </Col>
            <Col xs={3}>
              <Sidebar></Sidebar>
            </Col>
          </Row>
        </div>
      </div>

      {/* <ui>
              {allPostsData.map(({id, date, title}) => (
						<li key={id}>
							{id}
							<br />
							{title}
							<br />
							{date}
						</li>
					))}
            </ui> */}
    </>
  );
};
export default HomePage;

//  データをAPIで取得し、成功判定を取る
// export const getServerSideProps = async ({query}) => {
// 	const page = query.page || 1
// 	let blogData = null

// 	try {
// 		const res = await fetch('${process.env.FETCH_URL}/blogs?page=${page}')
// 		if(res.status !== 200){
// 			throw new Error("データ取得失敗")
// 		}
// 		blogData = await res.json()
// 	} catch (err) {
// 		blogData = {error : {message : err.message}}
// 	}
// 	return {props : {blogData}}
// }
