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
                    <a className="navbar-brand" href="https://5ch.net/">
                      <img
                        width="150px"
                        src="./5ちゃんねる_files/5ch_mascot_normal.png"
                      />
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
                    <a href="https://info.5ch.net/">使い方＆注意 </a>
                  </li>
                  <li>
                    <a href="https://premium.5ch.net/">プレミアム浪人 </a>
                  </li>
                  <li>
                    <a href="https://headline.5ch.net/bbynews/">ヘッドライン</a>
                  </li>
                  <li>
                    <a href="https://newsnavi.5ch.net/">ニュース </a>
                  </li>
                  <li>
                    <a href="https://headline.5ch.net/bbynamazu/">地震速報</a>
                  </li>
                  <li>
                    <a href="https://stat.5ch.net/">投稿数 </a>
                  </li>
                  <li>
                    <a href="https://www.5ch.net/kakolog.html">過去ログ倉庫</a>
                  </li>
                  <li>
                    <a href="https://qb5.5ch.net/saku2ch/">削除ガイドライン</a>
                  </li>
                  <li>
                    <a href="https://www.5ch.net/matome.html">
                      5chまとめブログ・アプリ運営者の皆さまへ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sticky_side_point">
            {/* <div className="card my-4">
              <div className="card-body">
                <hr className="widget-hr" />
                <div className="content">
                  <div className="ads-item">
                    <div className="side_ads side-ads-pc">
                      <iframe
                        id="js-right_rectangle_top"
                        src="./5ちゃんねる_files/right_rectangle_top.html"
                        style="width: 100%; margin: 0px auto; display: block"
                        frameborder="0"
                        scrolling="no"
                        width="300"
                        height="250"
                      ></iframe>
                    </div>
                    <div className="side_ads side-ads-pc">
                      <iframe
                        id="js-right_rectangle_bottom"
                        src="./5ちゃんねる_files/right_rectangle_bottom.html"
                        style="width: 100%; margin: 0px auto; display: block"
                        frameborder="0"
                        scrolling="no"
                        width="300"
                        height="250"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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
