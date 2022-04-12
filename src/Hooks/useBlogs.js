import { useEffect, useState } from "react";

const useBlogs=()=>{

    const [blogs, setBlogs]= useState([]);
    
const postBlog=(blog)=>{
    fetch('https://writehubs.herokuapp.com/blogs', {
        method: 'POST',
        headers: {
              'content-type': 'application/json'
        },
        body: JSON.stringify(blog)
  })
  .then(res=> res.json())
  .then(data=>{
      console.log(data)
      alert('Submit')
  })
}

useEffect(()=>{
    fetch('https://writehubs.herokuapp.com/blogs')
    .then(res=> res.json())
    .then(data=> {
        setBlogs(data)
        console.log(data)
    })
},[])

    
const confirmBlog = id => {
    const uniqueId = { blogId: id }
    fetch('https://writehubs.herokuapp.com/blogs/confirm', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(uniqueId)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return alert('Blog Confirm')
        })
}

return {
    postBlog ,
    blogs,
    confirmBlog
}
}
export default useBlogs;