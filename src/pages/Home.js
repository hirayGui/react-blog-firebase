import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from '../firebase-config';

function Home() {
    const postsCollection = collection(db, 'posts');

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollection);
            console.log(data)
            setPosts(data.docs.map((doc) => ({
                title: doc.data().title,
                body: doc.data().body,
                id: doc.id,
                img: doc.data().imageUrl,
                date: doc.data().creationDate,
                author: doc.data().author.name,
            })));
        }

        getPosts();
        console.log(posts);
    }, []);

    return (
        <div className='home'>
            <h2>Todos os Posts</h2>
            <div className='blog-list'>
                {posts.sort((a, b) => a.date - b.date)
                    .map((post) => {
                    return (
                        <div className='blog-preview' key={post.id}>
                            <img src={post.img} className="blog-img" />
                            <h2>{post.title}</h2>
                            <small>Escrito por {post.author} em: {post.date.toDate().toString()}</small>
                            <p>{post.body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home