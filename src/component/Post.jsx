import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gethpost } from "../featurs/posts/postsSlice";
// import store from "../app/store"


function Post() {

    const {posts, isError, isPending,error} = useSelector(store => store.posts);

    const dispacth = useDispatch();
    useEffect(()=>{
        dispacth(gethpost())
    },[dispacth])


    let liComponent;

    if(isPending){
        liComponent = <div> data is  loading......</div>
    };
    if(!isPending && isError){
        liComponent = <div>{error}</div>
    };
    if(!isPending && !isError && posts.length === 0){
        liComponent = <div>no data found.......</div>
    };
    if(!isPending && !isError && posts.length > 0 ){
        liComponent = posts.map((post, index)=> (
            <li key={post.id} className=" text-xl mb-1 font-semibold">{index + 1}{post.title}</li>
        ))
    }
  return (
    <div className="flex max-w-screen-lg mx-auto">
        <div className="w-4/12">
           <div className=" p-2 bg-slate-200">
            <h1 className="text-2xl mb-4">Create Post</h1>
           <input className=" w-full border p-2 block" type="text" placeholder=" add your post" />
           <button className=" py-2 px-3 bg-green-700 mt-3 text-white ">Add Post</button>
           </div>
        </div>

        <div className="w-8/12 ms-5">
            <h2 className=" text-2xl mb-4">All Post</h2>
            <ul className=" px-3 ">
                {liComponent}
            </ul>
        </div>
    </div>
  )
}

export default Post