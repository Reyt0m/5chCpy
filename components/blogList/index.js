import React,{useState, useEffect} from 'react';
import Router, {useRouter } from 'next/router'
import './styles.module.scss'
import styles from '../../styles/Home.module.css'
import Link from "next/link";


const BlogList = ({blogData}) => {
	const [blogs, setBlogs] = useState([])
	const router = useRouter()
	const [loading, setLoading] = useState([])
	const startLoading = () => setLoading(true)
	const stopLoading = () => setLoading(false)

	// set blog data from blogData
	useEffect(() => {
		if (blogData){
			if(blogData.error){
				console.log(blogData.error);
			}
		} else {
			setBlogs(blogData.blogs)
		}
	}, [blogData])

	// Router event handler
	useEffect(() => {
		Router.events.on('routeChangeStart', startLoading)
		Router.events.on('routeChangeComplete', stopLoading)
		return () => {
			Router.events.off('routeChangeStart', startLoading)
			Router.events.off('routeChangeComplete', stopLoading)
		}
	}, [])

	// Listen to scroll position for loading more data on scroll
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			}
	})

	const handleScroll = () => {
		// to get page offset of last blog
		const lastBlogLoaded = document.querySelector('.blog-list > blog:last-child');
		if (lastBlogLoaded) {
			const lastBlogLoadedOffset = lastBlog.offsetTop + lastBlog.clientHeight;
			const pageOffset = window.pageYOffset + window.innerHeight;
			// Detect when user scrolls down till the last blog
			if (pageOffset > lastBlogLoadedOffset) {
				// load more data
				console.log('load more data');
				// Stop loading more data
				//
				if (blogData.currentPage < blogData.totalPages && !loading) {
					// trigger fetch
					const query = router.query;
					query.page = parseInt(blogData.currentPage) + 1;
					router.push({
						pathname: router.pathname,
						query: query,
					});
				}
			}
		}
	}

	return (
		<div className="blog-list">
			<ui className="blog-list__list">
				<main className={styles.main}>
				<div className={styles.grid}>
					<div className={styles.card }>
					<Link href="/content_detail"  >
						<h2> Documentation  </h2>
					</Link>{" "}
					<p> Find in -depth information about Next.js features and API. </p>{" "}
					</div>
				</div>{" "}
				</main>{" "}
				{blogs.length > 0 && blogs.map((blog, index) => {
					return (
						<li className="blog-list__item" key={index}>
							<span>{blog.name}</span>
						</li>
					)
				}
				)}
			</ui>
			{loading && <h1 className="blog-list__loading">Loading...</h1>}
		</div>
	)
}

export default BlogList;
