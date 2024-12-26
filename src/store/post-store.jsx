import { createContext, useReducer,useEffect ,useState} from "react";


export const PostList = createContext({
  postList:[],
  addPost:()=>{},
  
  deletePost:()=>{},
  
});
const postListReducer=(currList,action)=>{
  
  let newPostList=currList;
  if(action.type==="DELETE_POST"){
  newPostList=currList.filter(post=>post.id !== action.payload.postId)
  }
  else if(action.type==="ADD_POST"){
    newPostList=[action.payload,...currList];
  }
  else if(action.type==="ADD_INITIAL_POSTS"){
    newPostList=action.payload.posts;
  }
  return newPostList;
}
const PostListProvider=({children})=>{
 const [postList,dispatchList] = useReducer(postListReducer,[]);

 const addPost=(post)=>{
  
 dispatchList({
  type:"ADD_POST",
  payload:{
    post,
  },
 });
 
 }
 const addInitialPost=(posts)=>{
  
  dispatchList({
   type:"ADD_INITIAL_POSTS",
   payload:{
     posts,
   },
  });
  }
 const deletePost=(postId)=>{
  dispatchList({
   type:"DELETE_POST",
   payload:{
    postId,
   },
 });
 }
 const[fetching,setfetching]=useState(false);

//  useEffect(()=>{
//   setfetching(true);
//   const controller = new AbortController();
//   const signal = controller.signal;
//   fetch("https://dummyjson.com/posts",{signal})
//   .then((res) => res.json())
//   .then((data)=>{
// addInitialPost(data.posts);
// setfetching(false);
//   }
//  );
//  return ()=>{
//   console.log("cleaning up");
//   controller.abort();
//  }
// },[]);
 
 return <PostList.Provider value={{
  postList,
  addPost,
  fetching,
  deletePost,
 }
 }>
  {children}
 </PostList.Provider>
}

export default PostListProvider;