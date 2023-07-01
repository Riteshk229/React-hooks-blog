import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";

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
            <h1 style={styles.heading}> Tech Blog </h1>
            <button className="createPostBtn">This is a button</button>
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


// Inline Styling 
const styles = {
    heading: {
        marginTop : 30,
        fontSize : 56
    },
}