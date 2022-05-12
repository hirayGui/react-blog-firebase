import React from 'react';
import {Link} from 'react-router-dom';

const BlogList = ({posts}) => {
    return (
        <div className='blog-list'>
            {posts.map((post) => {
                return (<div className='blog-preview' key={post.id}>
                    <Link to={`/blogs/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p>Escrito por {post.author.name}</p>
                    </Link>
                </div>
                )
            })}
        </div>
    );
}

export default BlogList