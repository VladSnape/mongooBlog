"use client"
import { createBlog } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CreateBlog: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg dark:bg-transparent dark:border dark:border-primary">
      <h1 className="text-2xl font-semibold mb-4">Create a Blog</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(title, description)
        createBlog({ title: title , content:description})}}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2 dark:text-white">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
