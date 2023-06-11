import React from 'react';
import {useEffect} from 'react';
import {usePostsContext} from '../hooks/usePostsContext.jsx';
import styles from '../styles/styles.module.scss';
import PostHead from '../components/PostHead';
import PostForm from '../components/PostForm';

const Home = () => {
    const{posts, dispatch} = usePostsContext();

    useEffect(() => {
       const fetchPosts = async () => {
           const response = await fetch('http://localhost:4000/api/posts')
           const json = await response.json();

           if(response.ok) dispatch({type: 'SET_POSTS', payload: json})
          

       }
       fetchPosts()
    
    }, [dispatch])
    return (
        <>
            <div>
                <h1>Posts</h1>
                <ul className={styles.postList}>
                    {posts && posts.map(post => (
                        <PostHead key ={post._id} post ={post} />
                    )) }
                </ul>

            </div>
            <div>
               <PostForm />
            </div>
        </>
    )
}

export default Home
