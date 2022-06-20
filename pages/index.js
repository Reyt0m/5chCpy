import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import

//infinity-scroll
//  If need to change the data base, should change blogData to the other name

const HomePage = ({ blogData}) => {
	return (
	<div classname = "home-page">
		<BlogList blogData = {blogData}></BlogList>
		<div className={styles.container}>
			<Head>
				<title> Create Next App </title>{" "}
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>{" "}
			<main className={styles.main}>
				<h1 className={styles.title}>
				<a href="https://nextjs.org"> Next.js! </a>{" "}
				</h1>{" "}
				<h1 className="title">
					Read{''}
					<Link href="/conten_detail">
						<a>Detail</a>
					</Link>
				</h1>
				<p className={styles.description}>
				Get started by editing{" "}
				<code className={styles.code}> pages / index.js </code>{" "}
				</p>{" "}
				<div className={styles.grid}>
				<a href="https://nextjs.org/docs" className={styles.card }>
					<h2> Documentation & rarr; </h2>{" "}
					<p> Find in -depth information about Next.js features and API. </p>{" "}
				</a>{" "}
				</div>{" "}
			</main>{" "}
		</div>
	</div>
	)
}

//  serverside メソッドを使う必要は本来ない。
//なぜここにquery?
export const getServerSideProps = async ({query}) => {
	const page = query.page || 1
	let useData = null

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

