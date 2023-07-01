import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { useParams } from "react-router";

function PostDetails(){
    const [post,setPost] =useState('');
    const {postID} = useParams();

    useEffect(()=>{
        firestore
            .collection("posts")
            .doc(postID)
            .get()
            .then((snapshot)=>{
                console.log("SnapShot :",snapshot.data());
                const post = snapshot.data();

                console.log(post);

                setPost(post);
            });
    },[]);

    return (
        <div className="post-details">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}
export default PostDetails;