import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  });

  //const params = useParams()
  //console.log(params) // these are /something so use 'use Search param'

  return (
    <div className="px-5">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
