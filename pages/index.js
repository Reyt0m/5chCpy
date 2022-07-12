import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import BlogList from '../components/blogList'
import Header from '../components/header'
// import { getSortedPostsData } from "../components/mdBlog";
import fs from 'fs';
import path from 'path';



//blog data をフェッチ fs
// export async function getStaticProps () {
// 	const allPostsData = getSortedPostsData
// 	return {
// 		props: {
// 			allPostsData
// 		}
// 	}
// }
const test = path.join(process.cwd(),'../pages/posts/')
const fileNames = fs.readdirSync(test)

console.log(test)
// console.log(getSortedPostsData)

// undefinedになるのはなぜ
// const checkPostData = allPostsData.map(({id, date, title}) => (
// 	console.log(id, date, title)
// ))

// const HomePage = ({ blogData,allPostsData}) => {
const HomePage = ({ blogData}) => {
	return (
	<>
		<Head>
			<title>5ちゃんねる</title>
		</Head>
			<Header> </Header>
		<div className = "home-page">
			<main className={styles.main}>
			<div className={styles.container}>
				{/* ブログデータ読み込み。 */}
				<BlogList blogData = {blogData}></BlogList>
				<ui>
					{/* {allPostsData.map(({id, date, title}) => (
						<li key={id}>
							{id}
							<br />
							{title}
							<br />
							{date}
						</li>
					))} */}
				</ui>

			</div>
			</main>
		</div>
	</>
	)
}
export default HomePage

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
