import React,{useState, useEffect} from 'react';
import Router, {useRouter } from 'next/router'
import './styles.module.scss'
import styles from '../../styles/Home.module.css'
import Link from "next/link";



const BlogList = ({blogData}) => {
	const [blogs, setBlogs] = useState([])
	const router = useRouter()
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

	return (
		<div className="blog-list">
					<div className={styles.grid}>
						<div>
							<title>
							【参院選】立民・辻元清美氏 「ベランダに生卵」投稿後、「自作自演」トレンド入りで「呆然」と怒り ★5 [ボラえもん★]
							</title>
							<p>
							　参議院選挙に立候補している辻元清美氏が７日、ツイッターで、東京事務所のベランダに生卵を投げ入れられたことから警察に通報したと投稿。
							それが一部で「自作自演」などと指摘され「呆然」とつぶやいた。
							</p>
							<p>
							　辻元氏は７日にベランダに割れた生卵が落ちている写真をアップし
							「今朝、東京事務所のベランダに生卵が投げつけられ、警察に通報しました。
							こんなことして何になるのでしょうか。連日の嫌がらせや暴力、とても悲しいです」と投稿していた。
							</p>
							<p>
							　その後、ツイッターのトレンドワードに「自作自演」という言葉が上がり、一部でこの生卵投げつけが、自作自演ではないかとの声が上がった。
							</p>
							<p>
							　これに辻元氏は「街宣の間に“自作自演”のトレンドを見て呆然」と驚き
							「選挙終盤になってＳＮＳや活動現場での攻撃が増えてます。これは、単なる生卵じゃないのだと改めて実感します」とつぶやいた。
							</p>
							<p>
							　これまでも殺人予告や不法侵入があったことを挙げ「正直なところ怖い」とつぶやいたが「でも私は、暴力や誹謗中傷、差別やヘイトに屈しません」と誓っていた。
							https://news.yahoo.co.jp/articles/7b96fa6fb45a2f330fce9b618bf2f324a07c58ef
							</p>
							<p>
							※前スレ
							【参院選】立民・辻元清美氏 「ベランダに生卵」投稿後、「自作自演」トレンド入りで「呆然」と怒り ★4 [ボラえもん★]
							https://asahi.5ch.net/test/read.cgi/newsplus/1657197861/
							</p>
						</div>
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
	)
}

export default BlogList;
