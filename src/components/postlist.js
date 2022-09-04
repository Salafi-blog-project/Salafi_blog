import React from 'react';
import postlist from "../posts.json"
import reactMarkdown from 'react-markdown';

const Postlist = () => {
    console.log(postlist)
    return (  
        <div>
        <h1>All Posts</h1>
        {postlist.map((post, i) => {
            return(
                <div>
                    <div>{post.title}</div>
                    <div>published on {post.date} by {post.author}</div>
                    <div>{post.content}</div>
                    <reactMarkdown source={post.content} />
                </div>
            )
        })}
        </div>
    );
}
 
export default Postlist;