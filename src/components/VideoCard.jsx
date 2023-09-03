/* eslint-disable react-hooks/exhaustive-deps */
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils";
/* eslint-disable react/prop-types */
const VideoCard = ({ video }) => {
  const {
    id: { videoId },
    snippet,
  } = video;
  if (!video) return <h1 className="text-3xl text-white "> loading... </h1>;

  return (
    <>
      <Link
        className="overflow-hidden rounded-lg"
        to={videoId ? `/video/${videoId}` : demoVideoUrl}
      >
        <img
          alt={snippet?.title}
          src={snippet?.thumbnails?.medium?.url || demoThumbnailUrl}
          className="block h-[230px]   w-[100%]"
        />
      </Link>

      <div className="p-4 text-slate-400">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <h2>
            {" "}
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}{" "}
          </h2>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <h3 className="mt-4 flex items-center gap-4 text-[14px] text-slate-700">
            {" "}
            {snippet?.channelTitle || demoChannelTitle}
            <AiOutlineCheckCircle />
          </h3>
        </Link>
      </div>
    </>
  );
};

export default VideoCard;
