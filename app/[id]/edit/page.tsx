"use client"

import { updateBlog } from "@/lib/actions";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";


interface Props {
    params: {
        id: string;
        paramsTitle: string;
        paramsDescription: string;
    }
}

const EditBlog : React.FC<Props>= ({params}) => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const parTitle = searchParams.get('title')
   const  parContent = searchParams.get('content')


    const { id , paramsTitle , paramsDescription} = params;
    const [title, setTitle] = useState(parTitle!);
    const [description, setDescription] = useState(parContent!);

 return (
   <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg dark:bg-transparent dark:border dark:border-primary">
     <h1 className="text-2xl font-semibold mb-4">edit blog</h1>
     <form onSubmit={(e) => {
        e.preventDefault();
        updateBlog( id , title ,description)
     }}>
       <div className="mb-4">
         <label htmlFor="title" className="block text-gray-700 font-semibold mb-2 dark:text-white">
           Title
         </label>
         <input
           type="text"
           id="title"
           name="title"
           value={title}
           onChange={(e) =>  setTitle(e.target.value)}
           placeholder="Enter title"
           className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
           required
         />
       </div>
       <div className="mb-4">
         <label htmlFor="description" className="block text-gray-700 font-semibold mb-2 dark:text-white">
           Description
         </label>
         <textarea
           id="description"
           name="description"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           placeholder="Enter description"
           className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary h-32 resize-none"
           required
         />
       </div>
       <button
         type="submit"
         className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
       >
         Edit
       </button>
     </form>
   </div>
 );
}

export default EditBlog





  