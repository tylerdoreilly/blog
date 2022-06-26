export const get = async () => {
    const allPostFiles = import.meta.glob('../blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
  
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        const post = await resolver()
        const content = post.default.render()
        const postPath = path.slice(2, -3)
        const fullPath = path
        return {
          meta: metadata,
          content:content,
          path: postPath,
          fullPath: fullPath
        }
      })
    )
  
    const sortedPosts = allPosts.sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date)
    })
  
    return {
      body: sortedPosts
    }
  }