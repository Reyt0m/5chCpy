import styles from "./component.module.scss";
import home from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

function Sidebar() {
  return (
    <>
      <div classNameName={styles.sidebar}>
        <div id="content-widget" className="">
          <div className="card my-4">
            <div className="card-body">
              <div className="content">
                <div>
                  <div className="center-object">
                    <a className="navbar-brand" >
						<Image src="/images/5ch_mascot_normal.png" width={150} height={150} />
                    </a>
                  </div>
                  「ハッキング」から「今晩のおかず」までを手広くカバーする巨大掲示板群『５ちゃんねる』へようこそ！
                </div>
              </div>
            </div>
          </div>
          <div className="card my-4">
            <div className="card-body">
              <span className="title-widget">インフォメーション</span>
              <hr className="widget-hr" />
              <div className="content">
                <ul className="circle-style">
                  <li>
                    <Link href="/">
                      <a>使い方＆注意 </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a >プレミアム浪人 </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a >
                        ヘッドライン
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a >ニュース </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a >地震速報</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a >投稿数 </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a >
                        過去ログ倉庫
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a >
                        削除ガイドライン
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a >
                        5chまとめブログ・アプリ運営者の皆さまへ
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sticky_side_point">
            <div className="card my-4">
              <div className="card-body">
                <div className="content">
                  <center>
                    Loki Technology, Inc.
                    <br />
                    29F Joy Nostalg Center
                    <br />
                    17 ADB Avenue, Ortigas Center
                    <br />
                    PASIG 1600
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
