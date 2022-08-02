import React, { useEffect,useState} from 'react'
import axios from 'axios'
import CommentsCss from './Comments.module.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export default function Comments() {

 const [comments,setComments] = useState('');
useEffect(()=>{
    axios.get('https://dummyjson.com/comments')
    .then((res =>{
     setComments({comments:res.data.comments})}))
},[])

console.log(comments.comments)
  return (
    <div className={CommentsCss.commentsContainer} >
    <div className={CommentsCss.divSpan}>
    <span> { Math.ceil(Math.random()*1000 + 50) } comments </span>  <span  className={CommentsCss.sortSpan}>  <b> ☰ </b>   SORT BY </span>
    </div>
    <div className={CommentsCss.myComment}>
     <p className={CommentsCss.spanA}> A </p> <input className={CommentsCss.commentSpace} type="text" placeholder='Add a Comment...'/>
    </div >



{
  comments ? 
    comments.comments.map((item,i)=>{
      if(i < 17){
        return (
        <div key={i} className={CommentsCss.commentBox}>
        <img className={CommentsCss.commentimg} src={`https://robohash.org/${item.user.username}`}  alt="Img" />
    
       <div className={CommentsCss.commentDetails}>
             <b className={CommentsCss.commentName}>{item.user.username} </b>
             <p className={CommentsCss.commentBody}> {item.body} </p>
             <div> <span> <ThumbUpOffAltIcon fontSize='Medium'  /> {Math.ceil(Math.random()*100)}  </span>  <span> <ThumbDownOffAltIcon fontSize='Medium'/> {Math.ceil(Math.random()*100)} </span>
             <span> REPLY </span>
             </div>
       </div>
    </div>
        )
      }
  }) : <h5> Comments and Video Loading </h5>

}
    </div>
  )
}
