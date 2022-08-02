import React from "react";
import VideoItem from "../VideoItems/VideoItem";
import Videoitems from "./VideoList.module.css";

export default function VideoList({ videos, onVideoSelect }) {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem key={id} video={video} onVideoSelect={onVideoSelect} />
  ));
  return (
    <>
      <div className={Videoitems.advertisment}>
        <img
          src="https://yt3.ggpht.com/4xTK1BDxMrg0c984F5dwZu1FvBDiF1bvR9HAwL-_ntW_N1xF-5VijjZ9dctZ5PccBvjBij1g=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
          alt="Advertismentimg"
        />

        <div className={Videoitems.advertBtm}>
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLTIcgupe3btIUEAiAzeS8BpX-SqGTKwn_iYMkdaeA=s88-c-k-c0x00ffffff-no-rj"
            alt="logo"
          />
          <div className={Videoitems.belowCenter}>
            <p> Bike Service </p>
            <p>
                <span className={Videoitems.spanAd}> Ad  </span>
                <span className={Videoitems.aDwebsite}> gobumpr.com/Bike/Service </span>
            </p>
          </div>
          <div  className={Videoitems.bookNow}>
    BOOK NOW
          </div>
        </div>
      </div>
      <div className={Videoitems.trending}>
        <span className={Videoitems.trendingItems1}>All</span>
        <span className={Videoitems.trendingItems}>Explore</span>
        <span className={Videoitems.trendingItems}>Shorts</span>
        <span className={Videoitems.trendingItems}>Subscriptions</span>
        <span className={Videoitems.trendingItems}>Library</span>
        <span className={Videoitems.trendingItems}>History</span>
      </div>
      <div className={Videoitems.listContainer}>{listOfVideos}</div>
    </>
  );
}
