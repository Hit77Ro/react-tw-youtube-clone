import { ChannelCard, VideoCard } from "./";

/* eslint-disable react/prop-types */
const Videos = ({ videos }) => {
  return (
    <div className={`container flex flex-wrap  gap-4 p-10 `}>
      {videos.map((item, idx) => (
        <div
          key={idx}
          className="grow basis-[250px] overflow-hidden rounded-xl"
        >
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
