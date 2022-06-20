import Router from "next/router";
import Link from "next/link";



export default function ContentDetail() {
  return (
    <div>
      <h1> Content Detail </h1>{" "}
	  <h2>
		<Link href="/">
			<a>Home</a>
		</Link>
	  </h2>
    </div>
  );
}

export const Pagination = ({totalCount}) => {
	const PER_PAGE = 5;

	const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

	return(
		<ui>
			{range(1,Math.ceil(totalCount/PER_PAGE)).map((page, index) => {
				<li key={index}>
				<Link href={ `/${page}`}>
				<a>{page}</a>
				</Link>
				</li>
			})}
		</ui>
	);
};

//auto-rendering page
