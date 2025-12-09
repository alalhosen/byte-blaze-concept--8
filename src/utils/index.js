import toast from "react-hot-toast"
export const getBlogs=()=>{
    let blogs = []
    const storedBlogs = localStorage.getItem('blogs')
if (storedBlogs){
    blogs=JSON.parse(storedBlogs)
}
    return blogs
}

// save
export const saveBlog = blog => {
    let blogs = getBlogs()
    const isExist = blogs.find(blog => blog.id === blog.id)
    if (isExist) {
        return toast.error('Already Bookmarked!')
    }
}

// delete
export const deleteBlog = id => {
    let blogs = getBlogs()
    const remaining = blogs.filter(blog => blog.id !== id)
    localStorage.setItem('blogs', JSON.stringify(remaining))
    toast.success('Blog Removed from Bookmark')
}