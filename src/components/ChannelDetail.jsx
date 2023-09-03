import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetcher } from "../utils/FetchFromApi";
import { ChannelCard, Videos } from "./";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetcher(`channels?part=snippet&id=${id}`).then((d) =>
      setChannelDetail(d?.items[0]),
    );
    fetcher(`search?channelId=${id}&part=snippet&order=date`).then((d) =>
      setVideos(d?.items),
    );
  }, [id]);
  console.log(channelDetail)
  if (!channelDetail) return "loading...";
  return (
    <div>
      <div className="bg-black-gradient h-[200px]" />
      <ChannelCard channelDetail={channelDetail} marginTop="mt-[-110px]" />

      <Videos videos={videos} />
    </div>
  );
};

export default ChannelDetail;
