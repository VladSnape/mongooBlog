import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'

interface Blog {
    _id: string;
    title: string;
    content: string;
  }


const BlogPost : React.FC<Blog> = ({ _id , title , content}) => {
  return (
    <div className=" text-center hover:scale-105 shadow-lg transition-all ease-in duration-300 min-w-96">
<Card className="">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{content}</CardDescription>
      </CardHeader>
      <CardContent className='w-full'>
      {content}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={_id ? _id : '/'} className="w-full"><Button className="w-full">more</Button></Link>
      </CardFooter>
    </Card>
    </div>
    
  )
}

export default BlogPost