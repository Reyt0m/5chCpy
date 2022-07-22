import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// 作業ディレクトリを返すメソッド。
const postDirectory = path.join(process.cwd(),'../pages/posts/')

export function getSortedPostsData () {
	// ファイル / ディレクトリ一覧を取得
	const fileNames = fs.readdirSync(postsDirectory)
	console.log(fileNames)

	const allPostData = fileNames.map(fileNames => {
		// .md をファイルネームから消してidを獲得
		const id = fileName.replace(/\.md$/,'')

		// mdファイルをテキストで入力
		const fullPath = path.join(postDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')
		console.log(fileContents)

		// gray matterを使って、投稿データを解析する
		const matterResult = matter(fileContents)

		// idとデータを紐づける
		//  ... には fs.readでとってきた分が配列で一行ずつはいる
		return{
			id,
			...matterResult.data
		}
	})

	// データのソート
	return allPostData.sort(({ date: a} , {date : b}) => {
		if (a < b){
			return 1
		} else if (a > b){
			return -1
		} else {
			return 0
		}
	})
}
