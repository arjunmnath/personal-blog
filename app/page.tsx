import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from 'app/Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      <Main posts={posts} />
      <iframe
        src="https://unity.arjunmnath.me"
        width="600"
        height="400"
        frameBorder="0"
        allowFullScreen
        title="Unity Embed"
      ></iframe>
    </>
  )
  // return (
  //   <div className="text-center">
  //     <h1 className="mb-4 text-5xl font-bold">My Blog</h1>
  //     <p className="mb-6 text-lg text-gray-400">
  //       A space for my thoughts, ideas, and stories. Coming soon!
  //     </p>
  //     <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
  //       Notify Me
  //     </button>
  //   </div>
  // )
}
