import React from "react";
const commentData = [
  {
    name: "Ayush Gupta",
    text: "The courage to disagree and the wisdom to agree",
    replies: [
      {
        name: "Akshay2 Saini",
        text: "cbdjjdfjdfjdbh",
        replies: [
          {
            name: "Akshay3 Saini",
            text: "cbdjjdfjdfjdbh",
            replies: [
              {
                name: "Akshay4 Saini", // upto n level
                text: "cbdjjdfjdfjdbh",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ayush Gupta 2",
    text: "The courage to disagree and the wisdom to agree",
    replies: [
      {
        name: "Akshay2 Saini",
        text: "cbdjjdfjdfjdbh",
        replies: [
          {
            name: "Akshay3 Saini",
            text: "cbdjjdfjdfjdbh",
            replies: [
              {
                name: "Akshay4 Saini", // upto n level
                text: "cbdjjdfjdfjdbh",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },{
    name: "Ayush Gupta 4",
    text: "The courage to disagree and the wisdom to agree",
    replies: [
      {
        name: "Akshay2 Saini",
        text: "cbdjjdfjdfjdbh",
        replies: [
          {
            name: "Akshay3 Saini",
            text: "cbdjjdfjdfjdbh",
            replies: [
              {
                name: "Akshay4 Saini", // upto n level
                text: "cbdjjdfjdfjdbh",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  //console.log(data);
  const { name, text, replies } = data;

  return (
    <div className="flex rounded-md bg-gray-200 shadow-lg my-2 p-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({comments}) =>{

    return (comments.map((comment,index) => 

    <div>
        <Comment key={index} data = {comment}/>
        <div className="pl-5 border border-l-black ml-5">
            <CommentList comments={comment.replies} />
            
        </div>
    </div>
    
    )
    )
}

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentData}/>
    </div>
  );
};

export default CommentContainer;
