import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "용재1",
        comment: "와~ 리액트 재미땅~",
    },
    {
        name: "용재2",
        comment: "ㅎㅎ! ㅈㄹ하기싫어",
    },
    {
        name: "용재3",
        comment: "자고 일어나면 저절로 리액트 초고수가 되어있길...",
    },
]

function CommentList(props){
    return (
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
            {/* <Comment name={"yongjae"} comment={"안녕하세요!"}/> */}
        </div>
    );
}

export default CommentList;