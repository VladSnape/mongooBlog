"use server"

import Blog from "@/models/blog"
import connectDB from "./db"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

const createBlog = async( {title , content} : { title:string , content:string}) => {
    try {
    await connectDB()
    const post = await Blog.create({ title , content})
    console.log(post)

    } catch (error) {
        console.log(error)
    }
    revalidatePath('/')
    redirect('/')
}

const getBlogs = async() => {
    try {
        await connectDB()
        const blogs = await Blog.find({})
        console.log(blogs)
        return blogs
    } catch (error) {
        console.log(error)
    }
}


const deleteBlog = async(id:string) => {
    try {
        await connectDB()
        await Blog.findByIdAndDelete(id)

        
    } catch (error) {
        console.log(error)
    }
    revalidatePath('/')
    redirect('/')
}

const updateBlog = async(id:string, title:string, content:string) => {
    try {
        await connectDB()
        await Blog.findByIdAndUpdate(id, {title, content})
    } catch (error) {
        console.log(error)
    }

    redirect('/'+id)
    revalidatePath('/')
}

const getBlog = async(id:string) => {
    try {
        await connectDB()
        const blog = await Blog.findById(id)
        return blog
    } catch (error) {
        console.log(error)
    }
}


export {
    createBlog , getBlogs , deleteBlog , getBlog , updateBlog
}