import { Post } from "../../Models/Post.Model/Post";

interface PostListProps {
    posts: Post[];
  }
  
 export const Posts: React.FC<PostListProps> = ({ posts }) => (
    <div className="row">
      {posts.map((post) => (
         
            <div className="col-md-4 mt-5"  key={post.id}>
            <div className="card" style={{height:200, backgroundColor:'#009d1a', color:'white'}}>
            <div className="card-body" >
        <h5 className="card-title fw-bolder" style={{textDecorationThickness:'bolder'}} >{post.id}- {post.title} </h5>
        <p className="card-text">{post.body}</p>
      </div>     
    </div>
      </div>
        
      ))}
    </div>
  );
  
  



// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export const Posts:React.FC<{post:Array<any>}> = ({post}) => {
//     const [posts, setPosts] = useState<Array<any>>([])
//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//             setPosts([...res.data])
//         })
//     })

//     return (
//         <>

        
//           {/* <div className="container" style={{backgroundColor:''}}>
//             <div className="row">
//             {posts.map((elem,idx)=>{
                 
//                 })}
              
//             </div>
//           </div> */}
//         </>
//       )
// }