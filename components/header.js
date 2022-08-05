import header from "./component.module.scss";
import home from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";


function Header() {
	const reView = () => {
		alert("非表示の投稿を本当に再表示しますか")
	}

	return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed-top border">
        <div>
          <Link className="navbar-brand" href="/">
            <Image
              src="/images/5ch_head.png"
              width={50}
              height={50}
              align="left"
            ></Image>
          </Link>
          <Link className="navbar-brand" href="/">
            <Image
              src="/images/5ch_logo.png"
              width={100}
              height={30}
              align="left"
            ></Image>
          </Link>
		</div>
          <button
            id="humbugger-menu"
            className="navbar-toggler bg-gray"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
			あいうえお
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div className="form-group has-search">
                  <input
                    id="search_input"
                    type="text"
                    className="form-control"
                    placeholder="スレッドタイトル検索"
                  />
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" href="/pages/login.js">
                  <a classNameName={header.navbarBrand} href="/">
                    {" "}
                    ログイン{" "}
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/pages/login.js">
                  <a classNameName={header.navbarBrand} href="/">
                    {" "}
                    掲示板{" "}
                  </a>
                </Link>
                <a clas s="nav-link" href="https://www2.5ch.net/5ch.html">
                  スマホ板
                </a>
              </li>
            </ul>
        </div>
      </nav>
	  {/* 無理やり位置を調整しているので、正しく羅列させる必要がある。
 */}
      <div className="nav__sub">
        <div class="container">
          <div id="under_header">
            <span class="public_nav">
              <span class="menu_item">
				{/* 消すとsub navが閉じる */}
					<p> /</p>
				<Link href="/" title="">
					<p> [ホーム]</p>
				</Link>
              </span>
              <span class="menu_item">
				<Link href="/"> [ホーム]</Link>
              </span>
              <span class="menu_item">
				<Link href="/"> [FAQ]</Link>
              </span>
              <span class="menu_item">
				<Link href="/"> [びんたん]</Link>
              </span>
              <span class="menu_item">
				{/* 隠したものを表示 */}
				<a  onClick={reView}>[クリア]</a>
              </span>
              <span class="menu_item">
				{/* キーワードで検索 */}
				<Link href="/"> [フィルタ]</Link>
              </span>
            </span>
            <div class="btn-group sortby-dropdown"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
