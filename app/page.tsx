import { ObjectId } from 'mongodb';
import { getBlogs } from "@/lib/actions";
import BlogPost from "./components/blogPost";


// const blogs = [1,1,1,11,11,11,11,11,11,11,11,1] 
interface Blog {
  _id: ObjectId
  title: string
  content:string
}

export default async function Home() {
  const blogs : Blog[] | undefined = await getBlogs()
  return (
    
    <main className=" max-w-screen-xl mx-auto">
      <div className="p-4 grid grid-cols-1 items-center w-full justify-items-center gap-3 md:grid-cols-2 lg:grid-cols-3">
      {blogs?.map((blog : Blog) => {
        return <BlogPost key={blog._id.toString()} title={blog.title} content={blog.content} _id={blog._id.toString()} />
      } )}
      </div>

    </main>
  );
}
