import React from "react";

const VideoCard = ({ info }) => {
  //console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />

      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

// higher order component => that takes a function and returns a new function with some modification

export const AdVideoCard = ({info}) => {
  return (
    <div className="border border-red-500 p-1 m-2">
      <VideoCard info={info}/>
    </div>
  );
};

export default VideoCard;
