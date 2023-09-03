/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoProfilePicture,
  demoThumbnailUrl,
  demoChannelUrl,
} from "../utils";
import styles from "../style";
const ChannelCard = ({ channelDetail, marginTop }) => {
  const {
    snippet: {
      channelTitle,
      channelId,
      thumbnails: {
        high: { url },
      },
    },
  } = channelDetail;
  return (
    <Link
      to={`/channel/${channelId}`}
      className={` block h-full flex-col pb-10 text-center ${styles.flexCenter} ${marginTop}`}
    >
      <div className="flex items-center justify-center">
        <img src={url} className="h-[200px] w-[200px] rounded-full" alt="" />
      </div>
      <h3 className="mt-8 text-xl text-white"> {channelTitle} </h3>
      <h3 className="mt-3 text-xl text-white">
        {" "}
        {channelDetail?.statistics?.subscriberCount &&
          parseInt(
            channelDetail?.statistics?.subscriberCount,
          ).toLocaleString()}{" "}
        subscribers
      </h3>
    </Link>
  );
};

export default ChannelCard;
