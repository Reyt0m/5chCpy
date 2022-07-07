import { useRouter } from "next/router";

export default function NamedCurve(){
	const router = useRouter();
	console.log (router.query);
	return (
		<div className = "home-page">
			<hi>{router.query.name}のページです</hi>
			<div className={styles.container}>
			</div>
		</div>
	)
}
