import { useState } from "react";
import {firestore} from '../firebase';
import { useFormInput } from "../hooks";
import classes from '../assets/CSS/button.module.css';


function CreatePost(){

    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content= useFormInput('');

    function handleSubmit(e){
        e.preventDefault();
        console.log("Title : ",title);
        console.log("Sub Title : ",subTitle);
        console.log("Content : ",content);

        firestore.collection('posts').add({
            title    : title.value,
            subTitle : subTitle.value,
            content  : content.value,
            createdAt : new Date()
        })
    }

    return (
        <div className="create-post">
            <h1> Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Title</label>
                    <input required {...title}></input>
                    {/* <input required value={title.value} onChange={title.onChange}></input> */}
                </div>
                <div className="form-field">
                    <label>Sub Title</label>
                    <input required {...subTitle}></input>
                    {/* <input required value={subTitle.value} onChange={subTitle.onChange}></input> */}
                </div>
                <div className="form-field">
                    <label>Content</label>
                    <textarea required {...content}></textarea>
                    {/* <textarea required value={content.value} onChange={content.onChange}></textarea> */}
                </div>
                <button className={classes.createPostBtn}>Create Post</button>
            </form>
        </div>
    )
}
export default CreatePost;