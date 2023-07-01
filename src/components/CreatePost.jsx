import { useState } from "react";


function CreatePost(){

    const [title,setTitle] = useState();
    const [subTitle,setSubTitle] = useState();
    const [content,setContent] = useState();

    function handleSubmit(e){
        e.preventDefault();
        console.log("Title : ",title);
        console.log("Sub Title : ",subTitle);
        console.log("Content : ",content);
    }

    return (
        <div className="create-post">
            <h1> Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Title</label>
                    <input value={title} onChange={(e)=> setTitle(e.target.value)}></input>
                </div>
                <div className="form-field">
                    <label>Sub Title</label>
                    <input value={subTitle} onChange={(e)=> setSubTitle(e.target.value)}></input>
                </div>
                <div className="form-field">
                    <label>Content</label>
                    <textarea value={content} onChange={(e)=> setContent(e.target.value)}></textarea>
                </div>
                <button className="create-post-btn">Create Post</button>
            </form>
        </div>
    )
}
export default CreatePost;