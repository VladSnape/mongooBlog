import { Button } from '@/components/ui/button'
import { getBlog } from '@/lib/actions'
import React from 'react'
import DeleteButtn from '../components/delete'
import Link from 'next/link'

interface BlogPostPageParams {
  id: string;
}

interface BlogPostPageProps {
  params: BlogPostPageParams;
}

interface Blog {
  _id: string;
  title: string;
  content: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = async({ params }) => {
const blog : Blog = await getBlog(params.id)

  return (
    <div className='w-full items-center justify-center flex'>
      <div className=' p-10 md:w-1/2 max-w-[700px] w-3/4  rounded-lg border dark:border-primary flex gap-10 flex-col items-center shadow-lg'>
        <h1 className=' text-4xl font-bold'>{blog.title}</h1>
        <p className=' text-xl'>{blog.content}</p>
        <div className='w-full flex justify-between'>
       <Link href={
        {pathname:`${params.id}/edit` , query: {
          title: blog.title,
          content: blog.content
        }
      }
        
        }><Button variant={'outline'} className=' w-32'>edit</Button></Link> 
       <DeleteButtn id={params.id}/> 

  </div>
      </div>
    </div>
  )
}

export default BlogPostPage