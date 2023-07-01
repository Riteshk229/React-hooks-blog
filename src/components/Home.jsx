import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const BlogHeading = styled.h1`
    text-align: center;
    color: #2196f3;
    margin-bottom: 2px;
`;

const PostSubTitlte = styled.p`
    font-size: 13px;
`;

function Home(){
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        firestore
            .collection('posts')
            .orderBy("createdAt",'desc')
            .get()
            .then((Snapshot) => {
                const posts =Snapshot.docs.map((doc) =>{
                    const data = doc.data();
                    data['id'] = doc.id
                    return data; 
                })
                console.log("Posts ",posts);

                setPosts(
                    posts
                );
            })
    },[]);
    return (
        <div className="home">
            <BlogHeading > Tech Blog </BlogHeading>
            {/* <h1 > Tech Blog </h1> */}
            {/* <button className="createPostBtn">This is a button</button> */}
            <div id="blog-by">Ritesh</div>
            {posts.map((post,index) => (
                <div className="post" key={`post-${index}`}>
                    <Link to={`/post/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                    <PostSubTitlte>{post.subTitle}</PostSubTitlte>
                </div>
            ))}
        </div>
    )
}
export default Home;


// Inline Styling 
const styles = {
    heading: {
        marginTop : 30,
        fontSize : 56
    },
}