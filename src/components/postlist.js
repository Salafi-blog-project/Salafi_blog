import React from 'react';
import postlist from "../posts.json"
import ReactMarkdown from 'react-markdown'

const Postlist = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ")
    })
    console.log(excerptList)
    return (  
        <div>
        <h1>All Posts</h1>
        {postlist.map((post, i) => {
            return(
                <div key={i}>
                    <div>{post.title}</div>
                    <div>published on {post.date} by {post.author}</div>
                    <ReactMarkdown children={excerptList[i]} />
                    <div>read more...</div>
                </div>
            )
        })}
        </div>
    );
}

export default Postlist;