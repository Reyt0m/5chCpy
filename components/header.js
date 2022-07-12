import styles from "./header.module.scss";
import home from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
		<Image src="/images/5ch_head.png" width={100} height={100}></Image>
		<Link href="/">
			<p className={home.description}>5ちゃんねる</p>
		</Link>
        <h1>
          <Link href="/">
            <a>
              <span style={{ fontWeight: 250 }}>Simple</span>
              <span style={{ fontWeight: 100 }}>News</span>
            </a>
          </Link>
        </h1>
      </header>
    </section>
  );
}

export default Header;
