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

const Post = styled.div`
    border: 1px solid #e1e1e1;
    padding: 10px 10px;
    border-radius: 5px;
    margin-top: 10px;



    h3{
        margin: 0;
        padding: 0;
        font-size: 25px;
        font-weight: bold;
        color: black;
    }

    &:hover{
        border : 1px solid #2196f3;
    }

    h3:hover {
        color: #2196f3;
      }

    a {
        text-decoration: none;
      }

      @media (max-width: 800px){
        border: 1px solid black;
      }
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
                <Post className="p" key={`post-${index}`}>
                    <Link to={`/post/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                    <PostSubTitlte>{post.subTitle}</PostSubTitlte>
                </Post>
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