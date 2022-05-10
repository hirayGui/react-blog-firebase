import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Toninho');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:3001/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            navigate('/');
        })
    }

    return (
        <div className='create'>
            <h2>Adicione uma nova postagem</h2>
            <form onSubmit={handleSubmit}>
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

                <label>Autor</label>
                <select
                value={author}
                onChange={(event) => setAuthor(event.target.value)}>
                    <option value="Ricardo">Ricardo</option>
                    <option value="Toninho">Toninho</option>
                    <option value="Meireles">Meireles</option>
                    <option value="Josué">Josué</option>
                    <option value="Bruno">Bruno</option>
                </select>
                {!isPending && <button>Postar</button>}
                {isPending && <button disabled>Postar</button>}
            </form>
        </div>
    )
}

export default Create