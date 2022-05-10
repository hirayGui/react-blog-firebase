import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch'

function Home() {

    const {data: blogs, isPending, error} = useFetch('http://localhost:3001/blogs');

    return(
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <BlogList blogs={blogs} title="Todas as postagens"/>
        </div>
    )
}

export default Home