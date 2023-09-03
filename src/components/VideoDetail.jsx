import { fetcher } from "../utils/FetchFromApi";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import { useEffect, useState } from "react";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    // get the video to play it and get it's details
    fetcher(`videos?part=snippet,statistics&id=${id}`)
      .then((d) => setVideo(d.items[0]))
      .catch((error) => {
        console.error("Error fetching video detail:", error);
      });
    // get the related videos

    fetcher(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((d) =>
      setRelatedVideos(d.items),
    );
  }, [id]);
  // const { snippet ,title, statistics: { viewCount, likeCount } } = video;


  if (!video) return <h1 className="font-bold text-white text-3xl">loading...</h1>

  // Todo : add video title ,video channel , comments , likes ,views...,
  return (
    <article className="flex  flex-col sm:flex-row ">
      <div className="flex-1">
        <div className="sticky top-[70px] w-full overflow-hidden rounded-lg">
          <ReactPlayer
            url={`https://www.youtube.com/watch/${id}`}
            controls
            className="react-player"
            width={"100%"}
          />
          <div>
            <h2>  </h2>

          </div>
        </div>
      </div>
      <div className="sm:max-w-[300px]">
        <Videos videos={relatedVideos} />
      </div>
    </article>
  );
};

export default VideoDetail;
