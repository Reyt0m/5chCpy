const faker = require('faker')

// Create a new blog(fake)
const fakeBlogs = []

// Generate 100 fake blogs
for (let i = 0; i < 100; i++) {
	fakeBlogs.push({name: faker.name.findName(), id: i})
}


// get blogData from server and respond the content
const getLimitedBlogs = (limit) => {
	const refinedBlogs = []
	for (let i = 0; i < limit; i++) {
		refinedBlogs.push(fakeBlogs[i])
	}
	return refinedBlogs
}

export default getBlogs =  (req, res) => {
	const currentPage = req.query.page || 1
	// 10 page to reload
	const perPage = 10

	try {
		const totalUsers = fakeUsers.length
		const refinedUsers = getLimitedUsers(perPage * curPage)
		// const blogs = await Blog.find().limit(perPage * currentPage)
		// const totalBlogs = await blogs.find().countDocuments()
	res.status(200).json({
		message : "Blog data",
		blogs: blogs,
		currentPage : currentPage,
		// how to use the part
		maxPage : Math.ceil(totalBlogs / perPage),
	})
	}  catch (err) {
		blogData = {error : {message : err.message}}
	}
}
