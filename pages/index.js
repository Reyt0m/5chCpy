import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import BlogList from '../components/blogList'

// import

//infinity-scroll
//  If need to change the data base, should change blogData to the other name

const HomePage = ({ blogData}) => {
	return (
	<div className = "home-page">
		<div className={styles.container}>
			<link rel="icon" href="/favicon.ico" />
			<BlogList blogData = {blogData}></BlogList>
		</div>
	</div>
	)
}

//  serverside メソッドを使う必要は本来ない。
//なぜここにquery?
export const getServerSideProps = async ({query}) => {
	const page = query.page || 1
	let blogData = null

	try {
		const res = await fetch('${process.env.FETCH_URL}/blogs?page=${page}')
		if(res.status !== 200){
			throw new Error("データ取得失敗")
		}
		blogData = await res.json()
	} catch (err) {
		blogData = {error : {message : err.message}}
	}
	return {props : {blogData}}
}

export default HomePage
