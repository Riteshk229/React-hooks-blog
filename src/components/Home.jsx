import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";

function Home(){
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        firestore
            .collection('posts')
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
            <h1> Tech Blog </h1>
            <div id="blog-by">Ritesh</div>
            {posts.map((post,index) => (
                <div className="post" key={`post-${index}`}>
                    <Link to={`/post/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                    <p>{post.subTitle}</p>
                </div>
            ))}
        </div>
    )
}
export default Home;