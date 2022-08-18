# 5chCpy
### コンポーネント
- リンク
 移動先を持つ時、マウスホバーで赤色

ホーム => ホーム
FAQ => FAQ
びんたん => スマホ用サイト
クリア => アラート + 非表示を表示

TODO
- devブランチ削除
https://www.freecodecamp.org/japanese/news/how-to-delete-a-git-branch-both-locally-and-remotely/
- learn => dev への変更
https://qiita.com/shungo_m/items/4218e70751375b4bfeec

隠す機能
三項演算子で対応
https://www.codespeedy.com/how-to-toggle-elements-in-react-js/


- コンテンツの下部をcssで隠す
- 画面を押したときにcssのクラスを消す
	classlistメソッドによって対応可能。これが該当する
https://stackoverflow.com/questions/65010686/adding-and-removing-a-classlist-in-react-js

- 無限スクロール

画面の位置を取り出す。
もし、一番しただった場合を切り出す。
記事を追加する。
* Todo
画面追加中ローディングを表示する

<!-- : ToDo normal bootstrap => react bootstrap -->
- フィルタ
キーワード検索
モーダル。入浴画面、追加、リスト表示、フィルタクリアページを更新ボタン
入力した内容をついあkボタンを押すと下に羅列される
羅列されたときバツじるしが押されるとリストから消される。
リストを非表示にする、でリストが見えなくなる
フィルタをクリアで、登録した内容が消える
更新するで、記事だけ更新されて、フィルタは消えない。

* modal
https://www.pluralsight.com/guides/working-with-bootstraps-modals-react

* フィルタ
フィルタは、キーワードリストに追加されたものを記事一覧から見せなくするという仕組みになている。
必要なこと
 <!-- 0. 記事リストに他の記事を追加すること -->
 0. キーワードリストの追加
 1. キーワードリストの取得
 2. ページ内でマッチするキーワードのあるスレッドidを取得
 3. スレッドidのある箇所をまとめて隠す

<!-- * TODO -->
* 記事リストの作成
必要なこと
 1. 記事自体の作成 なにファイルで作るか。どちらにせよリスト化する必要がある
 2. mapへの組み込み
 blogdataは型なので、中身を切り替える必要がある。mdかjsonならありかも

* css
画面サイズによって表示するものを切り替える
サイドバーの調整
アイコンの表示

## Warningの解消
- unique keyの設定
https://reactjs.org/docs/lists-and-keys.html#keys
- hydration
=>基本的にhtmlタグの問題
https://zenn.dev/onikun/articles/28fb8de056c89a
