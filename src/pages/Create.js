import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { auth, db, storage } from '../firebase-config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Create = ({ isAuth }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    let navigate = useNavigate();
    const postsCollection = collection(db, 'posts');

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, []);

    const handleClick = async () => {
        
        const storageRef = ref(
            storage,
            `/images/${Date.now()}${imageUrl}`
        );

        const uploadImage = uploadBytesResumable(storageRef, imageUrl);
        
        uploadImage.on(
            "state_changed",
            () => {
                getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                    addDoc(postsCollection, {
                        title: title,
                        body: body,
                        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
                        imageUrl: url,
                        creationDate: Timestamp.now().toDate(),
                    })
                        .then(() => {
                            console.log("sucesso");
                            window.location.pathname = "/home";
                        })
                        .catch((err) => {
                            console.log("erro");
                        });
                });
            }
        );
        
    } 

    return (
        <div className='create'>
            <h2>Adicione uma nova postagem</h2>
            <label>Título</label>
            <input
                type='text'
                required
                value={title}
                onChange={(event) => setTitle(event.target.value)} />

            <label>Corpo da postagem</label>
            <textarea
                required
                value={body}
                onChange={(event) => setBody(event.target.value)} />

            <label>Imagem da postagem</label>
            <input
                type="file"
                name='image'
                accept='image/*'
                onChange={(event) => setImageUrl(event.target.files[0])}
            />

            <button onClick={handleClick}>Postar</button>

        </div>
    )
}

export default Create