import React from 'react';
import {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import styles from '../styles/styles.module.scss';
import { format } from 'date-fns';

export const DairyPost = () => {
    const {id} = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:4000/api/posts/${id}`)
            const json = await response.json();
 
            if(response.ok) setPost(json)
           
 
        }
        fetchPost()
     
     }, [id, setPost])

     if (!post) return null;

    return (
        <div className={styles.dairyPost}>
            <h2>{post.title}</h2>
            <div>{ format(new Date(post.date), 'MMMM d, y') }</div>
            <p>{ post.content }</p>
        </div>
    )
}
